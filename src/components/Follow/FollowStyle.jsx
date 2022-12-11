import styled from 'styled-components';

export const FollowButtons = styled.div`
  padding: 24px 0px;
  display: flex;
  justify-content: center;
  gap: 10px;
  color: var(--main-grey-76);
  img {
    width: 15px;
    height: 15px;
  }
  button {
    border: 1px solid #dbdbdb;
  }
`;

export const FollowBtnStyle = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 8px 34px;
  /* line-height: 18px; */
`;

export const ProfileLinkBtnStyle = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  padding: 9.5px;
`;
