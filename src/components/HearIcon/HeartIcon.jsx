import React from 'react';
import styled from 'styled-components';
import Heart from '../../assets/img/icon-heart.png';

const HeartStyle = styled.span`
  display: flex;
  align-items: center;
  gap: 7.82px;
  color: var(--main-grey-76);
`;

const HeartImgStyle = styled.img`
  width: 16.36px;
  height: 14.55px;
`;

export default function HeartIcon({ heartCount }) {
  return (
    <HeartStyle>
      <HeartImgStyle src={Heart} alt="" />
      <span>{heartCount}</span>
    </HeartStyle>
  );
}
