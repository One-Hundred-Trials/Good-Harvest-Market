import React from 'react';
import styled from 'styled-components';
import unsplashImg from '../../assets/img/unsplash_FWtiv70Z_ZY.png';

const ListStyle = styled.li`
  position: relative;
  img {
    width: 100%;
  }
`;

export default function PostAlbumList() {
  return (
    <ListStyle>
      <img src={unsplashImg} alt="" />
    </ListStyle>
  );
}
