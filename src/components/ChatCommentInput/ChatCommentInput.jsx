import React, { useEffect, useState } from 'react';
import UploadFileBtn from '../UploadFileBtn/UploadFileBtn';
import {
  MessageFormStyle,
  MessageInputStyle,
  SendBtn,
} from './ChatCommentInputStyle';

export default function ChatCommentInput() {
  const [text, setText] = useState();
  const [disabled, setDisabled] = useState(true);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  useEffect(() => {
    if (text) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [text]);

  return (
    <MessageFormStyle>
      <UploadFileBtn margin="12px 18px 13px 16px" />
      <MessageInputStyle
        type="text"
        id="commentInput"
        placeholder="메시지 입력하기..."
        onChange={onChangeHandler}
      />
      <SendBtn type="submit" disabled={disabled}>
        전송
      </SendBtn>
    </MessageFormStyle>
  );
}
