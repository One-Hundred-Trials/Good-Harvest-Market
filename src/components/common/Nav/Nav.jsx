import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import iconHome from '../../../assets/img/icon-home.png';
import iconHomeFill from '../../../assets/img/icon-home-fill.png';
import iconMessage from '../../../assets/img/icon-message-circle-1.png';
import iconMessageFill from '../../../assets/img/icon-message-circle-fill.png';
import iconEdit from '../../../assets/img/icon-edit.png';
import iconUser from '../../../assets/img/icon-user.png';
import iconUserFill from '../../../assets/img/icon-user-fill.png';
import { ContainerNav, NavUl } from './NavStyle';

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4rem;
  list-style: none;
  gap: 4px;
  p {
    color: var(--main-grey-76);
  }
`;

export const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Nav() {
  // const accountname = useRecoilValue(accountAtom);
  const account = JSON.parse(localStorage.getItem('account'));

  const IconHome = {
    default: iconHome,
    fill: iconHomeFill,
  };
  const IconMessage = {
    default: iconMessage,
    fill: iconMessageFill,
  };
  const IconEdit = {
    default: iconEdit,
    fill: iconEdit,
  };
  const IconUser = {
    default: iconUser,
    fill: iconUserFill,
  };

  return (
    <ContainerNav>
      <NavUl>
        <li>
          <NavLinkStyle to="/home">
            {({ isActive }) => (
              <>
                <StyledImg src={isActive ? IconHome.fill : IconHome.default} />
                <p>홈</p>
              </>
            )}
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/chat">
            {({ isActive }) => (
              <>
                <StyledImg
                  src={isActive ? IconMessage.fill : IconMessage.default}
                />
                <p>채팅</p>
              </>
            )}
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/post_upload">
            {({ isActive }) => (
              <>
                <StyledImg src={isActive ? IconEdit.fill : IconEdit.default} />
                <p>게시글 작성</p>
              </>
            )}
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to={`/my_profile/${account}`}>
            {({ isActive }) => (
              <>
                <StyledImg src={isActive ? IconUser.fill : IconUser.default} />
                <p>프로필</p>
              </>
            )}
          </NavLinkStyle>
        </li>
      </NavUl>
    </ContainerNav>
  );
}
