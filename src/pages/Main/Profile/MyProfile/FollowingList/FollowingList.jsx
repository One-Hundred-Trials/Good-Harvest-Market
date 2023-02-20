import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '_state/auth';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import getFollowingsList from 'api/Follow/getFollwingList';
import Header from 'components/common/Header/Header';
import FollowUserList from 'components/FollowUserList/FollowUserList';
import Loading from 'pages/Loading/Loading';
import {
  PageWrapStyle,
  ConWrapStyle,
  FollowContainerUlStyle,
} from './FollowingListStyle';

export default function FollowingList() {
  const auth = useRecoilValue(authAtom);
  const { accountname } = useParams();
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const getFollowingList = async () => {
      const data = await getFollowingsList(accountname);
      setFollowings(data);
    };
    getFollowingList();
  }, [auth, accountname]);

  if (!followings) return <Loading />;
  else {
    return (
      <>
        <MetaDatas
          title={'나를 추가한 이웃들'}
          desc={'풍년마켓 나를 추가한 이웃 목록'}
          pageURL={`/${accountname}/following`}
        />
        <PageWrapStyle>
          <Header>Followings</Header>
          <ConWrapStyle>
            <FollowContainerUlStyle>
              {followings.map((item, i) => (
                <FollowUserList
                  key={i}
                  width="50px"
                  height="50px"
                  image={item.image}
                  username={item.username}
                  accountname={item.accountname}
                  isfollow={item.isfollow}
                ></FollowUserList>
              ))}
            </FollowContainerUlStyle>
          </ConWrapStyle>
        </PageWrapStyle>
      </>
    );
  }
}
