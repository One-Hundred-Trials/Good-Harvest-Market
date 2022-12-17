import React from 'react';
import styled from 'styled-components';
import TopSearchNav from '../../../../components/Header/TopSearchNav/TopSearchNav';
import ProfileImgAccount from '../../../../components/ProfileImgAccount/ProfileImgAccount';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';

const PageWrapStyle = styled.div`
  ${PageWrap}
`;
const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
  & li + li {
    margin-top: 16px;
  }
`;

export default function Search() {
  return (
    <PageWrapStyle>
      <TopSearchNav />
      <ConWrapStyle>
        <ProfileImgAccount width="50px"></ProfileImgAccount>
        <ProfileImgAccount width="50px"></ProfileImgAccount>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
