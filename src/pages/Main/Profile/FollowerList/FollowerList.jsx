import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../../_state/auth';
import API from '../../../../API';
import Header from '../../../../components/Header/Header';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';
import FollowUserList from '../../../../components/FollowUserList/FollowUserList';

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

export default function FollowerList() {
  const auth = useRecoilValue(authAtom);
  const { accountname } = useParams();
  const [followers, setFollowers] = useState([]);
  const [myFollowing, setMyFollowing] = useState([]);

  useEffect(() => {
    const getFollowerList = async () => {
      try {
        const res = await API.get(`/profile/${accountname}/follower`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${auth}`,
          },
        });

        const { data } = res;
        setFollowers(data);
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
    getFollowerList();
  }, [auth, accountname]);

  return (
    <PageWrapStyle>
      <Header>Followers</Header>
      <ConWrapStyle>
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
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
