import React from 'react';
import profileImg from '../../assets/img/basic-profile-50.png';
import iconMoreImg from '../../assets/img/icon-more-18.png';
import {
  CommentContainerStyle,
  InfoStyle,
  InfoDiv,
  ProfileImg,
  MoreBtn,
  TxtStyle,
} from './CommentStyle';

export default function Comment(props) {
  return (
    <CommentContainerStyle style={{ margin: props.margin }}>
      <InfoStyle>
        <InfoDiv>
          <ProfileImg src={profileImg} alt="" />
          <strong>{props.username}</strong>
          <span>{props.time}</span>
        </InfoDiv>
        <MoreBtn>
          <img src={iconMoreImg} alt="" />
        </MoreBtn>
      </InfoStyle>
      <TxtStyle>{props.txt}</TxtStyle>
    </CommentContainerStyle>
  );
}
