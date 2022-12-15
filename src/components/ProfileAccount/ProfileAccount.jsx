import React from 'react';
import ProfileAccountStyle from './ProfileAccountStyle';

export default function ProfileAccount({
  align,
  margin,
  size,
  marginbottom,
  margintop,
}) {
  console.log(margin);
  console.log(size);
  return (
    <ProfileAccountStyle
      align={align}
      margin={margin}
      size={size}
      marginbottom={marginbottom}
      margintop={margintop}
    >
      <div>풍이의 주말농장</div>
      <div>@ sunday_Farm</div>
    </ProfileAccountStyle>
  );
}
