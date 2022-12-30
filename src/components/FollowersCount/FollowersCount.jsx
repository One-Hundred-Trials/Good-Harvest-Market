import React from 'react';
import FollwersCountStyle from './FollowersCountStyle';

export default function FollowersCount({ count, follow, src, width, height }) {
  return (
    <FollwersCountStyle
      follow={follow}
      href={src}
      width={width}
      height={height}
    >
      <div>{count}</div>
      <div>{follow}</div>
    </FollwersCountStyle>
  );
}
