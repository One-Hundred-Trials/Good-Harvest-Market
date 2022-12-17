import React from 'react';
import { ConWrap } from '../../../../../styles/GlobalStyles';
import FollowUserList from '../../../../../components/FollowUserList/FollowUserList';
import TopChatNav from '../../../../../components/Header/TopChatNav/TopChatNav';

export default function FollowList() {
  return (
    <>
      <TopChatNav>내 이웃들</TopChatNav>
      <FollowUserList />
    </>
  );
}
