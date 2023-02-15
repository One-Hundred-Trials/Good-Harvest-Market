import React from 'react';
import { useNavigate } from 'react-router-dom';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import icon404Img from 'assets/img/icon-404.svg';
import Blank from 'components/Blank/Blank';
import { ContainerSectionStyle, H2IR } from './NotFoundStyle';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <MetaDatas
        title={'페이지를 찾을 수 없어요'}
        desc={'페이지를 찾을 수 없어요'}
      />
      <ContainerSectionStyle>
        <H2IR>오류 페이지</H2IR>
        <Blank
          src={icon404Img}
          width="300px"
          text="요청하신 페이지를 찾을 수 없어요!"
          onClick={() => navigate(-1)}
        >
          이전 페이지
        </Blank>
      </ContainerSectionStyle>
    </>
  );
}
