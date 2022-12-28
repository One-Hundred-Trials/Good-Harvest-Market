import React from 'react';
import ChatComment from '../../../../components/ChatComment/ChatComment';
import ChatItem from '../../../../components/ChatItem/ChatItem';
import chatSendImg from '../../../../assets/img/chat-send.png';
import {
  PageWrapStyle,
  ConWrapStyle,
  ChatItemConStyle,
  ChatRightContainerStyle,
  ChatItemRight,
  TimeStyle,
  ChatImgRight,
  SendImg,
} from './ChatRoomStyle';
import Header from '../../../../components/Header/Header';

export default function ChatRoom(props) {
  return (
    <PageWrapStyle>
      <Header>풍이의 주말농장</Header>
      <ConWrapStyle>
        <ChatItemConStyle>
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
        </ChatItemConStyle>
      </ConWrapStyle>
      <ChatComment />
    </PageWrapStyle>
  );
}
