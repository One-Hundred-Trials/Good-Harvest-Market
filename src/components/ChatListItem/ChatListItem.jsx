import React from 'react';
import profileImg from '../../assets/img/basic-profile-50.png';
import {
  ChatLiStyle,
  ChatUserProfileImg,
  ChatContent,
  ChatDate,
} from './ChatListItemStyle';

export default function ChatListItem(props) {
  return (
    <ChatLiStyle>
      <ChatUserProfileImg src={profileImg} alt="" />
      <ChatContent>
        <strong>{props.user}</strong>
        <p>{props.content}</p>
      </ChatContent>
      <ChatDate>{props.date}</ChatDate>
    </ChatLiStyle>
  );
}
