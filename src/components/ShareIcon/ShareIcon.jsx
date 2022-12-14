import React from 'react';
import styled from 'styled-components';
import iconShare from '../../assets/img/icon-share.png';

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

export default function ShareIcon() {
  return (
    <Div>
      <img src={iconShare} alt="" />
    </Div>
  );
}
