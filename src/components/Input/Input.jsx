import React from 'react';
import { ContDivStyle, InputStyle } from './InputStyle';

export default function Input({ label, type }) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <InputStyle type={type || 'text'} id={type} />
    </div>
  );
}
