import React from 'react';
import {
  FollowStyle,
  ProfileIntroStyle,
  ContDivStyle,
  DivFlexStyle,
} from './ProfileStyle';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import FollowersCount from '../FollowersCount/FollowersCount';
import ProfileImg from '../ProfileImg/ProfileImg';
import ChatIcon from '../../components/ChatIcon/ChatIcon';
import Button from '../../components/Button/Button';
import ShareIcon from '../../components/ShareIcon/ShareIcon';
import DefaultProfileImg from '../../assets/img/basic-profile.png';

export default function Profile({
  username,
  usertext,
  align,
  margin,
  namemarginbottom,
}) {
  const children = '팔로우';
  return (
    <ContDivStyle>
      <FollowStyle>
        <FollowersCount count="3000" follow="follower" />
        <ProfileImg width="110px" height="110px" src={DefaultProfileImg} />
        <FollowersCount count="1200" follow="followings" />
      </FollowStyle>
      <ProfileAccount
        username={username}
        usertext={usertext}
        align={align}
        margin={margin}
        namemarginbottom={namemarginbottom}
      />
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
