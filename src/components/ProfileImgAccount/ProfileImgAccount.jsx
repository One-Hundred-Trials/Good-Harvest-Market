import React from 'react';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import DefaultProfileImg from '../../assets/img/basic-profile.png';
import { ProfileImgContainerStyle } from './ProfileImgAccountStyle';
import ProfileImg from '../ProfileImg/ProfileImg';

export default function ProfileImgAccount({
  width,
  height,
  src,
  margin,
  namemarginbottom,
  username,
  usertext,
  className,
}) {
  return (
    <ProfileImgContainerStyle className={className}>
      <ProfileImg src={src} width={width} height={height} />
      <ProfileAccount
        size="1.4rem"
        margin={margin}
        namemarginbottom={namemarginbottom}
        username={username}
        usertext={usertext}
      />
    </ProfileImgContainerStyle>
  );
}
