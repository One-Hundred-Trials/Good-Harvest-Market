import React from 'react';
import DefaultProfileImg from '../../assets/img/basic-profile.png';
import ProfileImgStyle from './ProfileImgStyle';

export default function ProfileImg({ src, width, height }) {
  return (
    <ProfileImgStyle
      src={src}
      alt="프로필 이미지"
      width={width}
      height={height}
    />
  );
}
