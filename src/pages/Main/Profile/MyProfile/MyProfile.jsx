import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import Header from 'components/common/Header/Header';
import ListOrAlbum from 'components/ListOrAlbum/ListOrAlbum';
import PostAlbum from 'components/PostAlbum/PostAlbum';
import PostCardList from 'components/PostCardList/PostCardList';
import ProductList from 'components/ProductList/ProductList';
import Profile from 'components/Profile/Profile';
import { ConWrap } from 'styles/GlobalStyles';
import { authAtom } from '_state/auth';
import Button from 'components/common/Button/Button';
import NotFound from 'pages/NotFound/NotFound';
import Loading from 'pages/Loading/Loading';
import getMyPost from 'api/Profile/getMyPost';
import getMyProfile from 'api/Profile/getMyProfile';
import getUserProduct from 'api/Profile/getUserProduct';

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

export default function MyProfile() {
  const [toggle, setToggle] = useState(true);
  const [posts, setPosts] = useState(null);
  const [postsAlbum, setPostsAlbum] = useState([]);

  const [pageNumber, setPageNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  const target = useRef();

  const [myProfile, setMyProfile] = useState(null);
  const [productList, setProductList] = useState([]);
  const auth = useRecoilValue(authAtom);
  const account = JSON.parse(localStorage.getItem('account'));
  const { accountname } = useParams();
  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const loadMore = () => setPageNumber((prev) => prev + 3);

  const GetMyPostData = useCallback(async () => {
    const data = await getMyPost(account, pageNumber);
    const { post } = data;
    const haveImage = post.filter((v) => v.image);
    setPostsAlbum(haveImage);
    setPosts(post);
  }, [pageNumber, account]);

  const GetMyProfileData = useCallback(async () => {
    const res = await getMyProfile();
    const { user } = res;
    setMyProfile(user);
  }, []);

  const GetProductList = useCallback(async () => {
    const res = await getUserProduct(account);
    setProductList(res.product);
  }, [account]);

  useEffect(() => {
    GetMyProfileData();
    GetProductList();
  }, [GetMyProfileData, GetProductList]);

  useEffect(() => {
    GetMyPostData();
  }, [GetMyPostData]);

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
          title={'나의 게시물'}
          desc={'풍년마켓 나의 게시물'}
          pageURL={`/my_profile/${accountname}`}
        />
        {accountname === account ? (
          <>
            <Header />
            <ConWrapStyle>
              <ContDivStyle>
                <Profile
                  myProfile={myProfile}
                  align="center"
                  margin="16px 0 17px 0"
                  namemarginbottom="6px"
                >
                  <Button variant="active" size="m" go={'/profile_edit'}>
                    {'프로필 수정'}
                  </Button>
                  <Button variant="active" size="m" go={'/product_upload'}>
                    {'상품 등록'}
                  </Button>
                </Profile>
                <ProductList
                  productList={productList}
                  GetProductList={GetProductList}
                />
                <ListOrAlbum toggle={toggle} onclick={onClick} />
              </ContDivStyle>
              {toggle ? (
                <PostCardList posts={posts} />
              ) : (
                <PostAlbum posts={postsAlbum} />
              )}
              <div ref={target} style={{ width: '100%', height: '20px' }}></div>
            </ConWrapStyle>
          </>
        ) : (
          <NotFound />
        )}
      </>
    );
  }
}
