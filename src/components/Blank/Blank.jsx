import React from 'react';
import Button from '../Button/Button';
import { BlankImgStyle, BlankTextStyle } from './BlankStyle';

export default function Blank({ src, width, text, children }) {
  return (
    <div>
      <BlankImgStyle src={src} width={width} />
      <BlankTextStyle>{text}</BlankTextStyle>
      <Button size="m" variant="abled">
        {children}
      </Button>
    </div>
  );
}
