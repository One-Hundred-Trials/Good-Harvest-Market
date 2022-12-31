import styled from 'styled-components';
import { Ellipsis } from '../../styles/GlobalStyles';

export const ChatListWrapStyle = styled.div`
  display: flex;
`;

export const ProfileImgWrapStyle = styled.div`
  position: relative;
  & > img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background-color: var(--point-green);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
`;

export const ChatContent = styled.div`
  strong {
    ${Ellipsis}
    display: inline-block;
    margin: 2px 0 4px 0;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
  p {
    ${Ellipsis}
    width: 238px;
    font-size: 1.4rem;
    line-height: 15px;
    color: var(--main-grey-76);
  }
`;

export const ChatDate = styled.span`
  align-self: end;
  margin: 0 0 3px 13px;
  color: var(--sub-grey-C4);
`;
