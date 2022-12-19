import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import authAtom from '../_state/auth';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';
import { PageWrap } from '../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export default function Root() {
  const auth = useRecoilValue(authAtom);
  // const auth = JSON.parse(localStorage.getItem('user'));
  console.log(auth);
  return (
    // <React.Fragment>
    //   <Nav />
    //   <Outlet />
    // </React.Fragment>
    <div>
      {auth ? (
        <React.Fragment>
          <Nav />
          <Outlet />
        </React.Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}
