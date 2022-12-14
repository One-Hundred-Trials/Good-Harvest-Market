import styled from 'styled-components';
import { Wrap } from '../../../../styles/GlobalStyles';

export const ChatContainerStyle = styled.section`
  ${Wrap}
  margin: 0 auto;
`;

export const ChatDivStyle = styled.div`
  height: calc(100vh - 107px);
  padding-top: 255px;
  background-color: var(--light-grey-F2);
`;

export const ChatRightContainerStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ChatItemRight = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 10px 16px 0 0;
  background-color: var(--point-green);
  border-radius: 10px 0px 10px 10px;
  p {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    padding: 12px;
  }
`;

export const TimeStyle = styled.span`
  align-self: flex-end;
  flex-shrink: 0;
  padding-right: 6px;
  color: --var(--main-grey-76);
`;

export const ChatImgRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SendImg = styled.img`
  width: 240px;
  height: 240px;
  margin: 10px 10px 0;
`;
