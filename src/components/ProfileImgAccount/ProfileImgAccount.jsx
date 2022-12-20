import React from 'react';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import ProfileComponentImg from '../../assets/img/basic-profile.png';
import {
  ProfileImgContainerStyle,
  ProfileComponentImgStyle,
} from './ProfileImgAccountStyle';

export default function ProfileImgAccount({
  width,
  src,
  margin,
  namemarginbottom,
  username,
  usertext,
  className,
}) {
  return (
    <ProfileImgContainerStyle className={className}>
      <ProfileComponentImgStyle src={src} width={width} />
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
