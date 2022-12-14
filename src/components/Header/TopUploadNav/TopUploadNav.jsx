import React from 'react';
import TopUploadNavbar from './TopUploadNavStyle';
import Button from '../../Button/Button';
import iconArrowLeft from '../../../assets/img/icon-arrow-left.png';

export default function TopUploadNav({ size, variant, children }) {
  return (
    <TopUploadNavbar>
      <button>
        <img src={iconArrowLeft} alt="뒤로가기" height="22" />
      </button>
      <Button size={size} variant={variant}>
        {children}
      </Button>
    </TopUploadNavbar>
  );
}
