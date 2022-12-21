import React from 'react';
import { NavLink, StyledImg } from './NavItemStyle';

export default function NavItem({ link, icon, name }) {
  return (
    <NavLink to={link}>
      <StyledImg src={icon.default} alt="" />
      <p>{name}</p>
    </NavLink>
  );
}
