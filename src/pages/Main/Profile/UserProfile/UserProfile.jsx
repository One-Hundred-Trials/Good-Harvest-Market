import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { authAtom, accountAtom } from '../../../../_state/auth';
import { ConWrap } from '../../../../styles/GlobalStyles';
import Profile from '../../../../components/Profile/Profile';
import ProductList from '../../../../components/ProductList/ProductList';
import PostCard from '../../../../components/PostCardList/PostCardList';
import ListOrAlbum from '../../../../components/ListOrAlbum/ListOrAlbum';
import PostAlbum from '../../../../components/PostAlbum/PostAlbum';
import Header from '../../../../components/Header/Header';
import API from '../../../../API';
import Button from '../../../../components/Button/Button';
import ChatIcon from '../../../../components/ChatIcon/ChatIcon';
import ShareIcon from '../../../../components/ShareIcon/ShareIcon';
import Loading from '../../../Loading/Loading';
import getUserFeedData from '../../../../api/Profile/getUserFeedData';
import getUserFollowerList from '../../../../api/Profile/getUserProfile';

const ConWrapStyle = styled.main`
  ${ConWrap}
  display: flex;
  flex-direction: column;
  & > ul {
    padding: 16px;
  }
`;

const ContDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--bg-color);
`;

export default function UserProfile() {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const [toggle, setToggle] = useState(true);
  const [productList, setProductList] = useState([]);
  const [postsAlbum, setPostsAlbum] = useState([]);
  const [posts, setPosts] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const { id } = useParams();
  const [isfollow, setIsFollow] = useState(false);

  // 무한스크롤
  const [pageNumber, setPageNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  const target = useRef();

  const getFollowerList = useCallback(async () => {
    const res = await getUserFollowerList(account, id);
    console.log(res);
    const filteraccount = Object.values(res).filter(
      (list) => list.accountname === id
    );
    if (filteraccount[0] !== undefined) {
      setIsFollow(filteraccount[0].isfollow);
    }
  }, [id, account]);

  useEffect(() => {
    getFollowerList();
  }, [getFollowerList]);

  const handleSubmitFollow = async () => {
    try {
      const res = await API.post(`/profile/${id}/follow`, JSON.stringify(), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });

      setIsFollow(res.data.profile.isfollow);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitUnFollow = async () => {
    try {
      const res = await API.delete(`/profile/${id}/unfollow`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      setIsFollow(res.data.profile.isfollow);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFollowBtn = () => {
    if (isfollow === true) {
      handleSubmitUnFollow();
    } else {
      handleSubmitFollow();
    }
  };

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const loadMore = () => setPageNumber((prev) => prev + 3);

  const GetUserPostData = useCallback(async () => {
    const res = await getUserFeedData(id, pageNumber);
    const { post } = res;
    const haveImage = post.filter((v) => v.image);
    setPostsAlbum(haveImage);
    setPosts(post);
    setLoading(true);
  }, [id, pageNumber]);

  useEffect(() => {
    GetUserPostData();
  }, [GetUserPostData]);

  const GetUserProfileData = async () => {
    try {
      const res = await API.get(`/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      const { profile } = res.data;
      console.log(res.data);
      console.log(profile);

      setUserProfile(profile);
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

  // 등록된 상품 목록 가져오기
  const GetProductList = async () => {
    try {
      const res = await API.get(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      setProductList(res.data.product);
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
    GetUserProfileData();
    GetProductList();
  }, []);

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

  if (!posts) return <Loading />;
  else {
    return (
      <>
        <Header />
        <ConWrapStyle>
          <ContDivStyle>
            <Profile
              myProfile={userProfile}
              align="center"
              margin="16px 0 17px 0"
              namemarginbottom="6px"
            >
              <ChatIcon />
              {isfollow === true ? (
                <Button size="m" variant="active" onClick={handleFollowBtn}>
                  취소
                </Button>
              ) : (
                <Button size="m" variant="able" onClick={handleFollowBtn}>
                  팔로우
                </Button>
              )}
              <ShareIcon />
            </Profile>
            <ProductList productList={productList} />
            <ListOrAlbum toggle={toggle} onclick={onClick} />
          </ContDivStyle>
          {toggle ? (
            <PostCard posts={posts} />
          ) : (
            <PostAlbum posts={postsAlbum} />
          )}
          <div ref={target} style={{ width: '100%', height: '20px' }}></div>
        </ConWrapStyle>
      </>
    );
  }
}
