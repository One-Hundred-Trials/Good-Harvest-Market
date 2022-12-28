import React from 'react';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './CommentAlertStyle';

export default function CommentAlert({
  setAlert,
  alertAsk,
  request,
  onClickHandler,
}) {
  const alertClose = () => {
    setAlert(false);
  };

  return (
    <ModalAlertDiv>
      <AlertBox>
        <AlertHeader>{alertAsk}</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight onClick={onClickHandler}>
            {request}
          </AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
