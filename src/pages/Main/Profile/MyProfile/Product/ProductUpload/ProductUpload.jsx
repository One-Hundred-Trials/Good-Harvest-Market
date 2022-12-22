import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
import {
  ProductUploadContStyle,
  ProductUploadMainStyle,
  ProductUploadTextStyle,
  ProductUploadImgContainerStyle,
} from './ProductUploadStyle';
import API from '../../../../../../API';
import { authAtom } from '../../../../../../_state/auth';
import UploadFileBtn from '../../../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function ProductUpload() {
  const auth = useRecoilValue(authAtom);

  /* 상품정보 데이터 */
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  /* 상품 이미지 미리보기 데이터 */
  const [imageSrc, setImageSrc] = useState(null);

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(Number(e.target.value));
  };
  const linkHandler = (e) => {
    setLink(e.target.value);
  };

  const formData = new FormData();

  const uploadImgHandler = async (e) => {
    const productImage = e.target.files[0];
    formData.append('image', productImage);
    try {
      const res = await API.post(`/image/uploadfile`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      console.log(res);
      const imgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
      setItemImage(imgUrl);
      setImageSrc(imgUrl);
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

  /* 업로드 시 보낼 데이터 */
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
        <div>
          <ProductUploadTextStyle>이미지 등록</ProductUploadTextStyle>
          <ProductUploadImgContainerStyle>
            {imageSrc && <img src={imageSrc} alt="미리보기" />}
          </ProductUploadImgContainerStyle>
          <UploadFileBtn onChange={uploadImgHandler} />
        </div>
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
