import React from 'react';
import LogoImg from '../../assets/img/full-logo.png';
import { SplashSectionStyle, WrapStyle } from './SplashStyle';

export default function Splash() {
  return (
    <WrapStyle>
      <SplashSectionStyle>
        <img src={LogoImg} alt="풍년마켓" />
      </SplashSectionStyle>
    </WrapStyle>
  );
}
