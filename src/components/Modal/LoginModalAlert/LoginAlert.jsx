import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ModalAlertDiv = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 40vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  height: 110px;
  width: 252px;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  border-radius: 10px;
`;
const AlertHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  height: 64px;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
`;
const AlertBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AlertButtonLeft = styled.button`
  width: 100%;
  height: 46px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 0 0 0 10px;
  border-right: 1px solid #dbdbdb;
`;
const AlertButtonRight = styled.button`
  width: 100%;
  height: 46px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 0 0 10px 0;
  color: #0a6d32;
`;

export default function ModalAlert({ setAlert }) {
  const navigate = useNavigate();

  const alertClose = () => {
    setAlert(false);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('account');
    navigate('/login');
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
