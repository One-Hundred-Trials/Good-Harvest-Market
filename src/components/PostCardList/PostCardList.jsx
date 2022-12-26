import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';

const ContUlStyle = styled.ul`
  background-color: var(--white);
  & li + li {
    margin-top: 20px;
  }
`;

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
