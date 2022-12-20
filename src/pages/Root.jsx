import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import userAtom from '../_state/auth';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';
import { PageWrap } from '../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export default function Root() {
  const auth = useRecoilValue(userAtom);
  const { user } = auth;
  // const { token } = user;
  console.log(user.token);
  return (
    // <React.Fragment>
    //   <Nav />
    //   <Outlet />
    // </React.Fragment>
    <div>
      {user.token ? (
        <PageWrapStyle>
          <Outlet />
          <Nav />
        </PageWrapStyle>
      ) : (
        <Login />
      )}
    </div>
  );
}
