import React from 'react';
import { TopSearchNavbar, TopSearchInput } from './TopSearchNavStyle';
import iconArrowLeft from '../../../assets/img/icon-arrow-left.png';

export default function TopSearchNav() {
  return (
    <TopSearchNavbar>
      <button>
        <img src={iconArrowLeft} alt="뒤로가기" height="22" />
      </button>
      <TopSearchInput type="text" placeholder="계정 검색" />
    </TopSearchNavbar>
  );
}
