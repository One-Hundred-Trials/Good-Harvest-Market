import React, { useState } from 'react';
import { ContDivStyle, InputStyle } from './InputStyle';

export default function Input({ label, type, placeholder, onChange, name }) {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <ContDivStyle>
      <label htmlFor={type}>{label}</label>
      <InputStyle
        onChange={handleChange}
        name={name}
        type={type || 'text'}
        id={type}
        placeholder={placeholder}
      />
    </ContDivStyle>
  );
}
