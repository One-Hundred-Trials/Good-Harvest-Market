import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';

export const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export const ConWrapStyle = styled.section`
  ${ConWrap}
  position: relative;
  background-color: var(--light-grey-F2);
`;

export const ChatWrapStyle = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
`;

export const MyChatWrapStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MyChatItem = styled.div`
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
  align-self: end;
  margin-right: 6px;
  color: --var(--main-grey-76);
`;

export const MyChatImgWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SendImg = styled.img`
  width: 240px;
  height: 240px;
  margin: 10px 10px 0;
`;
