import React from 'react';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './ProductAlertStyle';

export default function ModalAlert({ setAlert }) {
  const alertClose = () => {
    setAlert(false);
  };

  return (
    <ModalAlertDiv>
      <AlertBox>
        <AlertHeader>상품을 삭제할까요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight>삭제</AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
