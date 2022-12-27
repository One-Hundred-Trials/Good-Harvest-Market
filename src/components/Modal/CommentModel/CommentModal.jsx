import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ModalBgtDiv,
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
} from './CommentModalStyle';
import ProductAlert from './CommentAlert';

export default function ModalSlide({ setModal, text }) {
  // const [alert, setAlert] = useState(false);
  // const alertShow = () => {
  //   setAlert(true);
  // };

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
            <ModalBtn>{text}</ModalBtn>
          </li>
        </ModalUl>
        {/* {alert && <Alert commentId={commentId} setAlert={setAlert} />} */}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
