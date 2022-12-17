import React from 'react';
import {
  ProductWrap,
  ProductImgWrap,
  ProductImg,
  ProductName,
  ProductPrice,
} from './ProductStyle';

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
