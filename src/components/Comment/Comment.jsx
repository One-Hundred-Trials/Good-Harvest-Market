import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import API from '../../API';
import iconMoreImg from '../../assets/img/icon-more-18.png';
import { authAtom } from '../../_state/auth';
import {
  CommentContainerStyle,
  InfoStyle,
  InfoDiv,
  ProfileImg,
  MoreBtn,
  TxtStyle,
} from './CommentStyle';

export default function Comment({ commentsList }) {
  return (
    <CommentContainerStyle>
      {commentsList ? (
        commentsList.map((comments) => (
          <>
            <InfoStyle>
              <InfoDiv>
                <ProfileImg src={comments.author.image} alt="" />
                <strong>{comments.author.username}</strong>
                <span>{}</span>
              </InfoDiv>
              <MoreBtn>
                <img src={iconMoreImg} alt="" />
              </MoreBtn>
            </InfoStyle>
            <TxtStyle>{comments.content}</TxtStyle>
          </>
        ))
      ) : (
        <p>첫번째 댓글을 달아보세요!</p>
      )}
    </CommentContainerStyle>
  );
}
