import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import API from '../../../../API';
import Header from '../../../../components/Header/Header';
import ListOrAlbum from '../../../../components/ListOrAlbum/ListOrAlbum';
import PostAlbum from '../../../../components/PostAlbum/PostAlbum';
import PostCardList from '../../../../components/PostCardList/PostCardList';
import ProductList from '../../../../components/ProductList/ProductList';
import Profile from '../../../../components/Profile/Profile';
import { ConWrap } from '../../../../styles/GlobalStyles';
import { authAtom } from '../../../../_state/auth';
import Button from '../../../../components/Button/Button';

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
  const [myProfile, setMyProfile] = useState(null);
  const [productList, setProductList] = useState([]);
  const auth = useRecoilValue(authAtom);
  const { accountname } = useParams();

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const GetMyMyPostData = async () => {
    try {
      const res = await API.get(`/post/${accountname}/userpost`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
      const { post } = res.data;
      console.log(post);
      const haveImage = post.filter((v) => v.image);
      setPostsAlbum(haveImage);
      // console.log(haveImage);
      setPosts(post);
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

  const GetMyProfileData = async () => {
    try {
      const res = await API.get(`/user/myinfo`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      // console.log(res);
      const { user } = res.data;
      setMyProfile(user);
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
      const res = await API.get(`/product/${accountname}`, {
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
    GetMyMyPostData();
    GetMyProfileData();
    GetProductList();
  }, []);

  return (
    <>
      <Header />
      <ConWrapStyle>
        <ContDivStyle>
          <Profile
            myProfile={myProfile}
            // username="풍이네 주말농장"
            // usertext="@sunday_Farm"
            align="center"
            margin="16px 0 17px 0"
            namemarginbottom="6px"
          >
            <Button variant="active" size="m">
              {'프로필 수정'}
            </Button>
            <Button variant="active" size="m" go={'/product_upload'}>
              {'상품 등록'}
            </Button>
          </Profile>
          <ProductList productList={productList} />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? (
          <PostCardList posts={posts} />
        ) : (
          <PostAlbum posts={postsAlbum} />
        )}
      </ConWrapStyle>
    </>
  );
}
