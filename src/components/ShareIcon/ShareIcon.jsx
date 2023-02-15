import React, { useRef } from 'react';
import iconShare from 'assets/img/icon-share.svg';
import { ShareBtn, TextArea } from './ShareIconStyle';

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
      <TextArea ref={copyUrlRef} defaultValue={window.location.href} />
    </ShareBtn>
  );
}
