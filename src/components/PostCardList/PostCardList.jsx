import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
import { authAtom } from '../../_state/auth';
import API from '../../API';

const ContUlStyle = styled.ul`
  background-color: var(--white);
  & li + li {
    margin-top: 20px;
  }
`;

export default function PostCardList({ posts }) {
  console.log(posts);

  return (
    <ContUlStyle>
      {posts ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <h1>불러오는 중이에요...</h1>
      )}
    </ContUlStyle>
  );
}
