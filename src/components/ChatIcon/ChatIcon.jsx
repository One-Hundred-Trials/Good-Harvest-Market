import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconMessageCircle from 'assets/img/icon-message-circle.svg';
import ChatBtn from './ChatIconStyle';

export default function ChatIcon() {
  const navigate = useNavigate();

  const chatLink = () => {
    console.log('hi');
    navigate('/chat');
  };
  return (
    <ChatBtn type="button" onClick={chatLink}>
      <img src={iconMessageCircle} alt="" />
    </ChatBtn>
  );
}
