import React from 'react';
import { CommentWrapStyle, CommentbtnStyle } from './CommentIconStyle';

export default function CommentIcon({ commentCount }) {
  return (
    <CommentWrapStyle>
      <CommentbtnStyle />
      <span>{commentCount}</span>
    </CommentWrapStyle>
  );
}
