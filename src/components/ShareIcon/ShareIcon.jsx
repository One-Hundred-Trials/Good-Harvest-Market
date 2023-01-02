import React, { useRef } from 'react';
import styled from 'styled-components';
import iconShare from '../../assets/img/icon-share.png';

const ShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  img {
    width: 15px;
    height: 15px;
  }
`;

const TextArea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

export default function ShareIcon() {
  const copyUrlRef = useRef();
  const copyUrl = () => {
    if (!document.queryCommandSupported('copy')) {
      alert('복사 기능이 지원되지 않는 브라우저입니다.');
    } else {
      copyUrlRef.current.select();
      document.execCommand('copy');

      alert('URL 주소가 복사되었습니다.');
    }
  };
  return (
    <ShareBtn onClick={copyUrl}>
      <img src={iconShare} alt="" />
      <TextArea ref={copyUrlRef} value={window.location.href} />
    </ShareBtn>
  );
}
