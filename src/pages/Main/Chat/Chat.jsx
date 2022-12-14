import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChatListItem from '../../../components/ChatListItem/ChatListItem';
import Header from '../../../components/Header/Header';
import { ConWrap } from '../../../styles/GlobalStyles';

const ChatListWrapStyle = styled.ul`
  ${ConWrap}
  padding: 24px 16px;
  & > li + li {
    margin-top: 23px;
  }
`;

export default function Chat() {
  return (
    <>
      <Header />
      <ChatListWrapStyle>
        <li>
          <Link to="/chat/1">
            <ChatListItem
              username="옆동네 퐁이"
              content="채소가 참 싱싱하네요~ 직거래도 가능하신가요?"
              date="2023.01.06"
            />
          </Link>
        </li>
        <li>
          <Link to="">
            <ChatListItem
              username="애월읍 감귤 농장"
              content="올해 귤이 참 맛있게 나왔어요 ㅎㅎ"
              date="2022.10.21"
            />
          </Link>
        </li>
        <li>
          <Link to="">
            <ChatListItem
              username="주말엔 내가 감자 농부"
              content="다음에 감자 나눔해드릴게요 좋은 하루 되세요 ^^"
              date="2022.08.29"
            />
          </Link>
        </li>
      </ChatListWrapStyle>
    </>
  );
}
