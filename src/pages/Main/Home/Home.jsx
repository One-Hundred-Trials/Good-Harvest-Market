import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from 'components/common/Header/Header';
import HomeRenderBlank from 'components/HomeRender/HomeRenderBlank';
import PostCardList from 'components/PostCardList/PostCardList';
import getFollowFeed from 'api/Feed/getFollowFeed';
import Loading from 'pages/Loading/Loading';
import ConWrapStyle from './HomeStyle';


export default function Home() {
  const [post, setPost] = useState(null);
  const [hasFollowing, setHasFollowing] = useState(null);
  const [pageNumber, setPageNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  const target = useRef();

  const loadMore = () => setPageNumber((prev) => prev + 3);

  const userFollowingData = useCallback(async () => {
    const res = await getFollowFeed(pageNumber);
    const { posts } = res;
    setPost(posts);
    setLoading(true);
    if (posts.length > 0) {
      setHasFollowing(true);
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
