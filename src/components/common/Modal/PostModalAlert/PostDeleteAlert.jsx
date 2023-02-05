import React from 'react';
import deletePost from 'api/Feed/deletePost';
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
    const res = await deletePost(postId);
    setAlert(false);
    moveProfileHandler();
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
