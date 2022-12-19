import React from 'react';
import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../styles/GlobalStyles';
import PostCard from '../../../components/PostCard/PostCard';
import Comment from '../../../components/Comment/Comment';
import CommentInput from '../../../components/CommentInput/CommentInput';
import Header from '../../../components/Header/Header';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;

const ConWrapStyle = styled.main`
  ${ConWrap}
`;

const PostCardUlCont = styled.ul`
  padding: 20px 16px;
`;

const CommentContainerStyle = styled.div`
  padding: 20px 16px;
  border-top: 1px solid var(--sub-grey-C4);
`;

export default function Post() {
  return (
    <PageWrapStyle>
      <Header />
      <ConWrapStyle>
        <PostCardUlCont>
          <PostCard />
        </PostCardUlCont>
        <CommentContainerStyle>
          <Comment
            username="퐁이네 포도나무 열렸네"
            txt="안녕하세요 풍이님~ 오늘도 좋은 하루 되세요 ^^안녕하세요 풍이님~ 오늘도 좋은 하루 되세요 ^^안녕하세요 풍이님~ 오늘도 좋은 하루 되세요 ^^안녕하세요 풍이님~ 오늘도 좋은 하루 되세요 ^^"
            time="5분 전"
          />
          <Comment
            username="애월읍 감귤농장"
            txt="풍경이 참 좋네요 ㅎㅎ"
            time="18분 전"
          />
        </CommentContainerStyle>
      </ConWrapStyle>
      <CommentInput />
    </PageWrapStyle>
  );
}
