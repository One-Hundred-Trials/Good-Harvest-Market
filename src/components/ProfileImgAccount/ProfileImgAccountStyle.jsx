import React from 'react';
import styled from 'styled-components';

export const ProfileImgContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImageContainerStyle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  overflow: hidden;
`;

export const ProfileImageStyle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;
`;
