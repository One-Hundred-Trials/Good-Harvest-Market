import React from 'react';
import {
  ChatListContanierStyle,
  ProfileImgAccountStyle,
  DateSpan,
} from './ChatListItemStyle';

export default function ChatListItem({ username, usertext }) {
  return (
    <ChatListContanierStyle>
      <ProfileImgAccountStyle
        width="42px"
        namemarginbottom="4px"
        margin="0 0 0 16px"
        username={username}
        usertext={usertext}
      />
      <DateSpan>2022.10.25</DateSpan>
    </ChatListContanierStyle>
  );
}
