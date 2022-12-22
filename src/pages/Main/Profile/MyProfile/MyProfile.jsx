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
import { accountAtom, authAtom } from '../../../../_state/auth';

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
  // 로그인시 저장된 accountname과 url
  const atomaccountname = useRecoilValue(accountAtom);
  const auth = useRecoilValue(authAtom);
  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const { accountname } = useParams();
  // console.log(accountname);

  useEffect(() => {
    const MyPost = async () => {
      try {
        const res = await API.get(`/post/${accountname}/userpost`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        });
        const { post } = res.data;
        setPosts(post);
        console.log(post);
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
    MyPost();
  }, [auth, accountname]);

  return (
    <>
      <Header />
      <ConWrapStyle>
        <ContDivStyle>
          <Profile
            username="풍이네 주말농장"
            usertext="@sunday_Farm"
            align="center"
            margin="16px 0 17px 0"
            namemarginbottom="6px"
          />
          <ProductList />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? <PostCardList posts={posts} /> : <PostAlbum />}
      </ConWrapStyle>
    </>
  );
}
