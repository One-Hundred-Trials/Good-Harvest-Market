import React from 'react';
import { CommentWrapStyle, CommentbtnStyle } from './CommentIconStyle';

export default function CommentIcon({ commentCount }) {
  return (
    <CommentWrapStyle>
      <CommentbtnStyle aria-label="댓글 및 상세 게시글 보기" />
      <span>{commentCount}</span>
    </CommentWrapStyle>
  );
}
