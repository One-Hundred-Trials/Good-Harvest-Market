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
        <h1>불러오는 중이에요...</h1>
      )}
    </ContUlStyle>
  );
}
