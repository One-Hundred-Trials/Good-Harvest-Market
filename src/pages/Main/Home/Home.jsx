import React from 'react';
import TopMainNav from '../../../components/Header/TopMainNav/TopMainNav';
import HomeRenderBlank from '../../../components/HomeRender/HomeRenderBlank';
import HomeRenderHomeFeed from '../../../components/HomeRender/HomeRenderHomeFeed';
import Nav from '../../../components/Nav/Nav';
import LoginEmail from '../../Login/LoginEmail/LoginEmail';

export default function Home() {
  return (
    <div>
      <TopMainNav>주말의 즐거운 풍년마켓</TopMainNav>
      {/* 조건부 렌더링 HomeRenderBlank 또는 HomeRenderHomeFeed */}
      <HomeRenderBlank />
      {/* <LoginEmail /> */}
      {/* <Nav /> */}
    </div>
  );
}
