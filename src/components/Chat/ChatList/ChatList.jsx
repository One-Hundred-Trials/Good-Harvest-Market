import React from 'react';
import {
  ChatListContanierStyle,
  UserProfileImg,
  ChatItemContanierStyle,
  DateSpan,
} from './ChatListStyle';
import profileImg from '../../../assets/img/basic-profile-50.png';

export default function ChatList() {
  return (
    <ChatListContanierStyle>
      <UserProfileImg src={profileImg} alt="" />
      <ChatItemContanierStyle>
        <strong>애월읍 감귤농장</strong>
        <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요</p>
      </ChatItemContanierStyle>
      <DateSpan>2022.10.25</DateSpan>
    </ChatListContanierStyle>
  );
}
