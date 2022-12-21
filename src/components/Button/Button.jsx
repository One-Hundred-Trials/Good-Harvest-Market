import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SIZES = {
  lg: css`
    --width: 322px;
    --button-padding: 13px;
    --button-font-size: 1.4rem;
    --button-radius: 44px;
  `,
  m: css`
    --width: 120px;
    --button-padding: 8px;
    --button-font-size: 1.4rem;
    --button-radius: 30px;
  `,
  ms: css`
    --width: 90px;
    --button-padding: 7px;
    --button-font-size: 1.4rem;
    --button-radius: 32px;
  `,
  s: css`
    --width: 56px;
    --button-padding: 7px;
    --button-font-size: 1.2rem;
    --button-radius: 26px;
  `,
};

const VARIANTS = {
  abled: css`
    --background-color: var(--main-green);
    --color: var(--white);
    --outline: none;
  `,
  disabled: css`
    --background-color: var(--light-green);
    --color: var(--white);
    --outline: none;
  `,
  active: css`
    --background-color: var(--white);
    --color: var(--main-grey-76);
    --outline: solid var(--sub-grey-C4);
  `,
};

const BtnStyle = styled.button`
  ${(prop) => prop.sizeStyle}
  ${(prop) => prop.variantStyle}

  width: var(--width, 322px);
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 13px);
  border-radius: var(--button-radius, 44px);
  background-color: var(--background-color, var(--main-green));
  color: var(--color, var(--white));
  outline: var(--outline, none);
`;

function Button({ size, variant, children, onClick, go }) {
  const navigate = useNavigate();
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const OnClickHandler = () => {
    onClick();
    navigate(go);
  };
  return (
    <BtnStyle
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={OnClickHandler}
    >
      {children}
    </BtnStyle>
  );
}

export default Button;
