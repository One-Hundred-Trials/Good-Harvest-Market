import React from 'react';
import styled from 'styled-components';
import UploadFileBtn from '../../../Button/UploadFileBtn/UploadFileBtn';

const MessageFormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  border-top: 1px solid var(--sub-grey-C4);
  bottom: 0;
  position: fixed;
  background: #fff;
`;

const MessageInputStyle = styled.input`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  border-style: none;
  outline: none;
  padding: 0;
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--sub-grey-C4);
  }
`;

const SendBtn = styled.button`
  flex-shrink: 0;
  padding: 16px;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--sub-grey-C4);
  background: inherit;
`;

export default function ChatComment() {
  return (
    <MessageFormStyle>
      <UploadFileBtn />
      <MessageInputStyle
        type="text"
        id="commentInput"
        placeholder="메시지 입력하기..."
      />
      <SendBtn type="submit" disabled>
        전송
      </SendBtn>
    </MessageFormStyle>
  );
}
