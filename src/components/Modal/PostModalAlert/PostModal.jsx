import React from 'react';
import { ModalContainerDiv, ModalUl, ModalBtn } from './PostModalStyle';

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
      </ModalUl>
    </ModalContainerDiv>
  );
}
