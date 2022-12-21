import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import authAtom from '../../../_state/auth';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';
import { login, checktoken } from '../../../api/api';

export default function LoginEmail() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', pw: '' });
  const [auth, setAuth] = useRecoilState(authAtom);
  // const auth = useRecoilValue(authAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    login(form, setAuth);
    //  token 검증
    //  checktoken().then((data) => console.log(data.isValid));
    if (auth) {
      navigate('/');
    }
  };

  return (
    <ContSecStyle>
      <HeaderStyle>로그인</HeaderStyle>
      <InputFormStyle onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="email"
          value={form}
          label="이메일"
          type="email"
        />
        <Input
          onChange={handleChange}
          name="pw"
          value={form}
          className="pw"
          label="비밀번호"
          type="password"
        />
        <Button className="loginBtn"> {'로그인'}</Button>
      </InputFormStyle>
      <a style={{ display: 'block', marginTop: '20px' }}>이메일로 회원가입</a>
    </ContSecStyle>
  );
}
