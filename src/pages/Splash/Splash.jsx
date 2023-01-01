import React from 'react';
import IntroLogoBg from '../../assets/img/intro-logo-bg.png';
import IntroLogoLeaf from '../../assets/img/intro-logo-leaf.png';
import IntroLogoText from '../../assets/img/intro-logo-text.png';
import {
  SplashArticleStyle,
  WrapStyle,
  IntroLogoBgStyle,
  LeafContStyle,
  IntroLogoLeafStyle,
  IntroLogoTextStyle,
} from './SplashStyle';

export default function Splash() {
  return (
    <WrapStyle>
      <SplashArticleStyle>
        <IntroLogoBgStyle src={IntroLogoBg} alt="" />
        <LeafContStyle>
          <IntroLogoLeafStyle src={IntroLogoLeaf} alt="" />
          <IntroLogoLeafStyle src={IntroLogoLeaf} alt="" />
          <IntroLogoLeafStyle src={IntroLogoLeaf} alt="" />
        </LeafContStyle>
        <IntroLogoTextStyle src={IntroLogoText} alt="풍년마켓" />
      </SplashArticleStyle>
    </WrapStyle>
  );
}
