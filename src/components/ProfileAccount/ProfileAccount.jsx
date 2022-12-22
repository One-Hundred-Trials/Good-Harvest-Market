import React from 'react';
import ProfileAccountStyle from './ProfileAccountStyle';

export default function ProfileAccount({
  myProfile,
  align,
  size,
  namemarginbottom,
  margin,
  username,
  intro,
  // usertext,
}) {
  // console.log(myProfile);
  return (
    <ProfileAccountStyle
      align={align}
      size={size}
      namemarginbottom={namemarginbottom}
      margin={margin}
    >
      <p>{username}</p>
      <p>{intro}</p>
    </ProfileAccountStyle>
  );
}
