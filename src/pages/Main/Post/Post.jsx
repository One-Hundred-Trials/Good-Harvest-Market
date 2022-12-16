import React from 'react';
import styled from 'styled-components';
import { Wrap } from '../../../styles/GlobalStyles';
import TopBasicNav from '../../../components/Header/TopBasicNav/TopBasicNav';
import PostCard from '../../../components/PostCard/PostCard';
import Comment from '../../../components/Comment/Comment.jsx';
import CommentInput from '../../../components/CommentInput/CommentInput';

const PostContainerStyle = styled.section`
  ${Wrap};
  padding-bottom: 61px;
`;

const CommentContainerStyle = styled.div`
  margin: 0 auto;
  border-top: 1px solid var(--sub-grey-C4);
`;

export default function Post() {
  return (
    <div>
      <TopBasicNav />
      <PostContainerStyle>
        <PostCard />
        <CommentContainerStyle>
          <Comment
            margin="20px 0 16px 0"
            username="퐁이네 포도나무 열렸네"
            txt="안녕하세요 풍이님~ 오늘도 좋은 하루 되세요 ^^"
          />
          <Comment
            margin="20px 0 16px 0"
            username="애월읍 감귤농장"
            txt="풍경이 참 좋네요 ㅎㅎ"
          />
        </CommentContainerStyle>
      </PostContainerStyle>
      <CommentInput />
    </div>
  );
}
