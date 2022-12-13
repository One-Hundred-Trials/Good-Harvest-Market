import React from 'react';
import {
  ContSecStyle,
  HeaderStyle,
  InputFormStyle,
  BtnComStyle,
} from './LoginEmailStyle';

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
