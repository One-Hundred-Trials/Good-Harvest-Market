import styled, { keyframes } from 'styled-components';
import { Wrap } from 'styles/GlobalStyles';

const loading = keyframes`
  0% {
    opacity:1;
  }
  25% {
    opacity:0.2;
  }
  50% {
    opacity:1;
  }
  75%{
    opacity:0.2;
  }
 100%{
    opacity:1;
  }
`;

export const WrapStyle = styled.div`
  ${Wrap}
  vertical-align: top;
`;

export const LoadingBgDivStyle = styled.div`
  position: absolute;
  display: flex;
  width: 200px;
  padding: 0 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 3px solid var(--main-green);
  background-color: var(--white);
`;

export const LogoLeafStyle = styled.img`
  width: 45px;
  margin-top: -48px;
  animation: 1.5s ${loading} ease-in-out infinite;
  & + img {
    margin-left: 11px;
  }
`;
