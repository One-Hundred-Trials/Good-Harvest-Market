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
  // usertext,
  align,
  margin,
  namemarginbottom,
  children,
}) {
  // const children = '팔로우';
  // const { username, accountname } = myProfile;
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
        // myProfile={myProfile}
        username={username}
        // usertext={intro}
        align={align}
        margin={margin}
        namemarginbottom={namemarginbottom}
      />
      <ProfileIntroStyle>{intro}</ProfileIntroStyle>
      <DivFlexStyle>
        {/* <ChatIcon /> */}
        {children}
        {/* <Button size="m">{children}</Button> */}
        {/* <ShareIcon /> */}
      </DivFlexStyle>
    </ContDivStyle>
  );
}
