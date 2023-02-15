import React from 'react';
import AlbumIcon from '../AlbumIcon/AlbumIcon';
import ListIcon from '../ListIcon/ListIcon';
import TopChatNavbar from './ListOrAlbumStyle';

export default function ListOrAlbum({ toggle, onclick }) {
  return (
    <TopChatNavbar>
      <ListIcon toggle={toggle} onclick={onclick} />
      <AlbumIcon toggle={!toggle} onclick={onclick} />
    </TopChatNavbar>
  );
}
