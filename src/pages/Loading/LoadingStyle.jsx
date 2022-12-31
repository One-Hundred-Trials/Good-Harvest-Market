import styled, { keyframes } from 'styled-components';
import { Wrap } from '../../styles/GlobalStyles';

const loading = keyframes`
  0% {
    opacity:1;
  }
  20% {
    opacity:0.2;
  }
  40% {
    opacity:1;
  }
  70% {
    opacity:0.2;
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
  padding: 0 5%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 3px solid var(--main-green);
  background-color: var(--white);
`;

export const LogoLeafStyle = styled.img`
  width: 30%;
  margin-top: -48px;
  animation: 1s ${loading} ease-in-out infinite;
  &:nth-child(2) {
    animation: 1s ${loading} ease-in-out infinite;
  }
  &:last-child {
    animation: 1s ${loading} ease-in-out infinite;
  }
`;
