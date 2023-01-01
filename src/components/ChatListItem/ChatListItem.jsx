import React from 'react';
import profileImg from '../../assets/img/basic-profile-50.png';
import {
  ChatListWrapStyle,
  ChatContent,
  ProfileImgWrapStyle,
  ChatDate,
} from './ChatListItemStyle';

export default function ChatListItem(props) {
  return (
    <ChatListWrapStyle>
      <ProfileImgWrapStyle>
        <img src={profileImg} alt="" />
      </ProfileImgWrapStyle>
      <ChatContent>
        <strong>{props.username}</strong>
        <p>{props.content}</p>
      </ChatContent>
      <ChatDate>{props.date}</ChatDate>
    </ChatListWrapStyle>
  );
}
