import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import Button from '../../../components/common/Button/Button';
import Input from '../../../components/common/Input/Input';
import { authAtom } from '../../../_state/auth';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './LoginEmailStyle';
import postUserLogin from '../../../api/Login/postUserLogin';

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
    const data = await postUserLogin(loginData);
    if (data.status === 422) {
      setMessage('*이메일 또는 비밀번호가 일치하지 않습니다.');
    } else {
      const { token } = data.user;
      const { accountname } = data.user;
      localStorage.setItem('auth', JSON.stringify(token));
      localStorage.setItem('account', JSON.stringify(accountname));
      setAuth(token);
      if (token) {
        navigate('/home');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <MetaDatas
        title={'이메일로 로그인하기'}
        desc={'풍년마켓에서 이메일 로그인하기'}
      />
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
    </>
  );
}
