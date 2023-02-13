import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostDeleteAlert from '../Alert/PostDeleteAlert';
import {
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
  ModalBgtDiv,
} from './ModalStyle';

export default function PostModal({ postId, setModal }) {
  const [alert, setAlert] = useState(false);
  const alertShow = () => {
    setAlert(true);
  };

  const navigate = useNavigate();
  const goEditHandler = () => {
    navigate(`/post/${postId}/edit`);
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
            <ModalBtn onClick={alertShow}>삭제</ModalBtn>
          </li>
          <li>
            <ModalBtn onClick={goEditHandler}>수정</ModalBtn>
          </li>
        </ModalUl>
        {alert && <PostDeleteAlert postId={postId} setAlert={setAlert} />}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
