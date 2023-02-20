import React from 'react';
import ProfileAccount from 'components/common/ProfileAccount/ProfileAccount';
import FollowersCount from 'components/FollowersCount/FollowersCount';
import ProfileImg from 'components/common/ProfileImg/ProfileImg';
import {
  FollowStyle,
  ProfileIntroStyle,
  ContDivStyle,
  DivFlexStyle,
} from './ProfileStyle';

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
      <DivFlexStyle>
        {/* <ChatIcon /> */}
        {children}
        {/* <ShareIcon /> */}
      </DivFlexStyle>
    </ContDivStyle>
  );
}
