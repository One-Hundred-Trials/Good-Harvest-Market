import React from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
// import {
//   ContSecStyle,
//   HeaderStyle,
//   InputFormStyle,
//   BtnComStyle,
// } from './LoginEmailStyle';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';

export default function LoginEmail(props) {
  console.log(props);
  return (
    <ContSecStyle>
      <HeaderStyle>로그인</HeaderStyle>
      <InputFormStyle>
        <Input label="이메일" type="email" />
        <Input className="pw" label="비밀번호" type="password" />
        <Button>{'회원가입'}</Button>
      </InputFormStyle>
      <a style={{ display: 'block', marginTop: '20px' }}>이메일로 회원가입</a>
    </ContSecStyle>
  );
}
