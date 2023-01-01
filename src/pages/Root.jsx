import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import { authAtom } from '../_state/auth';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';
import { PageWrap } from '../styles/GlobalStyles';
import Splash from './Splash/Splash';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export default function Root() {
  const auth = useRecoilValue(authAtom);

  const [visibleSplash, setVisibleSplash] = useState(true);
  const visibleState = () => {
    setVisibleSplash(false);
  };

  useEffect(() => {
    const splashClear = setTimeout(() => setVisibleSplash(false), 2000);
    return () => clearTimeout(splashClear);
  }, []);

  return visibleSplash === true ? (
    <Splash />
  ) : (
    <>
      {auth ? (
        <PageWrapStyle>
          <Outlet />
          <Nav />
        </PageWrapStyle>
      ) : (
        <Login />
      )}
    </>
  );
}
