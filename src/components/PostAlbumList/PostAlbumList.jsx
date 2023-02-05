import React from 'react';
import ListStyle from './PostAlbumListStyle';

export default function PostAlbumList({ image }) {
  return (
    <ListStyle>
      <img src={image} alt="" />
    </ListStyle>
  );
}
