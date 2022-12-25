import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { authAtom, accountAtom } from '../../../../_state/auth';
import API from '../../../../API';
import { ConWrap } from '../../../../styles/GlobalStyles';
import Profile from '../../../../components/Profile/Profile';
import ProductList from '../../../../components/ProductList/ProductList';
import PostCard from '../../../../components/PostCardList/PostCardList';
import ListOrAlbum from '../../../../components/ListOrAlbum/ListOrAlbum';
import PostAlbum from '../../../../components/PostAlbum/PostAlbum';
import Header from '../../../../components/Header/Header';

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

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  // 등록된 상품 목록
  useEffect(() => {
    const getProductList = async () => {
      try {
        const res = await API.get(`/product/${account}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        console.log(res);
        setProductList(res.data.product);
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();
  }, [account, auth]);

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
          <ProductList productList={productList} />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? <PostCard /> : <PostAlbum />}
      </ConWrapStyle>
    </>
  );
}
