import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon404Img from 'assets/img/icon-404.png';
import Blank from 'components/Blank/Blank';
import ContainerSectionStyle from './NotFoundStyle';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <ContainerSectionStyle>
      <Blank
        src={icon404Img}
        width="300px"
        text="요청하신 페이지를 찾을 수 없어요!"
        onClick={() => navigate(-1)}
      >
        이전 페이지
      </Blank>
    </ContainerSectionStyle>
  );
}
