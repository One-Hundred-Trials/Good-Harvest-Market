import styled from 'styled-components';

export const MessageFormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 16px;
  border-top: 1px solid var(--sub-grey-C4);
  position: sticky;
  bottom: 0;
  background: var(--white);
`;

export const MessageInputStyle = styled.input`
  width: 100%;
  margin-left: 18px;
  font-size: 1.4rem;
  border-style: none;
  outline: none;
  padding: 0;
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--sub-grey-C4);
  }
`;

export const SendBtn = styled.button`
  flex-shrink: 0;
  padding-right: 4px;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--point-green);
  background: inherit;
  &:disabled {
    color: var(--sub-grey-C4);
    cursor: default;
  }
`;
