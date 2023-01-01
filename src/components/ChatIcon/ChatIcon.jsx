import React from 'react';
import styled from 'styled-components';
import iconMessageCircle from '../../assets/img/icon-message-circle.png';

const ChatBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  img {
    width: 15px;
    height: 15px;
  }
`;

export default function ChatIcon() {
  return (
    <ChatBtn type="button">
      <img src={iconMessageCircle} alt="" />
    </ChatBtn>
  );
}
