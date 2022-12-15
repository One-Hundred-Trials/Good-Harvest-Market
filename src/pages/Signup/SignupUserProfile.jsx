import React from 'react';
import styled from 'styled-components';
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
import Input from '../../components/Input/Input';

const BtnContainerStyle = styled.div`
  margin-top: 14px;
`;

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
        <Input
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
        ></Input>
        <Input
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        ></Input>
        <Input
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        ></Input>

        <BtnContainerStyle>
          <BtnComStyle>{'풍년마켓 시작하기'}</BtnComStyle>
        </BtnContainerStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
}
