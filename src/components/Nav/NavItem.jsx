import React, { useEffect, useState } from 'react';
import { NavLink, StyledImg } from './NavItemStyle';

export default function NavItem({ link, icon, name }) {
  // const [on, setOn] = useState(icon.default);
  // const path = window.location.pathname;
  // // useEffect(() => {
  // //   if (link === '/') {
  // //     setOn(icon.fill);
  // //   } else if (link === '/chat') {
  // //     setOn(icon.fill);
  // //   } else if (link === '/post_upload') {
  // //     setOn(icon.fill);
  // //   } else if (link.includes('/my_profile')) {
  // //     setOn(icon.fill);
  // //   }
  // // }, [link, on]);

  // const handleOnClick = () => {
  //   if (link === path) {
  //     setOn(icon.fill);
  //   } else {
  //     setOn(icon.default);
  //   }
  // };

  return (
    <NavLink to={link}>
      <StyledImg src={icon.fill} alt="" />
      <p>{name}</p>
    </NavLink>
  );
  // return (
  //   <NavLink to={link}>
  //     <StyledImg src={activeNav} alt="" />
  //     <p>{name}</p>
  //   </NavLink>
  // );
}
