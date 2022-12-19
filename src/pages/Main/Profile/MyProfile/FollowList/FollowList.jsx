import React from 'react';
import { ConWrap } from '../../../../../styles/GlobalStyles';
import FollowUserList from '../../../../../components/FollowUserList/FollowUserList';
import Header from '../../../../../components/Header/Header';

export default function FollowList() {
  return (
    <>
      <Header>내 이웃들</Header>
      <FollowUserList />
    </>
  );
}
