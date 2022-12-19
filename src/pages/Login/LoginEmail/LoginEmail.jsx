import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import authAtom from '../../../_state/auth';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';

export default function LoginEmail() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', pw: '' });
  const [auth, setAuth] = useRecoilState(authAtom);

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
    // console.log(json, '제이손입니다');
    console.log(json);
    const { token } = json.user;
    localStorage.setItem('user', JSON.stringify(token));
    setAuth(token);
    // console.log(auth);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    login();
    if (auth) {
      navigate('/');
    }
  };

  return (
    <ContSecStyle>
      <HeaderStyle>로그인</HeaderStyle>
      <InputFormStyle onSubmit={handelSubmit}>
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
