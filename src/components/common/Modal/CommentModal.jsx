import React, { useState, useRef, useEffect } from 'react';
import {
  ModalBgtDiv,
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
} from './ModalStyle';
import CommentAlert from '../Alert/CommentAlert';

export default function ModalSlide({
  setModal,
  commentId,
  postId,
  text,
  alertAsk,
  request,
  onClickHandler,
}) {
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
  }, [setModal]);

  return (
    <ModalBgtDiv>
      <ModalContainerDiv ref={modalRef}>
        <ModalUl>
          <li>
            <ModalBtn onClick={alertShow}>{text}</ModalBtn>
          </li>
        </ModalUl>
        {alert && (
          <CommentAlert
            commentId={commentId}
            setAlert={setAlert}
            postId={postId}
            alertAsk={alertAsk}
            request={request}
            onClickHandler={onClickHandler}
          />
        )}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
