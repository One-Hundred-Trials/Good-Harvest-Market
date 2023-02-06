import React from 'react';
import iconImgLayer from 'assets/img/iccon-img-layers.png';
import ListStyle from './PostAlbumListStyle';

export default function PostAlbumList({ image }) {
  return (
    <ListStyle>
      <img src={image} alt="" />
    </ListStyle>
  );
}
