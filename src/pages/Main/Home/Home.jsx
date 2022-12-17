import React from 'react';
import HomeRenderBlank from '../../../components/HomeRender/HomeRenderBlank';
import HomeRenderHomeFeed from '../../../components/HomeRender/HomeRenderHomeFeed';
import Nav from '../../../components/Nav/Nav';
import LoginEmail from '../../Login/LoginEmail/LoginEmail';
import Header from '../../../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header>주말의 즐거운 풍년마켓</Header>
      {/* 조건부 렌더링 HomeRenderBlank 또는 HomeRenderHomeFeed */}
      <HomeRenderBlank />
      {/* <LoginEmail /> */}
      {/* <Nav /> */}
    </div>
  );
}
