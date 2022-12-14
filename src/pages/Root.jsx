import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Outlet, Navigate } from 'react-router-dom';
import { authAtom } from '../_state/auth';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';
import { PageWrap } from '../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export default function Root() {
  const auth = useRecoilValue(authAtom);

  return (
    <>
      {auth ? (
        <PageWrapStyle>
          <Outlet />
          <Nav />
        </PageWrapStyle>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}
