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
  const [search, setSearch] = useState([]);
  const [keyword, setKeyWord] = useState('');

  useEffect(() => {
    const SearchUserName = async () => {
      try {
        const res = await API.get(`/user/searchuser/?keyword=${keyword}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        });
        const { data } = res;
        setSearch(data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    SearchUserName();
  }, [auth, keyword]);

  return (
    <PageWrapStyle>
      <Header setKeyWord={setKeyWord} />
      <ConWrapStyle>
        {search.map((item, i) => (
          <ProfileImgAccount
            key={i}
            width="50px"
            margin="0 0 0 12px"
            namemarginbottom="6px"
            image={item.image}
            username={item.username}
            accountname={item.accountname}
          ></ProfileImgAccount>
        ))}
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
