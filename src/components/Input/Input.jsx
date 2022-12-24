import React from 'react';
import { ContDivStyle, InputStyle, MessageSpanStyle } from './InputStyle';

export default function Input({
  label,
  type,
  placeholder,
  onChange,
  message,
  required,
  min,
  max,
  onBlur,
  name,
  getValue,
  onKeyUp,
}) {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <ContDivStyle>
      <label htmlFor={type}>{label}</label>
      <InputStyle
        name={name}
        type={type || 'text'}
        id={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        required={required}
        min={min}
        max={max}
        value={getValue}
      />
      <MessageSpanStyle>{message}</MessageSpanStyle>
    </ContDivStyle>
  );
}
