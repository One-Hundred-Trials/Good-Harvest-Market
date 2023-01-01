import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import LoginModal from '../Modal/LoginModalAlert/LoginModal';
import iconArrowLeft from '../../assets/img/icon-arrow-left.png';
import iconMore from '../../assets/img/icon-more-18.png';
import iconSearch from '../../assets/img/icon-search.png';
import {
  HeaderStyle,
  TopChatTitleStyle,
  TopMainTitleStyle,
  TopSearchInputStyle,
} from './HeaderStyle';

export default function Header({
  size,
  variant,
  children,
  onClick,
  go,
  search,
  setKeyWord,
  disabled,
  id,
}) {
  const [modal, setModal] = useState(false);
  const modalUp = () => {
    setModal(true);
  };
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [value, setValue] = useState('');
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setKeyWord(e.target.value);
  };
  if (
    path.includes('/my_profile') ||
    path.includes('/user_profile/') ||
    path === `/post/${id}` ||
    path === '/chat'
  )
    return (
      <>
        <HeaderStyle>
          <button onClick={() => navigate(-1)}>
            <img src={iconArrowLeft} alt="뒤로가기" height="22" />
          </button>
          <button onClick={modalUp}>
            <img src={iconMore} alt="더보기" height="22" />
          </button>
        </HeaderStyle>
        {modal && <LoginModal setModal={setModal} />}
      </>
    );
  else if (path !== '/chat' && path !== '/chat/' && path.includes('/chat/'))
    return (
      <HeaderStyle>
        <button onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopChatTitleStyle>{children}</TopChatTitleStyle>
        <button>
          <img src={iconMore} alt="더보기" height="22" />
        </button>
      </HeaderStyle>
    );
  else if (path === '/home' || path === '')
    return (
      <HeaderStyle>
        <TopMainTitleStyle>{children}</TopMainTitleStyle>
        <button onClick={() => navigate('/search')}>
          <img src={iconSearch} alt="검색하기" height="22" />
        </button>
      </HeaderStyle>
    );
  else if (path === '/search')
    return (
      <HeaderStyle>
        <button onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <TopSearchInputStyle
          type="text"
          placeholder="계정 검색"
          value={value}
          onChange={handleOnChange}
        ></TopSearchInputStyle>
      </HeaderStyle>
    );
  else if (
    path === '/profile_edit' ||
    path === '/post_upload' ||
    path === `/post/${id}/edit` ||
    path === '/product_upload' ||
    path.includes('/product/')
  )
    return (
      <HeaderStyle>
        <button onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" height="22" />
        </button>
        <Button
          type="submit"
          size={size}
          variant={variant}
          onClick={onClick}
          go={go}
          disabled={disabled}
        >
          {children}
        </Button>
      </HeaderStyle>
    );
  else return null;
}
