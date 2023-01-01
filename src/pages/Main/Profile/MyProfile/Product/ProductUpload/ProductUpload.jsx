import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
import {
  PageWrapStyle,
  ConWrapStyle,
  ProductUploadTitleStyle,
  ProductImgUploaderStyle,
  ImgVaildMessage,
} from './ProductUploadStyle';
import API from '../../../../../../API';
import { authAtom, accountAtom } from '../../../../../../_state/auth';
import UploadFileBtn from '../../../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function ProductUpload() {
  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountAtom);

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  const [imageSrc, setImageSrc] = useState(null);

  const [btnAble, setBtnAble] = useState(false);

  const [itemNameMessage, setItemNameMessage] = useState('');
  const [priceMessage, setPriceMessage] = useState('');
  const [linkMessage, setLinkMessage] = useState('');
  const [itemImageMessage, setItemImageMessage] = useState('');

  const [isItemName, setIsItemName] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isItemImage, setIsItemImage] = useState(false);

  const btnAbleHandler = () => {
    if (isItemName === true && isPrice === true && isLink === true) {
      setBtnAble(true);
    } else {
      setBtnAble(false);
    }
  };

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
    if (itemName.length < 2 || itemName.length > 16) {
      setItemNameMessage('상품명은 2~15자 이내여야 합니다.');
      setIsItemName(false);
    } else {
      setItemNameMessage('');
      setIsItemName(true);
    }
  };

  const priceHandler = (e) => {
    const value = Number(e.target.value.replaceAll(',', ''));
    if (Number.isNaN(value)) return;
    const numValue = new Intl.NumberFormat().format(parseInt(value, 10));
    setPrice(numValue);
    if (price.length < 2) {
      setPriceMessage('10원 이상의 값을 입력해주세요');
      setIsPrice(false);
    } else {
      setPriceMessage('');
      setIsPrice(true);
    }
  };

  const linkHandler = (e) => {
    const linkRegex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    setLink(e.target.value);
    if (!linkRegex.test(link) || link.length < 1) {
      setLinkMessage('사이트 주소를 정확하게 입력해주세요.');
      setIsLink(false);
    } else {
      setLinkMessage('');
      setIsLink(true);
    }
  };

  const imgHandler = (e) => {
    const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
    if (e.target.files[0].size > 5 * 1024 * 1024) {
      setItemImageMessage('파일 사이즈는 5MB까지만 가능합니다.');
      setIsItemImage(false);
    } else if (!e.target.files[0].name.match(correctForm)) {
      setItemImageMessage('이미지 파일만 업로드 가능합니다.');
      setIsItemImage(false);
    } else {
      setItemImageMessage('');
      setIsItemImage(true);
    }
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
      const imgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
      setItemImage(imgUrl);
      saveImgFile(productImage);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const priceNum = parseInt(price.replaceAll(',', ''), 10);
  const productData = {
    product: {
      itemName,
      price: priceNum,
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
        variant={btnAble && isItemImage === true ? '' : 'disabled'}
        disabled={btnAble ? '' : 'disabled'}
        go={btnAble ? `/my_profile/${accountname}` : ''}
        onClick={submitProductHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <div onChange={imgHandler}>
          <ProductUploadTitleStyle>이미지 등록</ProductUploadTitleStyle>
          <ProductImgUploaderStyle>
            {imageSrc && <img src={imageSrc} alt="미리보기" />}
            <ImgVaildMessage>{itemImageMessage}</ImgVaildMessage>
            <UploadFileBtn onChange={uploadImgHandler} />
          </ProductImgUploaderStyle>
        </div>
        <Input
          label="상품명"
          id="productName"
          placeholder="2~15자 이내여야 합니다."
          min="2"
          max="15"
          onChange={itemNameHandler}
          onKeyUp={btnAbleHandler}
          message={itemNameMessage}
        />
        <Input
          label="가격"
          id="productPrice"
          placeholder="숫자만 입력 가능합니다."
          min="2"
          max="12"
          onChange={priceHandler}
          onKeyUp={btnAbleHandler}
          getValue={price}
          message={priceMessage}
        />
        <Input
          label="판매 링크"
          id="productURL"
          placeholder="URL을 입력해 주세요."
          onChange={linkHandler}
          onKeyUp={btnAbleHandler}
          message={linkMessage}
        />
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
