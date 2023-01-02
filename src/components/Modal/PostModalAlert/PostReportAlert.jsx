import React from 'react';
import { useRecoilValue } from 'recoil';
import API from '../../../API';
import { authAtom } from '../../../_state/auth';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './PostAlertStyle';

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
      const res = await API.post(
        `/post/${postId}/report`,
        JSON.stringify(reportData),
        {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        }
      );
      console.log(res);
      if (res) {
        // alert('신고가 접수되었습니다.');
        console.log(accountName);
        setAlert(false);
        moveProfileHandler();
      }
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
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
