import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
import ProductImgUpload from '../../../../../../components/ProductImgUpload/ProductImgUpload';
import {
  ProductUploadContStyle,
  ProductUploadMainStyle,
} from './ProductUploadStyle';
import API from '../../../../../../API';
import { authAtom } from '../../../../../../_state/auth';

export default function ProductUpload() {
  const auth = useRecoilValue(authAtom);

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setitemImage] = useState('');

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const linkHandler = (e) => {
    setLink(e.target.value);
  };

  const productData = {
    product: {
      itemName,
      price,
      link,
      itemImage,
    },
  };

  const submitProductHandler = async () => {
    try {
      const res = await API.post('/product', JSON.stringify(productData), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
        data: productData,
      });
      console.log(res);
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <ProductUploadContStyle>
      <Header size="ms" variant="disabled" onClick={submitProductHandler}>
        업로드
      </Header>
      <ProductUploadMainStyle>
        <ProductImgUpload />
        <Input
          label="상품명"
          id="productName"
          placeholder="2~15자 이내여야 합니다."
          required="required"
          min="2"
          max="15"
          onChange={itemNameHandler}
        />
        <Input
          label="가격"
          id="productPrice"
          placeholder="숫자만 입력 가능합니다."
          required="required"
          min="2"
          max="15"
          onChange={priceHandler}
        />
        <Input
          label="판매 링크"
          id="productURL"
          placeholder="URL을 입력해 주세요."
          required="required"
          onChange={linkHandler}
        />
      </ProductUploadMainStyle>
    </ProductUploadContStyle>
  );
}
