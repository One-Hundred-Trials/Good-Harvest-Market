import styled from 'styled-components';

const ContUlStyle = styled.ul`
  background-color: var(--white);
  & li + li {
    margin-top: 35px;
  }
`;

export default ContUlStyle;
