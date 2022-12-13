import React from 'react';
import { TopMainNavbar, TopMainH3 } from './TopMainNavStyle';
import iconSearch from '../../../assets/img/icon-search.png';

export default function TopMainNav({ children }) {
  return (
    <TopMainNavbar>
      <TopMainH3>{children}</TopMainH3>
      <button>
        <img src={iconSearch} alt="검색하기" height="22" />
      </button>
    </TopMainNavbar>
  );
}
