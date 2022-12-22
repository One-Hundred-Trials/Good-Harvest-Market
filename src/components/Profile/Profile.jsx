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
  myProfile,
  align,
  margin,
  namemarginbottom,
  children,
}) {
  const {
    id,
    accountname,
    follower,
    followerCount,
    following,
    followingCount,
    image,
    username,
    intro,
  } = { ...myProfile };
  return (
    <ContDivStyle>
      <FollowStyle>
        <FollowersCount count={followerCount} follow="follower" />
        <ProfileImg width="110px" height="110px" image={image} />
        <FollowersCount count={followingCount} follow="followings" />
      </FollowStyle>
      <ProfileAccount
        accountname={accountname}
        username={username}
        usertext={intro}
        align={align}
        margin={margin}
        namemarginbottom={namemarginbottom}
      />
      <ProfileIntroStyle>{intro}</ProfileIntroStyle>
      <DivFlexStyle>
        {/* <ChatIcon /> */}
        {children}
        {/* <ShareIcon /> */}
      </DivFlexStyle>
    </ContDivStyle>
  );
}
