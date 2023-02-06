import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { accountAtom } from '../../../_state/auth';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
import { ProfileImgContainerStyle } from './ProfileImgAccountStyle';
import ProfileImg from '../ProfileImg/ProfileImg';

export default function ProfileImgAccount({
  width,
  height,
  margin,
  namemarginbottom,
  className,
  username,
  image,
  accountname,
}) {
  const account = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  const link =
    account === accountname
      ? `/my_profile/${accountname}`
      : `/user_profile/${accountname}`;
  const handelClick = () => {
    navigate(link);
  };
  return (
    <ProfileImgContainerStyle className={className} onClick={handelClick}>
      <ProfileImg image={image} width={width} height={height} />
      <ProfileAccount
        size="1.4rem"
        margin={margin}
        namemarginbottom={namemarginbottom}
        username={username}
        accountname={accountname}
      />
    </ProfileImgContainerStyle>
  );
}
