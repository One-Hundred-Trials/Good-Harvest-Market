import React from 'react';
import styled from 'styled-components';
import profileImg from '../../../assets/img/basic-profile-50.png';
import { Ellipsis } from '../../../styles/GlobalStyles';

const ChatListContanierStyle = styled.div`
  display: flex;
  width: 358px;
  height: 42px;
  margin: 22px auto;
`;

const UserProfileImg = styled.img`
  width: 42px;
  height: 42px;
`;

const ChatItemContanierStyle = styled.div`
  margin-left: 12px;
  strong {
    ${Ellipsis}
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    margin: 2px 0 4px 0;
  }
  p {
    ${Ellipsis}
    width: 238px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 15px;
    color: var(--main-grey-76);
  }
`;

const DateSpan = styled.span`
  align-self: flex-end;
  flex-shrink: 0;
  padding-left: 12px;
  color: var(--sub-grey-C4);
`;

export default function ChatList() {
  return (
    <ChatListContanierStyle>
      <UserProfileImg src={profileImg} alt="" />
      <ChatItemContanierStyle>
        <strong>애월읍 감귤농장</strong>
        <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요</p>
      </ChatItemContanierStyle>
      <DateSpan>2022.10.25</DateSpan>
    </ChatListContanierStyle>
  );
}
