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
  username,
  image,
  accountname,
  search,
}) {
  // const { username, accountname } = author;
  console.log(search);
  return (
    <ProfileImgContainerStyle className={className}>
      <ProfileImg image={image} width={width} height={height} />
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
