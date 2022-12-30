import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import DefaultProfileImg from '../../assets/img/basic-profile.png';
import {
  ProfileImgContainerStyle,
  ProfileImageContainerStyle,
  ProfileImageStyle,
} from './ProfileImgAccountStyle';
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
  href,
}) {
  // const { username, accountname } = author;
  return (
    <ProfileImgContainerStyle className={className}>
      <Link to={href} style={{ display: 'flex' }}>
        <ProfileImageContainerStyle>
          <ProfileImageStyle
            src={image}
            width={width}
            height={height}
            alt="프로필 이미지"
          />
        </ProfileImageContainerStyle>
        <ProfileAccount
          size="1.4rem"
          margin={margin}
          namemarginbottom={namemarginbottom}
          username={username}
          accountname={accountname}
        />
      </Link>
    </ProfileImgContainerStyle>
  );
}
