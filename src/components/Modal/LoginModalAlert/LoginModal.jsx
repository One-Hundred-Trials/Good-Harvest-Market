import React, { useState, useRef, useEffect } from 'react';
import {
  ModalBgtDiv,
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
} from './LoginModalStyle';
import LoginAlert from './LoginAlert';

export default function ModalSlide({ setModal }) {
  const [alert, setAlert] = useState(false);
  const alertShow = () => {
    setAlert(true);
  };

  const modalRef = useRef();
  useEffect(() => {
    const modalTouchCloseHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', modalTouchCloseHandler);
    document.addEventListener('touchstart', modalTouchCloseHandler);
    return () => {
      document.removeEventListener('mousedown', modalTouchCloseHandler);
      document.removeEventListener('touchstart', modalTouchCloseHandler);
    };
  });

  return (
    <ModalBgtDiv>
      <ModalContainerDiv ref={modalRef}>
        <ModalUl>
          <li>
            <ModalBtn>설정 및 개인정보</ModalBtn>
          </li>
          <li>
            <ModalBtn onClick={alertShow}>로그아웃</ModalBtn>
          </li>
        </ModalUl>
        {alert && <LoginAlert setAlert={setAlert} />}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
