import React, { useState } from 'react';
import {
  ProductWrap,
  ProductImgWrap,
  ProductImg,
  ProductName,
  ProductPrice,
} from './ProductStyle';
import ProductModal from '../../components/Modal/ProductModalAlert/ProductModal';

export default function Product({ product }) {
  const [modal, setModal] = useState(false);
  const modalUp = () => {
    setModal(true);
  };

  const priceFormat = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
      <ProductWrap onClick={modalUp}>
        <ProductImgWrap>
          <ProductImg src={product.itemImage} alt={product.itemName} />
        </ProductImgWrap>
        <ProductName>{product.itemName}</ProductName>
        <ProductPrice>{priceFormat}원</ProductPrice>
      </ProductWrap>
      {modal && <ProductModal productId={product.id} setModal={setModal} />}
    </>
  );
}
