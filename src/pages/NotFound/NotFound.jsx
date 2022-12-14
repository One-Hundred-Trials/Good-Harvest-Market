import React from 'react';
import icon404Img from '../../assets/img/icon-404.png';
import Blank from '../../components/Blank/Blank';
import ContainerSectionStyle from './NotFoundStyle';

export default function NotFound() {
  return (
    <ContainerSectionStyle>
      <Blank src={icon404Img} text="요청하신 페이지를 찾을 수 없어요!">
        이전 페이지
      </Blank>
    </ContainerSectionStyle>
  );
}
