import React from 'react';
import styled from 'styled-components';
import iconMessageCircle from '../../assets/img/icon-message-circle.png';

const Div = styled.div`
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
    <Div>
      <img src={iconMessageCircle} alt="" />
    </Div>
  );
}
