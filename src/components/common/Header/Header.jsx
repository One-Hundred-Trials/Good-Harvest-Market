import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconArrowLeft from 'assets/img/icon-arrow-left.svg';
import iconMore from 'assets/img/icon-more.svg';
import iconSearch from 'assets/img/icon-search.svg';
import Button from 'components/common/Button/Button';
import LoginModal from 'components/common/Modal/LoginModal';
import {
  HeaderLeftBtnStyle,
  HeaderRightBtnStyle,
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
          <HeaderLeftBtnStyle onClick={() => navigate(-1)}>
            <img src={iconArrowLeft} alt="뒤로가기" />
          </HeaderLeftBtnStyle>
          <HeaderRightBtnStyle onClick={modalUp}>
            <img src={iconMore} alt="더보기" />
          </HeaderRightBtnStyle>
        </HeaderStyle>
        {modal && <LoginModal setModal={setModal} />}
      </>
    );
  else if (path !== '/chat' && path !== '/chat/' && path.includes('/chat/'))
    return (
      <HeaderStyle>
        <HeaderLeftBtnStyle onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" />
        </HeaderLeftBtnStyle>
        <TopChatTitleStyle>{children}</TopChatTitleStyle>
        <HeaderRightBtnStyle>
          <img src={iconMore} alt="더보기" />
        </HeaderRightBtnStyle>
      </HeaderStyle>
    );
  else if (path === '/home' || path === '')
    return (
      <HeaderStyle>
        <TopMainTitleStyle>{children}</TopMainTitleStyle>
        <HeaderRightBtnStyle onClick={() => navigate('/search')}>
          <img src={iconSearch} alt="검색하기" />
        </HeaderRightBtnStyle>
      </HeaderStyle>
    );
  else if (path === '/search')
    return (
      <HeaderStyle>
        <HeaderLeftBtnStyle onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" />
        </HeaderLeftBtnStyle>
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
        <HeaderLeftBtnStyle onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" />
        </HeaderLeftBtnStyle>
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
  else if (path.includes(`/follower`) || path.includes(`/following`)) {
    return (
      <HeaderStyle>
        <HeaderLeftBtnStyle onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="뒤로가기" />
        </HeaderLeftBtnStyle>
        <TopChatTitleStyle>{children}</TopChatTitleStyle>
      </HeaderStyle>
    );
  } else return null;
}
