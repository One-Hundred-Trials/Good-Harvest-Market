import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';

const ContUlStyle = styled.ul`
  background-color: var(--white);
  & li + li {
    margin-top: 20px;
  }
`;

export default function PostCardList() {
  return (
    <ContUlStyle>
      <PostCard />
      {/* <PostCardItem />
      <PostCardItem />
      <PostCardItem /> */}
    </ContUlStyle>
  );
}
