import styled from 'styled-components';

const FollwingsCountStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div:first-child {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 23px;
    color: var(--main-grey-76);
  }
  div:last-child {
    color: var(--main-grey-76);
  }
`;

export default FollwingsCountStyle;
