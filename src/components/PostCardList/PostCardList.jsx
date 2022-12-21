import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
import authAtom from '../../_state/auth';
import API from '../../API';

const ContUlStyle = styled.ul`
  background-color: var(--white);
  & li + li {
    margin-top: 20px;
  }
`;

export default function PostCardList() {
  const location = useLocation();
  const auth = useRecoilValue(authAtom);

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (location.pathname === '/') {
      const FollowingUserFeedData = async () => {
        try {
          const res = await API.get(`/post/feed`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${auth}`,
            },
          });
          setPosts(res.data.posts);
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
      FollowingUserFeedData();
    }
  }, []);

  return (
    <ContUlStyle>
      {posts ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <h1>불러오는 중이에요...</h1>
      )}
    </ContUlStyle>
  );
}
