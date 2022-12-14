import styled from 'styled-components';

const FollwersCountStyle = styled.a`
  display: flex;
  flex-direction: column;

  align-items: center;
  div:first-child {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 23px;
    margin-bottom: 6px;
    color: ${({ follow }) =>
      follow === 'followings' ? 'var(--main-grey-76)' : 'var(--black)'};
  }
  div:last-child {
    color: var(--main-grey-76);
  }
`;

export default FollwersCountStyle;
