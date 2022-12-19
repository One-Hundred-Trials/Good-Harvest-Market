import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';

export default function LoginEmail() {
  const [form, setForm] = useState({ email: '', pw: '' });
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
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
    console.log(json, '제이손입니다');
    const { token } = json.user;
    // console.log(token, '토큰');
    localStorage.setItem('token', token);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    login();
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
        <Button>{'회원가입'}</Button>
      </InputFormStyle>
      <a style={{ display: 'block', marginTop: '20px' }}>이메일로 회원가입</a>
    </ContSecStyle>
  );
}
