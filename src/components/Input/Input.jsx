import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  width: 322px;
  height: 33px;
  border: transparent;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 16px;
  outline: none;
  &:focus {
    border-bottom: 2px solid var(--point-green);
  }
`;

export default function Input({ label, type }) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <InputStyle type={type || 'text'} id={type} />
    </div>
  );
}
