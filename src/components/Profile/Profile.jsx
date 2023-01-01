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

export default function Profile({
  myProfile,
  align,
  margin,
  namemarginbottom,
  children,
}) {
  const { accountname, followerCount, followingCount, image, username, intro } =
    { ...myProfile };
  return (
    <ContDivStyle>
      <FollowStyle>
        <FollowersCount
          count={followerCount}
          follow="follower"
          src={`/${accountname}/follower`}
        />
        <ProfileImg width="110px" height="110px" image={image} />
        <FollowersCount
          count={followingCount}
          follow="followings"
          src={`/${accountname}/following`}
        />
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
      <DivFlexStyle>{children}</DivFlexStyle>
    </ContDivStyle>
  );
}
