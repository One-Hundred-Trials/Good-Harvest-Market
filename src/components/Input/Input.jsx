import React from 'react';
import { InputStyle, ContDivStyle } from './InputStyle';

export default function Input({ label, type }) {
  return (
    <ContDivStyle>
      <label htmlFor={type}>{label}</label>
      <InputStyle type={type || 'text'} id={type} />
    </ContDivStyle>
  );
}

