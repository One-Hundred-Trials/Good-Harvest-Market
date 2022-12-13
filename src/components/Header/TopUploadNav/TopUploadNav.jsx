import React from 'react';
import TopUploadNavbar from './TopUploadNavStyle';
import iconArrowLeft from '../../../assets/img/icon-arrow-left.png';

export default function TopUploadNav() {
  return (
    <TopUploadNavbar>
      <button>
        <img src={iconArrowLeft} alt="뒤로가기" height="22" />
      </button>
    </TopUploadNavbar>
  );
}
