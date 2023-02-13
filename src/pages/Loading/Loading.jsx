import React from 'react';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import IntroLogoLeaf from '../../assets/img/intro-logo-leaf.png';
import { WrapStyle, LoadingBgDivStyle, LogoLeafStyle } from './LoadingStyle';

export default function Loading() {
  return (
    <>
      <MetaDatas title={'이동 중'} desc={'이동 중...'} pageURL={'/'} />
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
