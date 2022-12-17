import React from 'react';
import styled from 'styled-components';
import PostAlbumList from '../PostAlbumList/PostAlbumList';

const UlStyle = styled.ul`
  /* height: 404px; */
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;
  /* overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; */
  padding: 16px;
  background-color: var(--white);
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export default function PostAlbum() {
  return (
    <section>
      <UlStyle>
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
        <PostAlbumList />
      </UlStyle>
    </section>
  );
}
