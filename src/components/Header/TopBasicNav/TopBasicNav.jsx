import React from 'react';
import TopBasicNavbar from './TopBasicNavStyle';
import iconArrowLeft from '../../../assets/img/icon-arrow-left.png';
import iconMore from '../../../assets/img/icon-more-18.png';

export default function TopBasicNav() {
  return (
    <TopBasicNavbar>
      <button>
        <img src={iconArrowLeft} alt="뒤로가기" height="22" />
      </button>
      <button>
        <img src={iconMore} alt="더보기" height="22" />
      </button>
    </TopBasicNavbar>
  );
}
