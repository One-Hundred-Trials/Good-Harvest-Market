import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Login from './Login/Login';

export default function Root() {
  // const login = true;
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
    </React.Fragment>
    // <div>
    //   {login ? (
    //     <React.Fragment>
    //       <Nav />
    //       <Outlet />
    //     </React.Fragment>
    //   ) : (
    //     <Login />
    //   )}
    // </div>
  );
}
