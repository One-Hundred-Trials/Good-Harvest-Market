import React from 'react';
import styled from 'styled-components';

export const ProductSectionStyle = styled.section`
  padding: 20px 0 20px 16px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ProductListTitleStyle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`;
export const ProductListUlStyle = styled.ul`
  display: flex;
  gap: 10px;
`;