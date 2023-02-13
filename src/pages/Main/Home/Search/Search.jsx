import React, { useCallback, useEffect, useState } from 'react';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import BlankList from 'components/Blank/BlankList';
import Header from 'components/common/Header/Header';
import ProfileImgAccount from 'components/common/ProfileImgAccount/ProfileImgAccount';
import Loading from 'pages/Loading/Loading';
import getSearchUser from 'api/Search/getSearchUser';
import BlankDuck from 'assets/img/blank-duck.svg';
import { PageWrapStyle, ConWrapStyle } from './SearchStyle';

export default function Search() {
  const [search, setSearch] = useState([]);
  const [keyword, setKeyWord] = useState('');

  const SearchUserName = useCallback(async () => {
    if (keyword.length > 0) {
      const data = await getSearchUser(keyword);
      setSearch(data);
    }
  }, [keyword]);

  useEffect(() => {
    SearchUserName();
  }, [SearchUserName]);

  if (!search) return <Loading />;
  else {
    return (
      <>
        <MetaDatas
          title={'이웃 검색하기'}
          desc={'풍년마켓에서 이웃들 검색하기'}
          pageURL={'/search'}
        />
        <PageWrapStyle>
          <Header setKeyWord={setKeyWord} />
          {keyword === '' ? (
            <BlankList imgSrc={BlankDuck} width="70px">
              찾고 싶은 이웃들을 검색 해보세요!
            </BlankList>
          ) : (
            <ConWrapStyle>
              {search.map((item, i) => (
                <ProfileImgAccount
                  key={i}
                  width="50px"
                  height="50px"
                  margin="0 0 0 12px"
                  namemarginbottom="6px"
                  image={item.image}
                  username={item.username}
                  accountname={item.accountname}
                ></ProfileImgAccount>
              ))}
            </ConWrapStyle>
          )}
        </PageWrapStyle>
      </>
    );
  }
}
