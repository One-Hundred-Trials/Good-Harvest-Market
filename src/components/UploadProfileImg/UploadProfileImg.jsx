import React from 'react';
import {
  InputFileFormStyle,
  UploadProfileLabelStyle,
  UploadProfileInputStyle,
  ProfileImageContainerStyle,
  ProfileImageStyle,
} from './UploadProfileImgStyle';
import basicProfile from '../../assets/img/basic-profile-50.png';

export default function UploadProfileImg({ name, onChange, src }) {
  const onChangehandler = (e) => {
    onChange(e);
  };
  return (
    <InputFileFormStyle>
      <ProfileImageContainerStyle>
        <ProfileImageStyle src={src || basicProfile} alt="프로필 이미지" />
      </ProfileImageContainerStyle>
      <UploadProfileLabelStyle htmlFor="uploadProfile"></UploadProfileLabelStyle>
      <UploadProfileInputStyle
        type="file"
        id="uploadProfile"
        name={name}
        accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
        onChange={onChangehandler}
      />
    </InputFileFormStyle>
  );
}
