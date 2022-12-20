import React from 'react';
import styled from 'styled-components';
import CommentImg from '../../assets/img/icon-message-circle.png';

const CommentStyle = styled.span`
  display: flex;
  align-items: center;
  gap: 7.82px;
  color: var(--main-grey-76);
`;

const CommentImgStyle = styled.img`
  width: 16.36px;
  height: 14.55px;
`;

export default function CommentIcon({ commentCount }) {
  return (
    <CommentStyle>
      <CommentImgStyle src={CommentImg} alt="" />
      <span>{commentCount}</span>
    </CommentStyle>
  );
}
