import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SIZES, VARIANTS, BtnStyle } from './ButtonStyle';

function Button({ size, variant, disabled, children, onClick, go }) {
  const navigate = useNavigate();
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const OnClickHandler = () => {
    if (onClick) {
      onClick();
    }
    navigate(go);
  };
  return (
    <BtnStyle
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={OnClickHandler}
      disabled={disabled}
    >
      {children}
    </BtnStyle>
  );
}

export default Button;
