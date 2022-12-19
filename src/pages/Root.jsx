import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';
import { PageWrap } from '../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export default function Root() {
  const login = false;
  return (
    // <React.Fragment>
    //   <Nav />
    //   <Outlet />
    // </React.Fragment>
    <div>
      {login ? (
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
