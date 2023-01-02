import styled from 'styled-components';

export const CommentInputContainerStyle = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  border-top: 1px solid var(--sub-grey-C4);
  background-color: var(--white);
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const CommentTxtInput = styled.input`
  width: 100%;
  margin: 0 18px;
  font-size: 1.4rem;
  border-style: none;
  outline: none;
  &::placeholder {
    font-size: 1.4rem;
    color: var(--sub-grey-C4);
  }
`;

export const UploadBtn = styled.button`
  flex-shrink: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.color};
  &:disabled {
    cursor: default;
  }
`;
