import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
import {
  PageWrapStyle,
  ConWrapStyle,
  ProductUploadTitleStyle,
  ProductImgUploaderStyle,
} from './ProductUploadStyle';
import API from '../../../../../../API';
import { authAtom, accountAtom } from '../../../../../../_state/auth';
import UploadFileBtn from '../../../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function ProductUpload() {
  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountAtom);

  /* 상품정보 데이터 */
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  /* 상품 이미지 미리보기 데이터 */
  const [imageSrc, setImageSrc] = useState(null);

  /* 버튼활성화 */
  const [btnAble, setBtnAble] = useState(false);

  const btnAbleHandler = () => {
    if (
      itemName.length > 1 &&
      itemName.length < 16 &&
      price.length > 0 &&
      link.length > 0 &&
      itemImage.length > 0
    ) {
      setBtnAble(true);
    } else {
      setBtnAble(false);
    }
  };

  console.log(itemName.length);
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceHandler = (e) => {
    const value = Number(e.target.value.replaceAll(',', ''));
    if (Number.isNaN(value)) return;
    const numValue = new Intl.NumberFormat().format(parseInt(value, 10));
    setPrice(numValue);
  };
  const linkHandler = (e) => {
    setLink(e.target.value);
  };

  const saveImgFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
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
      saveImgFile(productImage);
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
  const priceNum = parseInt(price.replaceAll(',', ''), 10);
  const productData = {
    product: {
      itemName,
      price: priceNum,
      link,
      itemImage,
    },
  };

  /* 데이터 post */
  const submitProductHandler = async () => {
    // btnAbleHandler();
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
    <PageWrapStyle>
      <Header
        size="ms"
        variant={btnAble ? '' : 'disabled'}
        disabled={btnAble ? '' : 'disabled'}
        go={btnAble ? `/my_profile/${accountname}` : ''}
        onClick={submitProductHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <div onKeyUp={btnAbleHandler}>
          <ProductUploadTitleStyle>이미지 등록</ProductUploadTitleStyle>
          <ProductImgUploaderStyle>
            {imageSrc && (
              <img src={imageSrc} alt="미리보기" onKeyUp={btnAbleHandler} />
            )}
            <UploadFileBtn onChange={uploadImgHandler} />
          </ProductImgUploaderStyle>
        </div>
        <Input
          label="상품명"
          id="productName"
          placeholder="2~15자 이내여야 합니다."
          required="required"
          min="2"
          max="15"
          onChange={itemNameHandler}
          onKeyUp={btnAbleHandler}
        />
        <Input
          label="가격"
          id="productPrice"
          placeholder="숫자만 입력 가능합니다."
          required="required"
          min="2"
          max="15"
          onChange={priceHandler}
          onKeyUp={btnAbleHandler}
          getValue={price}
        />
        <Input
          label="판매 링크"
          id="productURL"
          placeholder="URL을 입력해 주세요."
          required="required"
          onChange={linkHandler}
          onKeyUp={btnAbleHandler}
        />
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
