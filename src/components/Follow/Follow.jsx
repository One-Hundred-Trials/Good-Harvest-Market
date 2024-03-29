import React from 'react';
import MessageImg from 'assets/img/icon-message-circle.svg';
import ShareImg from 'assets/img/icon-share.svg';
import {
  FollowButtons,
  FollowBtnStyle,
  ProfileLinkBtnStyle,
} from './FollowStyle';

export default function Follow() {
  return (
    <FollowButtons>
      <ProfileLinkBtnStyle>
        <img src={MessageImg} alt="" />
      </ProfileLinkBtnStyle>
      <FollowBtnStyle>언팔로우</FollowBtnStyle>
      <ProfileLinkBtnStyle>
        <img src={ShareImg} alt="" />
      </ProfileLinkBtnStyle>
    </FollowButtons>
  );
}
