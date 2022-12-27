import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ModalBgtDiv,
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
} from './CommentModalStyle';
import ProductAlert from './CommentAlert';

export default function ModalSlide({ productId, setModal }) {
  const [alert, setAlert] = useState(false);
  const alertShow = () => {
    setAlert(true);
  };

  const navigate = useNavigate();
  const goEditHandler = () => {
    navigate(`/product/${productId}/edit`);
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
          <li>
            <ModalBtn>웹사이트에서 상품 보기</ModalBtn>
          </li>
        </ModalUl>
        {alert && <ProductAlert productId={productId} setAlert={setAlert} />}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
