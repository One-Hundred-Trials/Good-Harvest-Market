import React from 'react';
import ProfileAccountStyle from './ProfileAccountStyle';

export default function ProfileAccount({
  align,
  size,
  namemarginbottom,
  // margintop,
  margin,
  username,
  usertext,
}) {
  return (
    <ProfileAccountStyle
      align={align}
      // margin={margin}
      size={size}
      namemarginbottom={namemarginbottom}
      // margintop={margintop}
      margin={margin}
    >
      <p>{username}</p>
      <p>{usertext}</p>
    </ProfileAccountStyle>
  );
}
