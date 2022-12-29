import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '../../_state/auth';
import NavItem from './NavItem';
import iconHome from '../../assets/img/icon-home.png';
import iconHomeFill from '../../assets/img/icon-home-fill.png';
import iconMessage from '../../assets/img/icon-message-circle-1.png';
import iconMessageFill from '../../assets/img/icon-message-circle-fill.png';
import iconEdit from '../../assets/img/icon-edit.png';
import iconUser from '../../assets/img/icon-user.png';
import iconUserFill from '../../assets/img/icon-user-fill.png';
import { ContainerNav, NavUl } from './NavStyle';

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
  };
  const IconUser = {
    default: iconUser,
    fill: iconUserFill,
  };

  return (
    <ContainerNav>
      <NavUl>
        <li>
          <NavItem link="/" icon={IconHome} name="홈" />
        </li>
        <li>
          <NavItem link="/chat" icon={IconMessage} name="채팅" />
        </li>
        <li>
          <NavItem link="/post_upload" icon={IconEdit} name="게시물 작성" />
        </li>
        <li>
          <NavItem
            link={`/my_profile/${account}`}
            icon={IconUser}
            name="프로필"
          />
        </li>
      </NavUl>
    </ContainerNav>
  );
}
