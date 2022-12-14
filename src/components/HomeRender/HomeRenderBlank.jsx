import React from 'react';
import styled from 'styled-components';
import Blank from '../Blank/Blank';
import DuckBlank from '../../assets/img/duck-blank.png';

const BlankWrap = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 72px;
  text-align: center;
`;

export default function HomeRenderBlank() {
  return (
    <BlankWrap>
      <Blank
        src={DuckBlank}
        width="200px"
        text="유저를 검색해 팔로우 해보세요!"
      >
        검색하기
      </Blank>
    </BlankWrap>
  );
}
