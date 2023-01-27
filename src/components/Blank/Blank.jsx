import React from 'react';
import Button from '../common/Button/Button';
import { BlankImgStyle, BlankTextStyle } from './BlankStyle';

export default function Blank({ src, width, text, children, go, onClick }) {
  return (
    <div>
      <BlankImgStyle src={src} width={width} />
      <BlankTextStyle>{text}</BlankTextStyle>
      <Button size="m" variant="abled" go={go} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
