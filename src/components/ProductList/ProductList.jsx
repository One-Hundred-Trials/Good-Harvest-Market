import React from 'react';
import Product from 'components/Product/Product';
import {
  ProductSectionStyle,
  ProductListTitleStyle,
  ProductListUlStyle,
} from './ProductListStyle';

export default function ProductList({ productList, GetProductList }) {
  return (
    <ProductSectionStyle>
      <ProductListTitleStyle>판매 중인 상품</ProductListTitleStyle>
      <ProductListUlStyle>
        {productList ? (
          productList.map((product) => (
            <Product
              key={product.id}
              product={product}
              GetProductList={GetProductList}
            />
          ))
        ) : (
          <h1>등록된 상품이 없습니다.</h1>
        )}
      </ProductListUlStyle>
    </ProductSectionStyle>
  );
}
