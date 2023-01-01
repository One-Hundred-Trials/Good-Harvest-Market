import React from 'react';
import styled from 'styled-components';

export const ProfileImgContainerStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ProfileComponentImgStyle = styled.img`
  width: ${(props) => props.width};
`;
