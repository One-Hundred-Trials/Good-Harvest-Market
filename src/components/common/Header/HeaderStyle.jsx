import styled from 'styled-components';

export const HeaderLeftBtnStyle = styled.button`
  width: 22px;
  height: 22px;
`;

export const HeaderRightBtnStyle = styled.button`
  width: 24px;
  height: 22px;
`;

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: var(--white);
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 16px;
`;

export const TopChatTitleStyle = styled.div`
  margin-right: auto;
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 18px;
  color: var(--black);
`;

export const TopMainTitleStyle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: var(--black);
`;

export const TopSearchInputStyle = styled.input`
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
