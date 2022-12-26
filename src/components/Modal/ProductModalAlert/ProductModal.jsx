import React from 'react';
import { ModalContainerDiv, ModalUl, ModalBtn } from './ProductModalStyle';

export default function ModalSlide() {
  return (
    <ModalContainerDiv>
      <ModalUl>
        <li>
          <ModalBtn>삭제</ModalBtn>
        </li>
        <li>
          <ModalBtn>수정</ModalBtn>
        </li>
        <li>
          <ModalBtn>웹사이트에서 상품 보기</ModalBtn>
        </li>
      </ModalUl>
    </ModalContainerDiv>
  );
}
