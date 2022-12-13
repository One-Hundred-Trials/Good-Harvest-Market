import React from 'react';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import ProfileComponentImg from '../../assets/img/basic-profile.png';
import {
  ProfileImgContainerStyle,
  ProfileComponentImgStyle,
} from './ProfileImgAccountStyle';

export default function ProfileImgAccount({ width, marginbottom }) {
  return (
    <ProfileImgContainerStyle>
      <ProfileComponentImgStyle src={ProfileComponentImg} width={width} />
      <ProfileAccount size="1.4rem" marginbottom={marginbottom} />
    </ProfileImgContainerStyle>
  );
}
