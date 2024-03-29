import React from 'react';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import ChatCommentInput from 'components/ChatCommentInput/ChatCommentInput';
import ChatItem from 'components/ChatItem/ChatItem';
import Header from 'components/common/Header/Header';
import chatSendImg from 'assets/img/chat-send.svg';
import {
  H2IR,
  PageWrapStyle,
  ConWrapStyle,
  ChatWrapStyle,
  MyChatWrapStyle,
  MyChatImgWrap,
  MyChatItem,
  TimeStyle,
  SendImg,
} from './ChatRoomStyle';

export default function ChatRoom() {
  return (
    <>
      <MetaDatas
        title={'옆동네 풍이님과의 대화'}
        desc={'풍년마켓에서 이웃과 대화하기'}
        pageURL={'/chat/1'}
      />
      <PageWrapStyle>
        <Header>옆동네 퐁이</Header>
        <ConWrapStyle>
          <H2IR>채팅창</H2IR>
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
    </>
  );
}
