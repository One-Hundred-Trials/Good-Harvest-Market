import React from 'react';
import profileImg from 'assets/img/basic-profile-50.png';
import {
  ChatItemWrapStyle,
  MessageWrapStyle,
  TimeStyle,
} from './ChatItemStyle';

export default function ChatItem(props) {
  return (
    <ChatItemWrapStyle>
      <img src={profileImg} alt="" />
      <MessageWrapStyle>
        <p>{props.content}</p>
      </MessageWrapStyle>
      <TimeStyle>{props.time}</TimeStyle>
    </ChatItemWrapStyle>
  );
}
