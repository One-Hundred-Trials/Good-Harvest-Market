import React from 'react';
import ProfileAccountStyle from './ProfileAccountStyle';

export default function ProfileAccount({
  align,
  size,
  namemarginbottom,
  margin,
  username,
  usertext,
}) {
  return (
    <ProfileAccountStyle
      align={align}
      size={size}
      namemarginbottom={namemarginbottom}
      margin={margin}
    >
      <p>{username}</p>
      <p>{usertext}</p>
    </ProfileAccountStyle>
  );
}
