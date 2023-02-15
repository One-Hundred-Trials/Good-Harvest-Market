import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import addFollow from 'api/Profile/addFollow';
import deleteFollow from 'api/Profile/deleteFollow';
import { accountAtom } from '_state/auth';
import Button from '../common/Button/Button';
import ProfileImgAccount from '../common/ProfileImgAccount/ProfileImgAccount';
import FollowListStyle from './FollowUserListStyle';

export default function FollowUserList({
  image,
  username,
  accountname,
  height,
  width,
  isfollow,
}) {
  const [follow, setFollow] = useState(isfollow);
  const account = useRecoilValue(accountAtom);

  const handleSubmitFollow = async () => {
    const res = await addFollow(accountname);
    setFollow(res.profile.isfollow);
  };

  const handleSubmitUnFollow = async () => {
    const res = await deleteFollow(accountname);
    setFollow(res.profile.isfollow);
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

      {account !== accountname &&
        (follow === true ? (
          <Button size="s" variant="active" onClick={handleFollowBtn}>
            취소
          </Button>
        ) : (
          <Button size="s" variant="able" onClick={handleFollowBtn}>
            팔로우
          </Button>
        ))}
    </FollowListStyle>
  );
}
