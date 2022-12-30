import styled, { keyframes } from 'styled-components';
import { Wrap } from '../../styles/GlobalStyles';

const splashFade = keyframes`
  0% {
    opacity: 1;
    top:50%;
  }
  50%{
    opacity: 1;
    top:50%;
  }
  100% {
    opacity: 0;
    top:40%;
  }
`;

const growUp = keyframes`
  0% {
    bottom: -30px;
  }
  30%{
    bottom: 2px;
  }
  100% {
    bottom: 2px;
  }
`;

export const WrapStyle = styled.div`
  ${Wrap}
  vertical-align: top;
`;

export const SplashArticleStyle = styled.article`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 187px;
  height: 157px;
  justify-content: center;
  animation: 2.5s ${splashFade} ease-out;
`;

export const IntroLogoBgStyle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 187px;
`;

export const LeafContStyle = styled.div`
  position: relative;
  width: 104px;
  height: 37px;
  margin: 27px auto;
`;

export const IntroLogoLeafStyle = styled.img`
  position: absolute;
  width: 34px;
  animation: 0.5s ${growUp} ease-out;
  &:nth-child(2) {
    left: 34px;
    animation: 1s ${growUp} ease-out;
  }
  &:last-child {
    left: 68px;
    animation: 2s ${growUp} ease-out;
  }
`;

export const IntroLogoTextStyle = styled.img`
  position: absolute;
  bottom: 0;
  left: 2px;
  width: 182px;
`;
