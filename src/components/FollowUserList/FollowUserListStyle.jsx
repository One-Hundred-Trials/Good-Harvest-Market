import React from 'react';
import styled from 'styled-components';
import { ConWrap } from '../../styles/GlobalStyles';

export const FollowContainerUlStyle = styled.ul`
  ${ConWrap}
  padding: 8px 16px;
  & li + li {
    margin-top: 16px;
  }
`;
export const FollowListStyle = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
