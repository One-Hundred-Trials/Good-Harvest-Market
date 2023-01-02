import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <BlankWrap>
      <Blank
        src={DuckBlank}
        width="180px"
        text="유저를 검색해 팔로우 해보세요!"
        clickHandler={() => navigate('/search')}
      >
        검색하기
      </Blank>
    </BlankWrap>
  );
}
