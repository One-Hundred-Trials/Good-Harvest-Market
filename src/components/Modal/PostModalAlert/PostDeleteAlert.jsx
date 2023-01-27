import React from 'react';
import deleteAPI from '../../../api/deleteAPI';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './PostAlertStyle';

export default function PostModalAlert({ setAlert, postId }) {
  const accountName = JSON.parse(localStorage.getItem('account'));
  const alertClose = () => {
    setAlert(false);
  };

  const moveProfileHandler = () => {
    window.location.replace(`/my_profile/${accountName}`);
  };

  const postDeleteHandler = async () => {
    try {
      const res = await deleteAPI(`/post/${postId}`);
      setAlert(false);
      moveProfileHandler();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <ModalAlertDiv>
      <AlertBox>
        <AlertHeader>삭제하시겠어요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight onClick={postDeleteHandler}>삭제</AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
