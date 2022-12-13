import React from 'react';
import Button from '../Button/Button';
import ProfileImgAccount from '../ProfileImgAccount/ProfileImgAccount';
import { FollowContainerUlStyle, FollowListStyle } from './FollowUserListStyle';

export default function FollowUserList() {
  return (
    <FollowContainerUlStyle>
      <FollowListStyle>
        <ProfileImgAccount width="50px" />
        <Button size="s" variant="abled">
          팔로우
        </Button>
      </FollowListStyle>
      <FollowListStyle>
        <ProfileImgAccount width="50px" />
        <Button size="s" variant="active">
          취소
        </Button>
      </FollowListStyle>
    </FollowContainerUlStyle>
  );
}
