import React from 'react';
import DefaultProfileImg from '../../../assets/img/basic-profile.png';
import { ProfileImgStyle, ProfileContImg } from './ProfileImgStyle';

export default function ProfileImg({ image, width, height }) {
  return (
    <ProfileContImg width={width} height={height}>
      <ProfileImgStyle src={image} alt="프로필 이미지" />
    </ProfileContImg>
  );
}
