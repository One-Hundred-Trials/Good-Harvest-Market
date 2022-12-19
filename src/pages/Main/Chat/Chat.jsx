import React from 'react';
import styled from 'styled-components';
import { Wrap } from '../../../styles/GlobalStyles';
import Nav from '../../../components/Nav/Nav';
import ChatList from '../../../components/Chat/ChatList/ChatList';
import TopBasicNav from '../../../components/Header/TopBasicNav/TopBasicNav';

const ChatListContainerSection = styled.section`
  ${Wrap}
`;

export default function Chat() {
  return (
    <>
      <TopBasicNav />
      <ChatListContainerSection>
        <ChatList />
        <ChatList />
        <ChatList />
      </ChatListContainerSection>
      {/* <Nav /> */}
    </>
  );
}
