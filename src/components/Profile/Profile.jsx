import React from 'react';
import { FollowStyle, ProfileIntroStyle } from './ProfileStyle';
import ProfileAcount from '../ProfileAccount/ProfileAccount';
import FollowersCount from '../FollowersCount/FollowersCount';
import FollowingsCount from '../FollowingsCount/FollowingsCount';
import ProfileImg from '../ProfileImg/ProfileImg';

export default function Profile() {
  return (
    <div>
      <FollowStyle>
        <FollowersCount />
        <ProfileImg />
        <FollowingsCount />
      </FollowStyle>
      <ProfileAcount />
      <ProfileIntroStyle>
        애월읍 주말 감귤 농장입니다. 전국 배송 가능
      </ProfileIntroStyle>
    </div>
  );
}
