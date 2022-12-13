import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import { Wrap } from '../../../styles/GlobalStyles';

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
const BtnComStyle = styled.Button`
  margin: 20px;
  background-color: red;
`;

export default function LoginEmail() {
  return (
    <ContSecStyle>
      <HeaderStyle>로그인</HeaderStyle>
      <InputFormStyle>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        <label htmlFor="pw">비밀번호</label>
        <input type="password" id="pw" />
        <BtnComStyle>{'로그인'}</BtnComStyle>
      </InputFormStyle>
      <a style={{ display: 'block', marginTop: '20px' }}>이메일로 회원가입</a>
    </ContSecStyle>
  );
}
