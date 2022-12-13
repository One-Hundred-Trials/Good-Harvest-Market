import styled from 'styled-components';

export const TopChatNavbar = styled.header`
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
  padding: 12px 16px;
  gap: 10px;
`;
export const TopChatH4 = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: var(--black);
`;
export const TopChatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
