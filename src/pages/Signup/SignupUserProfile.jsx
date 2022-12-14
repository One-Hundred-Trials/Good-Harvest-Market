import React from 'react';
import {
  ContSecStyle,
  HeaderStyle,
  DescriptStyle,
  InputFormStyle,
  BtnComStyle,
  InputFileFormStyle,
  UploadProfileLabelStyle,
  UploadProfileInputStyle,
} from './SignupUserProfileStyle';
import basicProfile from '../../assets/img/basic-profile.png';

export default function SignupUserProfile() {
  return (
    <ContSecStyle>
      <HeaderStyle>프로필 설정</HeaderStyle>
      <DescriptStyle>나중에 언제든지 변경할 수 있습니다.</DescriptStyle>
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
        <BtnComStyle>{'감귤마켓 시작하기'}</BtnComStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
}
