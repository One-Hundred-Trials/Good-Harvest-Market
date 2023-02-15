import React from 'react';
import PostAlbumList from '../PostAlbumList/PostAlbumList';
import { UlStyle, H2IR } from './PostAlbumStyle';

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
