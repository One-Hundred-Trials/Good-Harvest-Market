import React from 'react';
import icon404Img from '../../assets/img/icon-404.png';
import Button from '../../components/Button/Button';
import {
  ContainerSectionStyle,
  NotFoundImgStyle,
  NotFoundTextStyle,
} from './NotFoundStyle';

export default function NotFound() {
  return (
    <ContainerSectionStyle>
      <NotFoundImgStyle src={icon404Img} />
      <NotFoundTextStyle>요청하신 페이지를 찾을 수 없어요!</NotFoundTextStyle>
      <Button size="m" variant="abled">
        이전 페이지
      </Button>
    </ContainerSectionStyle>
  );
}
