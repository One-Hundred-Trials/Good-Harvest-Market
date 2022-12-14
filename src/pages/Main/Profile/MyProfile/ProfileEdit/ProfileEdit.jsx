import React from 'react';
import TopUploadNav from '../../../../../components/Header/TopUploadNav/TopUploadNav';
import {
  InputFormStyle,
  InputFileFormStyle,
  UploadProfileLabelStyle,
  UploadProfileInputStyle,
} from './ProfileEditStyle';
import basicProfile from '../../../../../assets/img/basic-profile.png';

export default function ProfileEdit() {
  return (
    <>
      <TopUploadNav size="m" variant="able">
        저장
      </TopUploadNav>
      <InputFormStyle>
        <InputFileFormStyle>
          <img
            src={basicProfile}
            alt="프로필 이미지"
            width="110"
            height="110"
          />
          <UploadProfileLabelStyle htmlFor="uploadProfile"></UploadProfileLabelStyle>
          <UploadProfileInputStyle type="file" id="uploadProfile" />
        </InputFileFormStyle>
        <label htmlFor="username">사용자 이름</label>
        <input type="text" id="username" />
        <label htmlFor="userid">계정 ID</label>
        <input type="text" id="userid" />
        <label htmlFor="introduction">소개</label>
        <input type="text" id="introduction" />
      </InputFormStyle>
    </>
  );
}
