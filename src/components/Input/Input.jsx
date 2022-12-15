import React from 'react';
import { ContDivStyle, InputStyle } from './InputStyle';

export default function Input({ label, type, placeholder }) {
  return (
    <ContDivStyle>
      <label htmlFor={type}>{label}</label>
      <InputStyle type={type || 'text'} id={type} placeholder={placeholder} />
    </ContDivStyle>
  );
}
