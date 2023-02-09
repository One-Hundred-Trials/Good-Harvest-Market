import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { authAtom, accountAtom } from '_state/auth';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import { ConWrap } from 'styles/GlobalStyles';
import Profile from 'components/Profile/Profile';
import ProductList from 'components/ProductList/ProductList';
import PostCard from 'components/PostCardList/PostCardList';
import ListOrAlbum from 'components/ListOrAlbum/ListOrAlbum';
import PostAlbum from 'components/PostAlbum/PostAlbum';
import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import ChatIcon from 'components/ChatIcon/ChatIcon';
import ShareIcon from 'components/ShareIcon/ShareIcon';
import Loading from 'pages/Loading/Loading';
import getUserFeedData from 'api/Profile/getUserFeedData';
import getUserFollowerList from 'api/Profile/getUserFollowerList';
import getUserProfile from 'api/Profile/getUserProfile';
import getUserProduct from 'api/Profile/getUserProduct';
import addFollow from 'api/Profile/addFollow';
import deleteFollow from 'api/Profile/deleteFollow';

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
    const filteraccount = Object.values(res).filter(
      (list) => list.accountname === id
    );
    if (filteraccount[0] !== undefined) {
      setIsFollow(filteraccount[0].isfollow);
    }
  }, [id, account]);

  useEffect(() => {
    getFollowerList();
  }, [getFollowerList, isfollow]);

  const handleSubmitFollow = async () => {
    const res = await addFollow(id);
    setIsFollow(res.profile.isfollow);
  };

  const handleSubmitUnFollow = async () => {
    const res = await deleteFollow(id);
    setIsFollow(res.profile.isfollow);
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

  const GetUserProfileData = useCallback(async () => {
    const res = await getUserProfile(id, isfollow);
    const { profile } = res;
    setUserProfile(profile);
  }, [id, isfollow]);

  // 등록된 상품 목록 가져오기
  const GetProductList = useCallback(async () => {
    const res = await getUserProduct(id);
    setProductList(res.product);
  }, [id]);

  useEffect(() => {
    GetUserProfileData();
    GetProductList();
  }, [GetUserProfileData, GetProductList]);

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
        <MetaDatas
          title={'이웃 프로필'}
          desc={'풍년마켓 이웃들의 프로필'}
          pageURL={`/user_profile/${id}`}
        />
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
