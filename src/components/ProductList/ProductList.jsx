import React from 'react';
import Product from '../Product/Product';
import {
  ProductSectionStyle,
  ProductListTitleStyle,
  ProductListUlStyle,
} from './ProductListStyle';

export default function ProductList() {
  return (
    <ProductSectionStyle>
      <ProductListTitleStyle>판매 중인 상품</ProductListTitleStyle>
      <ProductListUlStyle>
        <Product price="1000원" productName="레드향" />
      </ProductListUlStyle>
    </ProductSectionStyle>
  );
}
