import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4rem;
  list-style: none;
  gap: 4px;
  p {
    color: var(--main-grey-76);
  }
`;

export const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;
