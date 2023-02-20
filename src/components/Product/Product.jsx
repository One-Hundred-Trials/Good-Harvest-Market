import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '_state/auth';
import ProductModal from 'components/common/Modal/ProductModal';
import {
  ProductWrap,
  ProductImgWrap,
  ProductImg,
  ProductName,
  ProductPrice,
} from './ProductStyle';

export default function Product({ product, GetProductList }) {
  const userAccount = useRecoilValue(accountAtom);
  const { accountname } = useParams();
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
      {modal && (
        <>
          {userAccount === accountname ? (
            <ProductModal
              productId={product.id}
              setModal={setModal}
              GetProductList={GetProductList}
            />
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
}
