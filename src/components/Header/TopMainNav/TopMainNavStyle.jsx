import styled from 'styled-components';

export const TopMainNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: var(--white);
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 13px 16px;
`;
export const TopMainH3 = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: var(--black);
`;
