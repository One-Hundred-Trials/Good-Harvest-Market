import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Header from '../../../components/Header/Header';
import HomeRenderBlank from '../../../components/HomeRender/HomeRenderBlank';
import PostCardList from '../../../components/PostCardList/PostCardList';
import { ConWrap } from '../../../styles/GlobalStyles';
import API from '../../../API';
import { authAtom } from '../../../_state/auth';

const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
`;

export default function Home() {
  const [post, setPost] = useState(null);
  const auth = useRecoilValue(authAtom);

  const [hasFollowing, setHasFollowing] = useState(null);

  useEffect(() => {
    const userFollowingData = async () => {
      try {
        const res = await API.get(`/post/feed`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        });
        const { posts } = res.data;
        setPost(posts);
        // console.log(posts);
        if (res.data.posts !== null) {
          setHasFollowing(true);
        }
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
    userFollowingData();
  }, [auth]);

  return (
    <>
      <Header>주말의 즐거운 풍년마켓</Header>
      <ConWrapStyle>
        {hasFollowing ? <PostCardList posts={post} /> : <HomeRenderBlank />}
      </ConWrapStyle>
    </>
  );
}
