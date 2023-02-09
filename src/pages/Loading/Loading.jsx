import React from 'react';
import IntroLogoLeaf from '../../assets/img/intro-logo-leaf.svg';
import { WrapStyle, LoadingBgDivStyle, LogoLeafStyle } from './LoadingStyle';

export default function Loading() {
  return (
    <WrapStyle>
      <LoadingBgDivStyle>
        <LogoLeafStyle src={IntroLogoLeaf} alt="" />
        <LogoLeafStyle src={IntroLogoLeaf} alt="" />
        <LogoLeafStyle src={IntroLogoLeaf} alt="" />
      </LoadingBgDivStyle>
    </WrapStyle>
  );
}
