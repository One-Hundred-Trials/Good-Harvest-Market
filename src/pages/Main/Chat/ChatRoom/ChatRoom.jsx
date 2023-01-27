import React from 'react';
import ChatCommentInput from '../../../../components/ChatCommentInput/ChatCommentInput';
import ChatItem from '../../../../components/ChatItem/ChatItem';
import chatSendImg from '../../../../assets/img/chat-send.png';
import {
  PageWrapStyle,
  ConWrapStyle,
  ChatWrapStyle,
  MyChatWrapStyle,
  MyChatImgWrap,
  MyChatItem,
  TimeStyle,
  SendImg,
} from './ChatRoomStyle';
import Header from '../../../../components/common/Header/Header';

export default function ChatRoom() {
  return (
    <PageWrapStyle>
      <Header>옆동네 퐁이</Header>
      <ConWrapStyle>
        <ChatWrapStyle>
          <ChatItem content="안녕하세요 풍이님!" time="12:39" />
          <ChatItem
            content="채소가 참 싱싱하네요~ 직거래도 가능하신가요?"
            time="12:41"
          />
          <MyChatWrapStyle>
            <MyChatItem>
              <p>안녕하세요^^ 네 가능합니다!</p>
            </MyChatItem>
            <TimeStyle>12:51</TimeStyle>
          </MyChatWrapStyle>
          <MyChatImgWrap>
            <SendImg src={chatSendImg} alt="" />
            <TimeStyle>12:51</TimeStyle>
          </MyChatImgWrap>
        </ChatWrapStyle>
      </ConWrapStyle>
      <ChatCommentInput />
    </PageWrapStyle>
  );
}
