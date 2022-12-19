import React from 'react';
import Button from '../../components/Button/Button';
import iconArrowLeft from '../../assets/img/icon-arrow-left.png';
import iconMore from '../../assets/img/icon-more-18.png';
import iconSearch from '../../assets/img/icon-search.png';
import {
  HeaderStyle,
  TopChatTitleStyle,
  TopMainTitleStyle,
  TopSearchInputStyle,
} from './HeaderStyle';

export default function Header({ size, variant, children }) {
  const path = window.location.pathname;
  if (
    path === '/my_profile' ||
    path.includes('/user_profile/') ||
    path.includes('post/') ||
    path === '/chat'
  )
    return (
      <HeaderStyle>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <button>
          <img src={iconMore} alt="더보기" height="22" />
        </button>
      </HeaderStyle>
    );
  else if (path !== '/chat' && path !== '/chat/' && path.includes('/chat/'))
    return (
      <HeaderStyle>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopChatTitleStyle>{children}</TopChatTitleStyle>
        <button>
          <img src={iconMore} alt="더보기" height="22" />
        </button>
      </HeaderStyle>
    );
  else if (path === '/' || path === '')
    return (
      <HeaderStyle>
        <TopMainTitleStyle>{children}</TopMainTitleStyle>
        <button>
          <img src={iconSearch} alt="검색하기" height="22" />
        </button>
      </HeaderStyle>
    );
  else if (path === '/search')
    return (
      <HeaderStyle>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopSearchInputStyle
          type="text"
          placeholder="계정 검색"
        ></TopSearchInputStyle>
      </HeaderStyle>
    );
  else if (
    path === '/profile_edit' ||
    path === '/post_upload' ||
    path === '/product_upload' ||
    path.includes('/product/')
  )
    return (
      <HeaderStyle>
        <button>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <Button size={size} variant={variant}>
          {children}
        </Button>
      </HeaderStyle>
    );
  else return null;
}