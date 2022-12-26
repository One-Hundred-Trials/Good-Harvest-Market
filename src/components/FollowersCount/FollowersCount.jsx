import React from 'react';
import FollwersCountStyle from './FollowersCountStyle';

export default function FollowersCount({ count, follow }) {
  return (
    <FollwersCountStyle follow={follow}>
      <div>{count}</div>
      <div>{follow}</div>
    </FollwersCountStyle>
  );
}
