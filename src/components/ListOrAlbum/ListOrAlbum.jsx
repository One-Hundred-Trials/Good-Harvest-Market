import React from 'react';
import styled from 'styled-components';
import AlbumIcon from '../AlbumIcon/AlbumIcon';
import ListIcon from '../ListIcon/ListIcon';

const TopChatNavbar = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: var(--white);
  width: 100%;
  height: 48px;
  box-sizing: border-box;
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
