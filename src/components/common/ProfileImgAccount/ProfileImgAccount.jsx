import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/user_profile/${accountname}`);
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
