import React from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
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

export default function PostReportAlert({ setAlert, postId }) {
  const auth = useRecoilValue(authAtom);
  const { id } = useParams();
  const alertClose = () => {
    setAlert(false);
  };

  const moveProfileHandler = () => {
    window.location.replace(`/user_profile/${id}`);
  };

  const reportData = {
    report: {
      post: postId,
    },
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
      setAlert(false);
      moveProfileHandler();
      if (res) {
        alert('신고가 접수되었습니다.');
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
