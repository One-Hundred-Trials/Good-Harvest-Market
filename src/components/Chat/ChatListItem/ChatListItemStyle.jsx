import styled from 'styled-components';
import { Ellipsis } from '../../../styles/GlobalStyles';
import ProfileImgAccount from '../../ProfileImgAccount/ProfileImgAccount';

export const ChatListContanierStyle = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImgAccountStyle = styled(ProfileImgAccount)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--point-green);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  p:first-child {
    ${Ellipsis}
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
  p:last-child {
    ${Ellipsis}
    width: 238px;
    font-size: 1.4rem;
    line-height: 15px;
    color: var(--main-grey-76);
  }
`;

export const DateSpan = styled.span`
  align-self: end;
  color: var(--sub-grey-C4);
`;
