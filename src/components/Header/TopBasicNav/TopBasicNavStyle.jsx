import styled from 'styled-components';

const TopBasicNavbar = styled.header`
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
`;

export default TopBasicNavbar;
