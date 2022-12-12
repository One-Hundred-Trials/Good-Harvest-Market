import React from 'react';
import styled from 'styled-components';

const ProductWrap = styled.article`
  width: 140px;
`;
const ProductImgWrap = styled.div`
  position: relative;
  width: 140px;
  height: 90px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 6px;
`;
const ProductImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ProductName = styled.p`
  font-size: 1.4rem;
  margin-bottom: 4px;
`;
const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--point-green);
`;

export default function Product({ apiUrl, productName, price }) {
  return (
    <ProductWrap>
      <ProductImgWrap>
        <ProductImg src={apiUrl} alt={productName} />
      </ProductImgWrap>
      <ProductName>{productName}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductWrap>
  );
}
