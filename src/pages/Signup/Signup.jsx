import React from 'react';
import {
  ContSecStyle,
  HeaderStyle,
  InputFormStyle,
  BtnComStyle,
} from './SignupStyle';

export default function Signup() {
  return (
    <ContSecStyle>
      <HeaderStyle>이메일로 회원가입</HeaderStyle>
      <InputFormStyle>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        <label htmlFor="pw">비밀번호</label>
        <input type="password" id="pw" />
        <BtnComStyle>{'다음'}</BtnComStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
}
