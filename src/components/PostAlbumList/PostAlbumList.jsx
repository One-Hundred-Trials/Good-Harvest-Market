import React from 'react';
import styled from 'styled-components';
import unsplashImg from '../../assets/img/unsplash_5MF7EFgy02U.png';
import iconImgLayer from '../../assets/img/iccon-img-layers.png';

const ListStyle = styled.li`
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    background-image: url(${iconImgLayer});
    background-size: contain;
  }
  img {
    width: 100%;
    background-size: cover;
  }
`;

export default function PostAlbumList() {
  return (
    <ListStyle>
      <img src={unsplashImg} alt="" />
    </ListStyle>
  );
}
