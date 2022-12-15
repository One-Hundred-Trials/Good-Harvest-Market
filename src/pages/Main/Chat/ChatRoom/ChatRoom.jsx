import React from 'react';
import ChatComment from '../../../../components/Chat/ChatRoom/ChatComment/ChatComment';
import ChatItem from '../../../../components/Chat/ChatRoom/ChatItem/ChatItem';
import TopChatNav from '../../../../components/Header/TopChatNav/TopChatNav';
import chatSendImg from '../../../../assets/img/chat-send.png';
import {
  ChatContainerStyle,
  ChatDivStyle,
  ChatRightContainerStyle,
  ChatItemRight,
  TimeStyle,
  ChatImgRight,
  SendImg,
} from './ChatRoomStyle';

export default function ChatRoom(props) {
  return (
    <>
      <TopChatNav>풍이의 주말농장</TopChatNav>
      <ChatContainerStyle>
        <ChatDivStyle>
          <ChatItem txt="안녕하세요 풍이님!" time="12:39" />
          <ChatItem
            txt="채소가 참 싱싱하네요~ 직거래도 가능하신가요?"
            time="12:41"
          />
          <ChatRightContainerStyle>
            <ChatItemRight>
              <p>안녕하세요^^ 네 가능합니다!</p>
            </ChatItemRight>
            <TimeStyle>12:51</TimeStyle>
          </ChatRightContainerStyle>
          <ChatImgRight>
            <SendImg src={chatSendImg} alt="" />
            <TimeStyle>12:51</TimeStyle>
          </ChatImgRight>
        </ChatDivStyle>
      </ChatContainerStyle>
      <ChatComment />
    </>
  );
}
