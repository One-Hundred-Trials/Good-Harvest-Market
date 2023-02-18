import React from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '_state/auth';
import reportPost from 'api/Post/reportPost';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './AlertStyle';

export default function PostReportAlert({ setAlert, postId, accountName }) {
  const auth = useRecoilValue(authAtom);
  const reportData = {
    report: {
      post: postId,
    },
  };

  const alertClose = () => {
    setAlert(false);
  };

  const moveProfileHandler = () => {
    window.location.replace(`/user_profile/${accountName}`);
  };

  const reportHandler = async () => {
    setAlert(true);
    try {
      const res = reportPost(postId);
      console.log(res);
      if (res) {
        alert('신고가 접수되었습니다.');
        setAlert(false);
        moveProfileHandler();
      }
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
        <AlertHeader>신고하시겠어요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight onClick={reportHandler}>신고</AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
