import React from 'react';
import basicProfile from '../../assets/img/basic-profile-50.png';
import {
  InputFileFormStyle,
  UploadProfileLabelStyle,
  UploadProfileInputStyle,
} from './ProfileImgStyle';

export default function ProfileImg() {
  return (
    <InputFileFormStyle>
      <img src={basicProfile} alt="프로필 이미지" width="110" height="110" />
      <UploadProfileLabelStyle htmlFor="uploadProfile"></UploadProfileLabelStyle>
      <UploadProfileInputStyle type="file" id="uploadProfile" />
    </InputFileFormStyle>
  );
}
