import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrap, GlobalStyle } from '../../../../styles/GlobalStyles';
import TopBasicNav from '../../../../components/Header/TopBasicNav/TopBasicNav';
import Profile from '../../../../components/Profile/Profile';
import ProductList from '../../../../components/ProductList/ProductList';
import Nav from '../../../../components/Nav/Nav';
import PostCard from '../../../../components/PostCard/PostCard';
import ListOrAlbum from '../../../../components/ListOrAlbum/ListOrAlbum';
import ListIcon from '../../../../components/ListIcon/ListIcon';
import PostAlbum from '../../../../components/PostAlbum/PostAlbum';

const ContSectionStyle = styled.section`
  ${Wrap};
  display: flex;
  flex-direction: column;
`;

const ContDivStyle = styled.div`
  ${Wrap};
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--bg-color);
`;

export default function UserProfile() {
  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <React.Fragment>
      <TopBasicNav />
      <ContSectionStyle>
        <ContDivStyle>
          <Profile align="center" />
          <ProductList />
          <ListOrAlbum toggle={toggle} onclick={onClick} />
        </ContDivStyle>
        {toggle ? <PostCard /> : <PostAlbum />}
      </ContSectionStyle>
      <Nav />
    </React.Fragment>
  );
}
