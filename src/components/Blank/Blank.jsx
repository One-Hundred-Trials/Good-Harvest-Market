import React from 'react';
import Button from '../Button/Button';
import { BlankImgStyle, BlankTextStyle } from './BlankStyle';

export default function Blank({ src, width, text, children, clickHandler }) {
  return (
    <div>
      <BlankImgStyle src={src} width={width} />
      <BlankTextStyle>{text}</BlankTextStyle>
      <Button size="m" variant="abled" onClick={clickHandler}>
        {children}
      </Button>
    </div>
  );
}
