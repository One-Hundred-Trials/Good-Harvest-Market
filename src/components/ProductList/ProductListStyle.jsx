import styled from 'styled-components';

export const ProductSectionStyle = styled.section`
  background-color: var(--white);
  padding: 20px 0;
`;
export const ProductListTitleStyle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 16px 16px;
`;
export const ProductListUlStyle = styled.ul`
  padding: 0 16px;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
`;
