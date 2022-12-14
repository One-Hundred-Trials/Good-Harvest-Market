import React from 'react';
import profileImg from '../../../../assets/img/basic-profile-50.png';
import {
  ChatContainerStyle,
  MessageContainerStyle,
  TimeStyle,
} from './ChatItemStyle';

export default function ChatItem(props) {
  return (
    <ChatContainerStyle>
      <img src={profileImg} alt="" />
      <MessageContainerStyle>
        <p>{props.txt}</p>
      </MessageContainerStyle>
      <TimeStyle>{props.time}</TimeStyle>
    </ChatContainerStyle>
  );
}
