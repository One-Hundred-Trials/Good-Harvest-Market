import React from 'react';
import FollowUserList from '../../../../../components/FollowUserList/FollowUserList';
import TopChatNav from '../../../../../components/Header/TopChatNav/TopChatNav';
import Nav from '../../../../../components/Nav/Nav';

export default function FollowList() {
  return (
    <React.Fragment>
      <TopChatNav>내 이웃들</TopChatNav>
      <FollowUserList />
      <Nav />
    </React.Fragment>
  );
}
