import React, { useState } from 'react';
import iconMoreImg from '../../assets/img/icon-more-18.png';
import CommentModal from '../Modal/CommentModel/CommentModal';
import {
  CommentContainerStyle,
  InfoStyle,
  InfoDiv,
  MoreBtn,
  TxtStyle,
} from './CommentStyle';
import ProfileImg from '../ProfileImg/ProfileImg';
import deleteAPI from '../../api/deleteAPI';
import postComment from '../../api/Comment/postComment';

export default function Comment({ comment, postId, deleteComment }) {
  const userAccount = JSON.parse(localStorage.getItem('account'));
  const [modal, setModal] = useState(false);
  const [commentText, setReportComment] = useState(`${comment.content}`);

  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const nowDate = detailDate(new Date(comment.createdAt));

  const modalUp = () => {
    setModal(true);
  };

  const commentReport = {
    report: {
      comment: comment.id,
    },
  };

  const commentDelHandler = async () => {
    try {
      const res = await deleteAPI(`/post/${postId}/comments/${comment.id}`);
      console.log(res);
      deleteComment();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const commentReportHandler = async () => {
    try {
      const res = await postComment(postId, comment, commentReport);
      console.log(res);
      setReportComment(`신고가 접수되었습니다.`);
      setModal(false);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <>
      <CommentContainerStyle>
        <InfoStyle>
          <InfoDiv>
            <ProfileImg
              width="36px"
              height="36px"
              image={comment.author.image}
              alt=""
            />
            <strong>{comment.author.username}</strong>
            <span>{nowDate}</span>
          </InfoDiv>
          <MoreBtn onClick={modalUp}>
            <img src={iconMoreImg} alt="" />
          </MoreBtn>
        </InfoStyle>
        <TxtStyle>{commentText}</TxtStyle>
      </CommentContainerStyle>
      {modal && (
        <>
          {userAccount === comment.author.accountname ? (
            <CommentModal
              commentId={comment.id}
              setModal={setModal}
              postId={postId}
              text="삭제"
              alertAsk="댓글을 삭제할까요?"
              request="삭제"
              onClickHandler={commentDelHandler}
            />
          ) : (
            <CommentModal
              commentId={comment.id}
              setModal={setModal}
              postId={postId}
              text="신고"
              alertAsk="해당 댓글을 신고할까요?"
              request="신고"
              onClickHandler={commentReportHandler}
            />
          )}
        </>
      )}
    </>
  );
}
