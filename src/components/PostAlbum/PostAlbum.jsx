import React from 'react';
import styled from 'styled-components';
import PostAlbumList from '../PostAlbumList/PostAlbumList';

const UlStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;
  padding: 16px;
  background-color: var(--white);
`;

export default function PostAlbum({ posts }) {
  return (
    <section>
      <UlStyle>
        {posts.map((post) => (
          <PostAlbumList key={post.id} image={post.image.split(',')[0]} />
        ))}
      </UlStyle>
    </section>
  );
}
