import React from 'react';
import PostAlbumList from '../PostAlbumList/PostAlbumList';

import UlStyle from './PostAlbumStyle';
import { IR } from '../../styles/GlobalStyles';

const UlStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;
  padding: 16px;
  background-color: var(--white);
`;


const H2IR = styled.h2`
  ${IR}
`;

export default function PostAlbum({ posts }) {
  return (
    <section>
      <H2IR>앨범형 게시글</H2IR>
      <UlStyle>
        {posts.map((post) => (
          <PostAlbumList key={post.id} image={post.image.split(',')[0]} />
        ))}
      </UlStyle>
    </section>
  );
}
