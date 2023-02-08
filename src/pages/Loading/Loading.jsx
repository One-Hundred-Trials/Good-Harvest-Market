import React from 'react';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import IntroLogoLeaf from '../../assets/img/intro-logo-leaf.png';
import { WrapStyle, LoadingBgDivStyle, LogoLeafStyle } from './LoadingStyle';

export default function Loading() {
  return (
    <>
      <MetaDatas title={'로드 중'} desc={'로드 중...'} />
      <WrapStyle>
        <LoadingBgDivStyle>
          <LogoLeafStyle src={IntroLogoLeaf} alt="" />
          <LogoLeafStyle src={IntroLogoLeaf} alt="" />
          <LogoLeafStyle src={IntroLogoLeaf} alt="" />
        </LoadingBgDivStyle>
      </WrapStyle>
    </>
  );
}
