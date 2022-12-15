import React from 'react';
import styled from 'styled-components';
import { Wrap } from '../../styles/GlobalStyles';
import PostCard from '../PostCard/PostCard';

const HomeFeedUlStyle = styled.section`
  ${Wrap}
  padding: 20px 16px;
`;

export default function HomeRenderHomeFeed() {
  return (
    <HomeFeedUlStyle>
      <PostCard />
    </HomeFeedUlStyle>
  );
}
