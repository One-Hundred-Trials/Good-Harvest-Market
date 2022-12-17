import React from 'react';
import styled from 'styled-components';
import TopMainNav from '../../../components/Header/TopMainNav/TopMainNav';
import HomeRenderBlank from '../../../components/HomeRender/HomeRenderBlank';
import HomeRenderHomeFeed from '../../../components/HomeRender/HomeRenderHomeFeed';
import { ConWrap } from '../../../styles/GlobalStyles';

const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
`;

export default function Home() {
  return (
    <>
      <TopMainNav>주말의 즐거운 풍년마켓</TopMainNav>
      <ConWrapStyle>
        {/* 조건부 렌더링 HomeRenderBlank 또는 HomeRenderHomeFeed */}
        <HomeRenderBlank />
      </ConWrapStyle>
    </>
  );
}
