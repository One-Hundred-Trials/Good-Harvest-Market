import React from 'react';
import FollowUserList from '../../../../../components/FollowUserList/FollowUserList';
import Header from '../../../../../components/Header/Header';
import Nav from '../../../../../components/Nav/Nav';

export default function FollowList() {
  return (
    <React.Fragment>
      <Header>내 이웃들</Header>
      <FollowUserList />
      <Nav />
    </React.Fragment>
  );
}
