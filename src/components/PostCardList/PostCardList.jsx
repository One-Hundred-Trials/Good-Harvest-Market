import React from 'react';
import PostCard from 'components/PostCard/PostCard';
import ContUlStyle from './PostCardListStyle';

export default function PostCardList({ posts }) {
  return (
    <ContUlStyle>
      {posts ? (
        posts.map((post) => (
          <PostCard key={post.id} author={post.author} post={post} />
        ))
      ) : (
        <h1>아직 작성한 게시물이 없습니다.</h1>
      )}
    </ContUlStyle>
  );
}
