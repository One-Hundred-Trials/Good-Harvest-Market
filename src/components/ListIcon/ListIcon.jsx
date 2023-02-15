import React from 'react';
import IconPostListOn from 'assets/img/icon-post-list-on.svg';
import iconPostListOff from 'assets/img/icon-post-list-off.svg';
import BtnStyle from './ListIconStyle';

export default function ListIcon({ toggle, onclick }) {
  return (
    <BtnStyle toggle={toggle} onClick={onclick}>
      <img src={toggle ? IconPostListOn : iconPostListOff} alt="list" />
    </BtnStyle>
  );
}
