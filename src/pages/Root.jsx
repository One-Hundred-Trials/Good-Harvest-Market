import React from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet, Navigate } from 'react-router-dom';
import { authAtom } from '_state/auth';
import Nav from 'components/common/Nav/Nav';
import PageWrapStyle from './RootStyle';

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
