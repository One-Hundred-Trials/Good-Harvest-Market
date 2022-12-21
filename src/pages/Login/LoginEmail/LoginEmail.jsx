import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { authAtom } from '../../../_state/auth';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';

export default function LoginEmail() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', pw: '' });
  const [auth, setAuth] = useRecoilState(authAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  async function login() {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = '/user/login';
    const loginData = {
      user: {
        email: form.email,
        password: form.pw,
      },
    };
    const reqUrl = url + reqPath;
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const json = await res.json();
    const { token } = json.user;
    const { accountname } = json.user;
    console.log(token);
    console.log(accountname);
    localStorage.setItem('auth', JSON.stringify(token));
    localStorage.setItem('account', JSON.stringify(accountname));
    setAuth(token);
    if (token) {
      navigate('/');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
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
