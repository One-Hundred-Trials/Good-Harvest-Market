import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './LoginAlertStyle';

export default function ModalAlert({ setAlert }) {
  const navigate = useNavigate();

  const alertClose = () => {
    setAlert(false);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('account');
    navigate('/');
  };

  return (
    <ModalAlertDiv>
      <AlertBox>
        <AlertHeader>로그아웃하시겠어요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight onClick={logout}>로그아웃</AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
