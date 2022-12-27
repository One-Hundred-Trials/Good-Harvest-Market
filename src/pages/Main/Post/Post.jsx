import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../_state/auth';
import API from '../../../API';
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
  const auth = useRecoilValue(authAtom);
  const { id } = useParams();
  const [postData, setPostData] = useState('');
  const [postAuthor, setPostAuthor] = useState('');

  useEffect(() => {
    const GetPost = async () => {
      try {
        const res = await API.get(`/post/${id}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        console.log(res);
        console.log(res.data.post);
        const { post } = res.data;
        console.log(post);
        setPostData(post);
        const { author } = res.data.post;
        setPostAuthor(author);
      } catch (err) {
        if (err.response) {
          // 응답코드 2xx가 아닌 경우
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    GetPost();
  }, []);

  console.log(postData);
  return (
    <PageWrapStyle>
      <Header id={id} />
      <ConWrapStyle>
        <PostCardUlCont>
          <PostCard post={postData} author={postAuthor} />
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
