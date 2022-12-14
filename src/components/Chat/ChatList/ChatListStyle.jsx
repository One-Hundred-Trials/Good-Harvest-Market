import styled from 'styled-components';
import { Ellipsis } from '../../../styles/GlobalStyles';

export const ChatListContanierStyle = styled.div`
  display: flex;
  width: 358px;
  height: 42px;
  margin: 22px auto;
`;

export const UserProfileImg = styled.img`
  width: 42px;
  height: 42px;
`;

export const ChatItemContanierStyle = styled.div`
  margin-left: 12px;
  strong {
    ${Ellipsis}
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    margin: 2px 0 4px 0;
  }
  p {
    ${Ellipsis}
    width: 238px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 15px;
    color: var(--main-grey-76);
  }
`;

export const DateSpan = styled.span`
  align-self: flex-end;
  flex-shrink: 0;
  padding-left: 12px;
  color: var(--sub-grey-C4);
`;
