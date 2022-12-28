import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import API from '../../API';
import { authAtom, accountAtom } from '../../_state/auth';
import iconMoreImg from '../../assets/img/icon-more-18.png';
import CommentModal from '../Modal/CommentModel/CommentModal';
import {
  CommentContainerStyle,
  InfoStyle,
  InfoDiv,
  ProfileImg,
  MoreBtn,
  TxtStyle,
} from './CommentStyle';

export default function Comment({ comment, postId, deleteComment }) {
  const userAccount = useRecoilValue(accountAtom);
  const auth = useRecoilValue(authAtom);
  const [modal, setModal] = useState(false);
  const [commentText, setReportComment] = useState(`${comment.content}`);
  const modalUp = () => {
    setModal(true);
  };

  const commentReport = {
    report: {
      comment: comment.id,
    },
  };

  // 댓글 삭제
  const commentDelHandler = async () => {
    try {
      const res = await API.delete(`/post/${postId}/comments/${comment.id}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
      console.log(res);
      deleteComment();
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  // 댓글 신고
  const commentReportHandler = async () => {
    try {
      const res = await API.post(
        `/post/${postId}/comments/${comment.id}/report`,
        JSON.stringify(commentReport),
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        }
      );
      console.log(res);
      setReportComment(`신고가 접수되었습니다.`);
      setModal(false);
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
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
            <ProfileImg src={comment.author.image} alt="" />
            <strong>{comment.author.username}</strong>
            <span>{comment.createdAt}</span>
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
