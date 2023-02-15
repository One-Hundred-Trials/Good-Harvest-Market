import styled, { keyframes } from 'styled-components';
import { Wrap, IR } from 'styles/GlobalStyles';

const loginFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const loginUp = keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom: 297px;
  }
`;

const ContSectionStyle = styled.section`
  ${Wrap}
  text-align: center;
  height: 100vh;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 15px;
  color: var(--main-grey-76);
  background-color: var(--splash-bg-color);
  position: relative;
  animation: 1s ${loginFadeIn} ease-out;
`;

const LogoiImgStyle = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 187px;
`;

const DuckImgStyle = styled.img`
  position: absolute;
  width: 115px;
  bottom: 297px;
  right: 30px;
  animation: 1s ${loginUp} ease-out;
`;

const Div = styled.div`
  position: absolute;
  bottom: 0;
  background-color: var(--white);
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  button:nth-child(1) {
    margin: 44px auto 8px;
  }
  button:nth-child(2) {
    margin-bottom: 33px;
  }
`;

// const LinkStyle = styled(Link)`
//   display: block;
//   margin: 44px auto 8px;
//   width: 322px;
//   padding: 13px;
//   font-size: 1.4rem;
//   border-radius: 44px;
//   background-color: var(--main-green);
// `;

const SNSImgStyle = styled.img`
  width: 18px;
  height: 18px;
`;

const H2IR = styled.h2`
  ${IR}
`;

const SNSFlexDivStyle = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 13px auto 84px;
  a {
    display: flex;
    flex-direction: row;
    gap: 5px;
    :not(:nth-child(3))::after {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 12px;
      font-size: 1.2rem;
      margin: 0 12px;
      background-color: var(--sub-grey-C4);
    }
  }
`;

export {
  H2IR,
  ContSectionStyle,
  LogoiImgStyle,
  DuckImgStyle,
  Div,
  SNSFlexDivStyle,
  SNSImgStyle,
};
