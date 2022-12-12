import styled from 'styled-components';

export const ProfileAccountStyle = styled.div`
  display: flex;
  margin: 16px;
  flex-direction: column;
  align-items: center;
  div:first-child {
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 6px;
  }
  div:last-child {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 14px;
    color: var(--main-grey-76);
  }
`;
