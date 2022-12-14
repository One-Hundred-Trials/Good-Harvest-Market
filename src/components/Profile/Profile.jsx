import React from 'react';
import {
  FollowStyle,
  ProfileIntroStyle,
  ContDivStyle,
  DivFlexStyle,
} from './ProfileStyle';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import FollowersCount from '../FollowersCount/FollowersCount';
import FollowingsCount from '../FollowingsCount/FollowingsCount';
import ProfileImg from '../ProfileImg/ProfileImg';
import ChatIcon from '../../components/ChatIcon/ChatIcon';
import Button from '../../components/Button/Button';
import ShareIcon from '../../components/ShareIcon/ShareIcon';

export default function Profile({ align }) {
  const children = '팔로우';
  return (
    <ContDivStyle>
      <FollowStyle>
        <FollowersCount />
        <ProfileImg />
        <FollowingsCount />
      </FollowStyle>
      <ProfileAccount align={align} />
      <ProfileIntroStyle>
        애월읍 주말 감귤 농장입니다. 전국 배송 가능
      </ProfileIntroStyle>
      <DivFlexStyle>
        <ChatIcon />
        <Button size="m">{children}</Button>
        <ShareIcon />
      </DivFlexStyle>
    </ContDivStyle>
  );
}
