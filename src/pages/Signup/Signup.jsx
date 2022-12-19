import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import {
  ContSecStyle,
  HeaderStyle,
  InputFormStyle,
  BtnComStyle,
} from './SignupStyle';

const BtnContainerStyle = styled.div`
  margin-top: 14px;
`;

export default function Signup() {
  return (
    <ContSecStyle>
      <HeaderStyle>이메일로 회원가입</HeaderStyle>
      <InputFormStyle>
        <Input
          label="이메일"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
        ></Input>
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 설정해주세요"
        ></Input>
        <BtnContainerStyle>
          <BtnComStyle>{'다음'}</BtnComStyle>
        </BtnContainerStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
}
