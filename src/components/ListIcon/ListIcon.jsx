import React, { useState } from 'react';
import styled from 'styled-components';
import IconPostListOn from '../../assets/img/icon-post-list-on.png';
import iconPostListOff from '../../assets/img/icon-post-list-off.png';

const BtnStyle = styled.button`
  width: 26px;
  height: 26px;
`;

export default function ListIcon({ toggle, onclick }) {
  return (
    <BtnStyle toggle={toggle} onClick={onclick}>
      <img src={toggle ? IconPostListOn : iconPostListOff} alt="list" />
    </BtnStyle>
  );
}
