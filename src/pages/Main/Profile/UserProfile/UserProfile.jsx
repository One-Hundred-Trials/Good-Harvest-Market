import React, { useState, useEffect } from 'react';
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

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const GetUserPostData = async () => {
    try {
      const res = await API.get(`/post/${id}/userpost`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
      const { post } = res.data;
      const haveImage = post.filter((v) => v.image);
      setPostsAlbum(haveImage);
      setPosts(post);
      console.log(haveImage);
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
  const GetUserProfileData = async () => {
    try {
      const res = await API.get(`/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      const { profile } = res.data;
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
      const res = await API.get(`/product/${account}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
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
    GetUserPostData();
    GetUserProfileData();
    GetProductList();
  }, []);

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
          />
          <ProductList productList={productList} />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? <PostCard posts={posts} /> : <PostAlbum posts={postsAlbum} />}
      </ConWrapStyle>
    </>
  );
}
