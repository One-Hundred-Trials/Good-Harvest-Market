import React from 'react';
import styled from 'styled-components';
import profileImg from '../../../../assets/img/basic-profile-50.png';

const ChatContainerStyle = styled.div`
  display: flex;
  padding: 9px 80px 0px 4px;
  img {
    width: 42px;
    height: 42px;
    margin: 0 12px;
  }
`;

const MessageContainerStyle = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border: 1px solid var(--sub-grey-C4);
  border-radius: 0 10px 10px 10px;
  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    padding: 12px;
  }
`;

const TimeStyle = styled.span`
  align-self: flex-end;
  flex-shrink: 0;
  padding-left: 6px;
  color: --var(--main-grey-76);
`;

export default function ChatItem() {
  return (
    <ChatContainerStyle>
      <img src={profileImg} alt="" />
      <MessageContainerStyle>
        <p>안녕하세요 채소가 싱싱하고 어쩌고저쩌고 직거래 원해요</p>
      </MessageContainerStyle>
      <TimeStyle>12:39</TimeStyle>
    </ChatContainerStyle>
  );
}
