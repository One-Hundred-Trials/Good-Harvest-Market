import React from 'react';
import styled from 'styled-components';
import Header from '../../../../components/Header/Header';
import Nav from '../../../../components/Nav/Nav';
import ProfileImgAccount from '../../../../components/ProfileImgAccount/ProfileImgAccount';
import { Wrap } from '../../../../styles/GlobalStyles';

const ContSecStyle = styled.section`
  ${Wrap}
`;
const SearchResultStyle = styled.div`
  padding: 0 16px;
`;

export default function Search() {
  return (
    <>
      <Header />
      <ContSecStyle>
        <SearchResultStyle>
          <ProfileImgAccount width="50px"></ProfileImgAccount>
        </SearchResultStyle>
        <SearchResultStyle>
          <ProfileImgAccount width="50px"></ProfileImgAccount>
        </SearchResultStyle>
      </ContSecStyle>
    </>
  );
}
