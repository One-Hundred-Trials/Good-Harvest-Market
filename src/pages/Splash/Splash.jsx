import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import IntroLogoBg from 'assets/img/intro-logo-bg.png';
import IntroLogoLeaf from 'assets/img/intro-logo-leaf.png';
import IntroLogoText from 'assets/img/intro-logo-text.png';
import {
  SplashArticleStyle,
  WrapStyle,
  IntroLogoBgStyle,
  LeafContStyle,
  IntroLogoLeafStyle,
  IntroLogoTextStyle,
} from './SplashStyle';

export default function Splash() {
  const [visibleSplash, setVisibleSplash] = useState(true);

  useEffect(() => {
    const splashClear = setTimeout(() => setVisibleSplash(false), 2000);
    return () => clearTimeout(splashClear);
  }, []);

  if (visibleSplash === true) {
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
  } else {
    return localStorage.length === 0 ? (
      <Navigate to="/login" replace />
    ) : (
      <Navigate to="/home" replace />
    );
  }
}
