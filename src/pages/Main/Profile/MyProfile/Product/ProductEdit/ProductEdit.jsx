import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
import {
  PageWrapStyle,
  ConWrapStyle,
  ProductUploadTitleStyle,
  ProductImgUploaderStyle,
} from './ProductEditStyle';
import API from '../../../../../../API';
import { authAtom, accountAtom } from '../../../../../../_state/auth';
import UploadFileBtn from '../../../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function ProductUpload() {
  const { id } = useParams();
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

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await API.get(`/product/detail/${id}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        const productData = res.data.product;
        console.log(res);
        setItemImage(productData.itemImage);
        setItemName(productData.itemName);
        setPrice(new Intl.NumberFormat().format(productData.price));
        setLink(productData.link);
        setImageSrc(productData.itemImage);
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
    getProductData();
  }, [auth, id]);

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceHandler = (e) => {
    const numValue = new Intl.NumberFormat().format(
      parseInt(e.target.value.replaceAll(',', ''), 10)
    );
    setPrice(numValue);
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
    try {
      const res = await API.put(`/product/${id}`, JSON.stringify(productData), {
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
        go={btnAble ? `/user_profile/${accountname}` : ''}
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
          getValue={itemName}
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
          getValue={link}
        />
      </ConWrapStyle>
    </PageWrapStyle>
  );
}
