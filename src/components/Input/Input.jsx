import React from 'react';
import { ContDivStyle, InputStyle } from './InputStyle';

export default function Input({ label, type }) {
  return (
    <ContDivStyle>
      <label htmlFor={type}>{label}</label>
      <InputStyle type={type || 'text'} id={type} />
    </ContDivStyle>
  );
}
