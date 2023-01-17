import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Header from '../../../components/Header/Header';
import HomeRenderBlank from '../../../components/HomeRender/HomeRenderBlank';
import PostCardList from '../../../components/PostCardList/PostCardList';
import { ConWrap } from '../../../styles/GlobalStyles';
import API from '../../../API';
import { authAtom } from '../../../_state/auth';
import Loading from '../../Loading/Loading';
import getFollowFeed from '../../../api/Feed/getFollowFeed';

const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
`;

export default function Home() {
  const [post, setPost] = useState(null);
  const [hasFollowing, setHasFollowing] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  const target = useRef();

  const loadMore = () => setPageNumber((prev) => prev + 3);

  const userFollowingData = useCallback(async () => {
    try {
      const res = await getFollowFeed(pageNumber);
      console.log(res);
      const { posts } = res;
      setPost(posts);
      setLoading(true);
      if (posts.length > 0) {
        setHasFollowing(true);
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }, [pageNumber]);

  useEffect(() => {
    userFollowingData();
  }, [userFollowingData]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current);
    }
  }, [loading]);

  if (!post) return <Loading />;
  else {
    return (
      <>
        <Header>주말의 즐거운 풍년마켓</Header>
        <ConWrapStyle>
          {hasFollowing ? <PostCardList posts={post} /> : <HomeRenderBlank />}
          <div ref={target} style={{ width: '100%', height: '20px' }}></div>
        </ConWrapStyle>
      </>
    );
  }
}
