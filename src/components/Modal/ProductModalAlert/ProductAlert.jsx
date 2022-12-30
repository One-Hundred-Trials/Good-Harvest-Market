import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import API from '../../../API';
import { accountAtom, authAtom } from '../../../_state/auth';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './ProductAlertStyle';

export default function ModalAlert({ setAlert, productId, GetProductList }) {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const alertClose = () => {
    setAlert(false);
  };

  const productDelHandler = async () => {
    try {
      const res = await API.delete(`/product/${productId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
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
        <AlertHeader>상품을 삭제할까요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight
            onClick={() => {
              productDelHandler();
              GetProductList();
            }}
          >
            삭제
          </AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
