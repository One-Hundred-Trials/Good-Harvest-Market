import React from 'react';
import styled from 'styled-components';
import Header from '../../../../components/Header/Header';
import ProfileImgAccount from '../../../../components/ProfileImgAccount/ProfileImgAccount';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;
const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
  & > div + div {
    margin-top: 16px;
  }
`;

export default function Search() {
  return (
    <PageWrapStyle>
      <Header />
      <ConWrapStyle>
        <ProfileImgAccount
          width="50px"
          margin="0 0 0 12px"
          namemarginbottom="6px"
          username="풍이네 주말농장"
          usertext="@sunday_farm"
        ></ProfileImgAccount>
        <ProfileImgAccount
          width="50px"
          margin="0 0 0 12px"
          namemarginbottom="6px"
          username="풍이네 주말농장"
          usertext="@sunday_farm"
        ></ProfileImgAccount>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
