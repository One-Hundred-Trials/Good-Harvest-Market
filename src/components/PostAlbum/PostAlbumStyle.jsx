import styled from 'styled-components';
import { IR } from 'styles/GlobalStyles';

export const UlStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;
  padding: 16px;
  background-color: var(--white);
`;

export const H2IR = styled.h2`
  ${IR}
`;
