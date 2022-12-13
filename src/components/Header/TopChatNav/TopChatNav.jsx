import React from 'react';
import { TopChatNavbar, TopChatH4, TopChatWrap } from './TopChatNavStyle';
import iconArrowLeft from '../../../assets/img/icon-arrow-left.png';
import iconMore from '../../../assets/img/icon-more-18.png';

export default function TopChatNav({ children }) {
  return (
    <TopChatNavbar>
      <TopChatWrap>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopChatH4>{children}</TopChatH4>
      </TopChatWrap>
      <button>
        <img src={iconMore} alt="더보기" height="22" />
      </button>
    </TopChatNavbar>
  );
}
