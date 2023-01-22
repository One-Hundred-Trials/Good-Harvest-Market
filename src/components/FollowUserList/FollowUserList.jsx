import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../_state/auth';
import Button from '../Button/Button';
import ProfileImgAccount from '../ProfileImgAccount/ProfileImgAccount';
import FollowListStyle from './FollowUserListStyle';
import postFollow from '../../api/Profile/postFollow';
import deleteFollow from '../../api/Profile/deleteFollow';

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
      const res = await postFollow(accountname);
      setFollow(res.profile.isfollow);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitUnFollow = async () => {
    try {
      const res = await deleteFollow(accountname);
      setFollow(res.profile.isfollow);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFollowBtn = () => {
    if (follow === true) {
      handleSubmitUnFollow();
    } else {
      handleSubmitFollow();
    }
  };

  return (
    <FollowListStyle>
      <ProfileImgAccount
        width={width}
        height={height}
        margin="0 0 0 12px"
        namemarginbottom="6px"
        image={image}
        username={username}
        accountname={accountname}
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
  );
}
