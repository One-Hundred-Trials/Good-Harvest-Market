import styled from 'styled-components';

export const TopSearchNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: var(--white);
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 16px;
  gap: 20px;
`;

export const TopSearchInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  color: var(--black);
  background: var(--light-grey-F2);
  border-radius: 32px;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  padding: 7px 16px;
  &::placeholder {
    color: var(--sub-grey-C4);
  }
`;
