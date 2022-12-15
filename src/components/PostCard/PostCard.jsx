import React from 'react';
import styled from 'styled-components';
import { Wrap } from '../../styles/GlobalStyles';
import PostCardList from '../PostCarList/PostCardList';

const ContUlStyle = styled.ul`
  ${Wrap}
  padding : 16px 21px;
  background-color: var(--white);
`;

export default function PostCard() {
  return (
    <ContUlStyle>
      <PostCardList />
      <PostCardList />
      <PostCardList />
      <PostCardList />
    </ContUlStyle>
  );
}
