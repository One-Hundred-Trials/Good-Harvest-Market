import React, { useState, useRef, useEffect } from 'react';
import { logDOM } from '@testing-library/react';
import PostReportAlert from 'components/Common/Alert/PostReportAlert';
import {
  ModalContainerDiv,
  ModalUl,
  ModalBtn,
  ModalBgtDiv,
} from './ModalStyle';

export default function PostReportModal({ setModal, postId, accountName }) {
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
            <ModalBtn onClick={alertShow}>신고하기</ModalBtn>
          </li>
        </ModalUl>
        {alert && (
          <PostReportAlert
            accountName={accountName}
            postId={postId}
            setAlert={setAlert}
          />
        )}
      </ModalContainerDiv>
    </ModalBgtDiv>
  );
}
