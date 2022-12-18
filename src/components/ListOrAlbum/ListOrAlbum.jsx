import React from 'react';
import styled from 'styled-components';
import AlbumIcon from '../AlbumIcon/AlbumIcon';
import ListIcon from '../ListIcon/ListIcon';

const TopChatNavbar = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: var(--white);
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  padding: 12px 16px;
  gap: 10px;
`;

export default function ListOrAlbum({ toggle, onclick }) {
  return (
    <TopChatNavbar>
      <ListIcon toggle={toggle} onclick={onclick} />
      <AlbumIcon toggle={!toggle} onclick={onclick} />
    </TopChatNavbar>
  );
}
