import React from 'react';
import UploadFileBtn from '../../components/Button/UploadFileBtn/UploadFileBtn';
import {
  MessageFormStyle,
  MessageInputStyle,
  SendBtn,
} from './ChatCommentStyle';

export default function ChatComment() {
  return (
    <MessageFormStyle>
      <UploadFileBtn margin="12px 18px 13px 16px" />
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
