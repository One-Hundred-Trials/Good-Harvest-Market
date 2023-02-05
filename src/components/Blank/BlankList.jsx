import React from 'react';
import {
  BlankContDivStyle,
  BlankImgStyle,
  BlankTextStyle,
} from './BlankListStyle';

export default function BlankList({ children, imgSrc, width }) {
  return (
    <BlankContDivStyle>
      <BlankImgStyle src={imgSrc} width={width} alt="" />
      <BlankTextStyle>{children}</BlankTextStyle>
    </BlankContDivStyle>
  );
}
