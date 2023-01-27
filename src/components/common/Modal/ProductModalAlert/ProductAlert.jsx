import React from 'react';
import deleteProduct from '../../../../api/Product/deleteProduct';
import {
  ModalAlertDiv,
  AlertBox,
  AlertHeader,
  AlertBody,
  AlertButtonLeft,
  AlertButtonRight,
} from './ProductAlertStyle';

export default function ModalAlert({ setAlert, productId, GetProductList }) {
  const alertClose = () => {
    setAlert(false);
  };

  const productDelHandler = async () => {
    await deleteProduct(productId);
    GetProductList();
  };

  return (
    <ModalAlertDiv>
      <AlertBox>
        <AlertHeader>상품을 삭제할까요?</AlertHeader>
        <AlertBody>
          <AlertButtonLeft onClick={alertClose}>취소</AlertButtonLeft>
          <AlertButtonRight onClick={productDelHandler}>삭제</AlertButtonRight>
        </AlertBody>
      </AlertBox>
    </ModalAlertDiv>
  );
}
