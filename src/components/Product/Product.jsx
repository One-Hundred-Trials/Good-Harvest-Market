import React from 'react';
import {
  ProductWrap,
  ProductImgWrap,
  ProductImg,
  ProductName,
  ProductPrice,
} from './ProductStyle';

export default function Product({ product }) {
  const priceFormat = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <ProductWrap>
      <ProductImgWrap>
        <ProductImg src={product.itemImage} alt={product.itemName} />
      </ProductImgWrap>
      <ProductName>{product.itemName}</ProductName>
      <ProductPrice>{priceFormat}원</ProductPrice>
    </ProductWrap>
  );
}
