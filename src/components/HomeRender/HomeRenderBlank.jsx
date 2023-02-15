import React from 'react';
import Blank from 'components/Blank/Blank';
import DuckBlank from 'assets/img/duck-blank.svg';
import BlankWrap from './HomeRenderStyle';

export default function HomeRenderBlank() {
  return (
    <BlankWrap>
      <Blank
        src={DuckBlank}
        width="180px"
        text="유저를 검색해 팔로우 해보세요!"
        go={'/search'}
      >
        검색하기
      </Blank>
    </BlankWrap>
  );
}
