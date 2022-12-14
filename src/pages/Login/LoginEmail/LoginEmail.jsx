import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { authAtom } from '../../../_state/auth';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';

export default function LoginEmail() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', pw: '' });
  const [auth, setAuth] = useRecoilState(authAtom);
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState('disabled');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setValid(() => 'abled');
  };
  const loginData = {
    user: {
      email: form.email,
      password: form.pw,
    },
  };

  const login = async () => {
    try {
      const response = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/login',
        JSON.stringify(loginData),
        {
          headers: {
            'Content-type': 'application/json',
          },
          data: loginData,
        }
      );
      const { data } = response;
      // console.log(data);
      const { token } = data.user;
      const { accountname } = data.user;
      localStorage.setItem('auth', JSON.stringify(token));
      localStorage.setItem('account', JSON.stringify(accountname));
      setAuth(token);
      if (token) {
        navigate('/home');
      }
      return response;
    } catch (error) {
      setMessage('*이메일 또는 비밀번호가 일치하지 않습니다.');
      // console.log(`Error: ${error.message}`);
      console.error(error);
    }
    return null;
  };

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
          // required="true"
        />
        <Input
          onChange={handleChange}
          name="pw"
          value={form}
          className="pw"
          label="비밀번호"
          type="password"
          message={message}
          // required="true"
        />
        <Button variant={valid} className="loginBtn">
          {'로그인'}
        </Button>
      </InputFormStyle>
      <Link
        to={'/login/sign_up'}
        style={{ display: 'block', marginTop: '20px' }}
      >
        이메일로 회원가입
      </Link>
    </ContSecStyle>
  );
}
