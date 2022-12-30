import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../_state/auth';
import API from '../../API';
import Button from '../Button/Button';
import ProfileImgAccount from '../ProfileImgAccount/ProfileImgAccount';
import { FollowContainerUlStyle, FollowListStyle } from './FollowUserListStyle';

export default function FollowUserList({
  image,
  username,
  accountname,
  height,
  width,
  isfollow,
}) {
  const [follow, setFollow] = useState(isfollow);
  const auth = useRecoilValue(authAtom);

  const handleSubmitFollow = async () => {
    try {
      const res = await API.post(
        `/profile/${accountname}/follow`,
        JSON.stringify(),
        {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        }
      );

      console.log('팔로우', res);
      setFollow(res.data.profile.isfollow);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitUnFollow = async () => {
    try {
      const res = await API.delete(`/profile/${accountname}/unfollow`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      console.log('언팔로우', res);
      setFollow(res.data.profile.isfollow);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowBtn = () => {
    console.log(follow);
    if (follow === true) {
      handleSubmitUnFollow();
    } else {
      handleSubmitFollow();
    }
  };

  return (
    <FollowContainerUlStyle>
      <FollowListStyle>
        <ProfileImgAccount
          width={width}
          height={height}
          margin="0 0 0 12px"
          namemarginbottom="6px"
          image={image}
          username={username}
          accountname={accountname}
          href={`/user_profile/${accountname}/`}
        />
        {follow === true ? (
          <Button size="s" variant="active" onClick={handleFollowBtn}>
            취소
          </Button>
        ) : (
          <Button size="s" variant="able" onClick={handleFollowBtn}>
            팔로우
          </Button>
        )}
      </FollowListStyle>
    </FollowContainerUlStyle>
  );
}
