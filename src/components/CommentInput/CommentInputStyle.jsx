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
`;

export const MyProfileImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 13px 18px 12px 16px;
`;

export const CommentTxtInput = styled.input`
  width: 100%;
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
  padding: 16px;
  background: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--sub-grey-C4);
`;
