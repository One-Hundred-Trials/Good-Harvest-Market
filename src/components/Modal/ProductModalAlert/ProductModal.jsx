import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContainerDiv, ModalUl, ModalBtn } from './ProductModalStyle';

export default function ModalSlide({ productId }) {
  const navigate = useNavigate();
  const goEditHandler = () => {
    navigate(`/product/${productId}/edit`);
  };
  return (
    <ModalContainerDiv>
      <ModalUl>
        <li>
          <ModalBtn>삭제</ModalBtn>
        </li>
        <li>
          <ModalBtn onClick={goEditHandler}>수정</ModalBtn>
        </li>
        <li>
          <ModalBtn>웹사이트에서 상품 보기</ModalBtn>
        </li>
      </ModalUl>
    </ModalContainerDiv>
  );
}
