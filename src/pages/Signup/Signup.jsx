import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from '../../API';
import Input from '../../components/Input/Input';
import { ContSecStyle, HeaderStyle, InputFormStyle } from './SignupStyle';
import Button from '../../components/Button/Button';

const BtnContainerStyle = styled.div`
  margin-top: 14px;
`;

const Signup = ({ setIsSignupValid, setSignupForm, signupForm }) => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordCheckIsValid, setPasswordCheckIsValid] = useState(false);

  const EmailHandler = async () => {
    const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!signupForm.email) {
      setEmailError('*이메일은 필수 입력사항입니다.');
      setEmailIsValid(false);
    } else if (!regex.test(signupForm.email)) {
      setEmailError(`잘못된 이메일 형식입니다.`);
      setEmailIsValid(false);
    }
    try {
      const emailCheckData = {
        user: {
          email: signupForm.email,
        },
      };
      const res = await API.post(
        '/user/emailvalid',
        JSON.stringify(emailCheckData),
        {
          headers: {
            'Content-type': 'application/json',
          },
          data: emailCheckData,
        }
      );
      const json = res.data;
      if (json.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailError(`*${json.message}`);
        setEmailIsValid(false);
      } else if (json.message === '사용 가능한 이메일 입니다.') {
        setEmailError('');
        setEmailIsValid(true);
      }
    } catch (err) {
      console.error(err);
      setEmailIsValid(false);
    }
  };

  const PasswordHandler = () => {
    if (!signupForm.password) {
      setPasswordError('* 비밀번호는 필수 입력사항입니다.');
      setPasswordIsValid(false);
    } else if (signupForm.password.length < 6) {
      setPasswordError('* 비밀번호는 6자 이상이어야 합니다.');
      setPasswordIsValid(false);
    } else {
      setPasswordError('');
      setPasswordIsValid(true);
    }
  };

  const PasswordCheckHandler = () => {
    if (!signupForm.passwordCheck) {
      setPasswordCheckError('* 비밀번호 확인은 필수 입력사항입니다.');
      setPasswordCheckIsValid(false);
    } else if (signupForm.passwordCheck !== signupForm.password) {
      setPasswordCheckError('* 입력한 비밀번호와 일치하지 않습니다.');
      setPasswordCheckIsValid(false);
    } else {
      setPasswordCheckError('');
      setPasswordCheckIsValid(true);
    }
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setEmailError();
  }, [signupForm.email]);

  useEffect(() => {
    setPasswordError();
  }, [signupForm.password]);

  useEffect(() => {
    setPasswordError();
  }, [signupForm.passwordCheck]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (emailIsValid && passwordIsValid && passwordCheckIsValid) {
      setIsSignupValid(true);
    }
  };

  return (
    <ContSecStyle>
      <HeaderStyle>이메일로 회원가입</HeaderStyle>
      <InputFormStyle onSubmit={SubmitHandler}>
        <Input
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일 주소를 입력해주세요"
          value={signupForm}
          onBlur={EmailHandler}
          onChange={inputChangeHandler}
          message={emailError}
        ></Input>
        <Input
          label="비밀번호"
          type="password"
          name="password"
          placeholder="6자리 이상의 비밀번호를 설정해주세요"
          value={signupForm}
          onBlur={PasswordHandler}
          onChange={inputChangeHandler}
          min="6"
          message={passwordError}
        ></Input>
        <Input
          label="비밀번호 확인"
          type="password"
          name="passwordCheck"
          placeholder="위에서 설정한 비밀번호를 그대로 입력해주세요"
          value={signupForm}
          onBlur={PasswordCheckHandler}
          onChange={inputChangeHandler}
          message={passwordCheckError}
        ></Input>
        <BtnContainerStyle>
          <Button
            variant={
              signupForm.email &&
              signupForm.password &&
              signupForm.passwordCheck
                ? 'abled'
                : 'disabled'
            }
            disabled={
              !signupForm.email ||
              !signupForm.password ||
              !signupForm.passwordCheck
            }
          >
            {'다음'}
          </Button>
        </BtnContainerStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
};

export default Signup;
