import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Wrap } from '../../styles/GlobalStyles';

export const WrapStyle = styled.div`
  ${Wrap}
  vertical-align: top;
`;

export const SplashArticleStyle = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 187px;
  height: 157px;
  justify-content: center;
`;

export const IntroLogoBgStyle = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 187px;
`;

export const LeafContStyle = styled(motion.div)`
  position: relative;
  width: 104px;
  height: 37px;
  margin: 27px auto;
`;

export const IntroLogoLeafStyle = styled(motion.img)`
  position: absolute;
  width: 34px;
  &:nth-child(2) {
    left: 34px;
  }
  &:last-child {
    left: 68px;
  }
`;

export const IntroLogoTextStyle = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 2px;
  width: 182px;
`;
