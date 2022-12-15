import React from 'react';
import styled from 'styled-components';
import icon404Img from '../../assets/img/icon-404.png';
import Blank from '../../components/Blank/Blank';

const ContainerSectionStyle = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 72px;
  text-align: center;
`;

export default function NotFound() {
  return (
    <ContainerSectionStyle>
      <Blank
        src={icon404Img}
        width="300px"
        text="요청하신 페이지를 찾을 수 없어요!"
      >
        이전 페이지
      </Blank>
    </ContainerSectionStyle>
  );
}
