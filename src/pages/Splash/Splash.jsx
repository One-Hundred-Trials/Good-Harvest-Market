import React from 'react';
import LogoImg from '../../assets/img/full-logo.png';
import { SplashSectionStyle } from './SplashStyle';

export default function Splash() {
  return (
    <SplashSectionStyle>
      <img src={LogoImg} alt="풍년마켓" />
    </SplashSectionStyle>
  );
}
