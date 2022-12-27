import React, { useState, useEffect, useRef } from 'react';
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

  //  데이터 계속해서 담을 state
  const [pageNumber, setPageNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  const target = useRef();

  const loadMore = () => setPageNumber((prev) => prev + 3);

  const userFollowingData = async () => {
    try {
      const res = await API.get(`/post/feed?limit=${pageNumber}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
      const { posts } = res.data;
      // setPins((prev) => [...prev, ...posts]);
      setPost(posts);
      setLoading(true);
      //   console.log(posts);
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

  useEffect(() => {
    userFollowingData();
  }, [pageNumber]);

  useEffect(() => {
    const num = 1;
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
            // console.log(entries[0]);
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current);
    }
  }, [loading]);

  //   useEffect(() => {
  //   let observer;
  //   if (target) {
  //     const onIntersect = async ([entry], observer) => {
  //       if (entry.isIntersecting) {
  //         observer.unobserve(entry.target);
  //         await userFollowingData();
  //         observer.observe(entry.target);
  //       }
  //     };
  //     observer = new IntersectionObserver(onIntersect, { threshold: 1 });
  //     observer.observe(target);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [target]);

  // useEffect(() => {
  //   const userFollowingData = async () => {
  //     try {
  //       const res = await API.get(`/post/feed?limit=5`, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${auth}`,
  //         },
  //       });
  //       const { posts } = res.data;
  //       setPost(posts);
  //       // console.log(posts);
  //       if (res.data.posts !== null) {
  //         setHasFollowing(true);
  //       }
  //     } catch (err) {
  //       if (err.response) {
  //         // 응답코드 2xx가 아닌 경우
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   userFollowingData();
  // }, [auth]);

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
