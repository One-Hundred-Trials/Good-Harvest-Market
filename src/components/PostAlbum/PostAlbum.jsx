import React from 'react';
import PostAlbumList from '../PostAlbumList/PostAlbumList';
import UlStyle from './PostAlbumStyle';

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
