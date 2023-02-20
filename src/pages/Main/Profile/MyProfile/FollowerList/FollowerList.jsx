import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '_state/auth';
import getFollowersList from 'api/Follow/getFollowerList';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import Header from 'components/common/Header/Header';
import FollowUserList from 'components/FollowUserList/FollowUserList';
import Loading from 'pages/Loading/Loading';
import {
  PageWrapStyle,
  ConWrapStyle,
  FollowContainerUlStyle,
} from './FollowerListStyle';

export default function FollowerList() {
  const auth = useRecoilValue(authAtom);
  const { accountname } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getFollowerList = async () => {
      const data = await getFollowersList(accountname);
      setFollowers(data);
    };
    getFollowerList();
  }, [auth, accountname]);

  if (!followers) return <Loading />;
  else {
    return (
      <>
        <MetaDatas
          title={'내 이웃들'}
          desc={'풍년마켓 내 이웃들 목록'}
          pageURL={`/${accountname}/follower`}
        />
        <PageWrapStyle>
          <Header>Followers</Header>
          <ConWrapStyle>
            <FollowContainerUlStyle>
              {followers.map((item, i) => (
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
