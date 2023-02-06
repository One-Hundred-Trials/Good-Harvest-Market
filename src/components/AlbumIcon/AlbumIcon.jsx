import React from 'react';
import styled from 'styled-components';
import iconPostAlbumOff from 'assets/img/icon-post-album-off.png';
import iconPostAlbumOn from 'assets/img/icon-post-album-on.png';
import BtnStyle from './AlbumIconStyle';

export default function AlbumIcon({ toggle, onclick }) {
  return (
    <BtnStyle toggle={toggle} onClick={onclick}>
      <img
        src={toggle ? iconPostAlbumOn : iconPostAlbumOff}
        alt="album"
        height="26"
      />
    </BtnStyle>
  );
}
