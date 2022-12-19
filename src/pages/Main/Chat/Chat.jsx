import React from 'react';
import styled from 'styled-components';
import { ConWrap } from '../../../styles/GlobalStyles';
import ChatListItem from '../../../components/Chat/ChatListItem/ChatListItem';
import Header from '../../../components/Header/Header';

const ConWrapStyle = styled.ul`
  ${ConWrap}
  padding: 24px 16px;
  & li + li {
    margin-top: 20px;
  }
`;

export default function Chat() {
  return (
    <>
      <Header />
      <ConWrapStyle>
        <ChatListItem
          username="풍이네 주말농장"
          usertext="안녕하세요? 혹시 문의 가능한지 채팅을 드리고 싶은 드리고 싶어요"
        />
        <ChatListItem
          username="나의 작은 감귤농장"
          usertext="감귤 안 필요하세요?"
        />
        <ChatListItem
          username="주말엔 내가 감자 농부"
          usertext="상품 아주 좋아요~~"
        />
      </ConWrapStyle>
    </>
  );
}
