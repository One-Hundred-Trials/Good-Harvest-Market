import React from 'react';
import styled from 'styled-components';
import BtnStyle from '../../components/Button/Button';
import { Wrap } from '../../styles/GlobalStyles';
import uploadFile from '../../assets/img/upload-file.png';
import basicProfile from '../../assets/img/basic-profile.png';

const ContSecStyle = styled.section`
  ${Wrap}
  text-align: center;
  /* background-color: var(--sub-grey-C4); */
  color: var(--main-grey-76);
`;

const HeaderStyle = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 30px;
  padding: 30px 0 40px 0;
  color: black;
`;

const DescriptStyle = styled.h2`
  margin-top: -28px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--main-grey-76);
`;

const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin: 0 auto;
  text-align: left;
  label {
  }
  input {
    width: 322px;
    height: 33px;
    border: transparent;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 16px;
    outline: none;
    &:focus {
      border-bottom: 2px solid var(--point-green);
    }
  }
`;
const BtnComStyle = styled(BtnStyle)`
  ${BtnStyle};
  margin: 20px;
`;
const InputFileFormStyle = styled.div`
  height: 110px;
  margin: 30px auto;
  position: relative;
  width: 110px;
`;
const UploadProfileLabelStyle = styled.label`
  right: 0px;
  bottom: 0px;
  position: absolute;
  background: url(${uploadFile}) no-repeat 50%/36px;
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
const UploadProfileInputStyle = styled.input`
  display: none;
`;

export default function Signup() {
  return (
    <>
      {/* <ContSecStyle>
        <HeaderStyle>이메일로 회원가입</HeaderStyle>
        <InputFormStyle>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" />
          <BtnComStyle>{'다음'}</BtnComStyle>
        </InputFormStyle>
      </ContSecStyle> */}
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
    </>
  );
}
