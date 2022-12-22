import React from 'react';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import DefaultProfileImg from '../../assets/img/basic-profile.png';
import { ProfileImgContainerStyle } from './ProfileImgAccountStyle';
import ProfileImg from '../ProfileImg/ProfileImg';

export default function ProfileImgAccount({
  width,
  height,
  margin,
  namemarginbottom,
  className,
  author,
}) {
  const { username, accountname } = author;
  return (
    <ProfileImgContainerStyle className={className}>
      <ProfileImg image={author.image} width={width} height={height} />
      <ProfileAccount
        size="1.4rem"
        margin={margin}
        namemarginbottom={namemarginbottom}
        username={username}
        accountname={accountname}
      />
    </ProfileImgContainerStyle>
  );
}
