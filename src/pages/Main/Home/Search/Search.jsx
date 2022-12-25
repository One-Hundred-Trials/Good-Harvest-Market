import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import API from '../../../../API';
import Header from '../../../../components/Header/Header';
import ProfileImgAccount from '../../../../components/ProfileImgAccount/ProfileImgAccount';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';
import { authAtom } from '../../../../_state/auth';

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
  const auth = useRecoilValue(authAtom);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const SearchUserName = async () => {
      try {
        const res = await API.get(`/user/searchuser/?keyword=hyeppy980804`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        });
        // setPost(posts);
        const { data } = res;
        setSearch(data);
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
    SearchUserName();
  }, [auth]);
  return (
    <PageWrapStyle>
      <Header />
      <ConWrapStyle>
        <ProfileImgAccount
          width="50px"
          margin="0 0 0 12px"
          search={search}
          // namemarginbottom="6px"
          // username="풍이네 주말농장"
          // usertext="@sunday_farm"
        ></ProfileImgAccount>
        {/* <ProfileImgAccount
          width="50px"
          margin="0 0 0 12px"
          // namemarginbottom="6px"
          // username="풍이네 주말농장"
          // usertext="@sunday_farm"
        ></ProfileImgAccount> */}
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
