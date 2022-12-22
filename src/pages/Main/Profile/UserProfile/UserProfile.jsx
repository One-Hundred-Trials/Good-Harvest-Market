import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { authAtom } from '../../../../_state/auth';
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
  const [toggle, setToggle] = useState(true);
  const [posts, setPosts] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const auth = useRecoilValue(authAtom);
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
      setPosts(post);
      // console.log(post);
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

  useEffect(() => {
    GetUserPostData();
    GetUserProfileData();
  }, []);

  return (
    <>
      <Header />
      <ConWrapStyle>
        <ContDivStyle>
          <Profile
            myProfile={userProfile}
            username="풍이네 주말농장"
            usertext="@sunday_Farm"
            align="center"
            margin="16px 0 17px 0"
            namemarginbottom="6px"
          />
          <ProductList />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? <PostCard posts={posts} /> : <PostAlbum />}
      </ConWrapStyle>
    </>
  );
}
