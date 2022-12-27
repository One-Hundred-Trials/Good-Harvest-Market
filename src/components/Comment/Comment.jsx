import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import iconMoreImg from '../../assets/img/icon-more-18.png';
import { accountAtom } from '../../_state/auth';
import CommentModal from '../Modal/CommentModel/CommentModal';
import {
  CommentContainerStyle,
  InfoStyle,
  InfoDiv,
  ProfileImg,
  MoreBtn,
  TxtStyle,
} from './CommentStyle';

export default function Comment({ comment, postId }) {
  const userAccount = useRecoilValue(accountAtom);
  const [modal, setModal] = useState(false);
  const modalUp = () => {
    setModal(true);
  };

  return (
    <>
      <CommentContainerStyle>
        <InfoStyle>
          <InfoDiv>
            <ProfileImg src={comment.author.image} alt="" />
            <strong>{comment.author.username}</strong>
            <span>{comment.author.accountname}</span>
          </InfoDiv>
          <MoreBtn onClick={modalUp}>
            <img src={iconMoreImg} alt="" />
          </MoreBtn>
        </InfoStyle>
        <TxtStyle>{comment.content}</TxtStyle>
      </CommentContainerStyle>
      {modal && (
        <>
          {userAccount === comment.author.accountname ? (
            <CommentModal
              commentId={comment.id}
              setModal={setModal}
              postId={postId}
              text="삭제"
            />
          ) : (
            <CommentModal
              commentId={comment.id}
              setModal={setModal}
              postId={postId}
              text="신고"
            />
          )}
        </>
      )}
    </>
  );
}
