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
  ImgVaildMessage,
} from './ProductEditStyle';
import API from '../../../../../../API';
import { authAtom, accountAtom } from '../../../../../../_state/auth';
import UploadFileBtn from '../../../../../../components/Button/UploadFileBtn/UploadFileBtn';
import Loading from '../../../../../Loading/Loading';

export default function ProductUpload() {
  const { id } = useParams();
  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountAtom);

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  const [imageSrc, setImageSrc] = useState(null);

  const [btnAble, setBtnAble] = useState(true);

  const [itemNameMessage, setItemNameMessage] = useState('');
  const [priceMessage, setPriceMessage] = useState('');
  const [linkMessage, setLinkMessage] = useState('');
  const [itemImageMessage, setItemImageMessage] = useState('');

  const [isItemName, setIsItemName] = useState(true);
  const [isPrice, setIsPrice] = useState(true);
  const [isLink, setIsLink] = useState(true);
  const [isItemImage, setIsItemImage] = useState(true);

  const btnAbleHandler = () => {
    if (isItemName === true && isPrice === true && isLink === true) {
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
    if (itemName.length < 2 || itemName.length > 16) {
      setItemNameMessage('???????????? 2~15??? ???????????? ?????????.');
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
      setPriceMessage('10??? ????????? ?????? ??????????????????');
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
      setLinkMessage('????????? ????????? ???????????? ??????????????????.');
      setIsLink(false);
    } else {
      setLinkMessage('');
      setIsLink(true);
    }
  };

  const imgHandler = (e) => {
    const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
    if (e.target.files[0].size > 5 * 1024 * 1024) {
      setItemImageMessage('?????? ???????????? 5MB????????? ???????????????.');
      setIsItemImage(false);
    } else if (!e.target.files[0].name.match(correctForm)) {
      setItemImageMessage('????????? ????????? ????????? ???????????????.');
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
      const res = await API.put(`/product/${id}`, JSON.stringify(productData), {
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

  if (!itemImage) return <Loading />;
  else {
    return (
      <PageWrapStyle>
        <Header
          size="ms"
          variant={btnAble && isItemImage === true ? 'abled' : 'disabled'}
          disabled={btnAble ? '' : 'disabled'}
          go={btnAble ? `/my_profile/${accountname}` : ''}
          onClick={submitProductHandler}
        >
          ?????????
        </Header>
        <ConWrapStyle>
          <div onChange={imgHandler}>
            <ProductUploadTitleStyle>????????? ??????</ProductUploadTitleStyle>
            <ProductImgUploaderStyle>
              {imageSrc && <img src={imageSrc} alt="????????????" />}
              <ImgVaildMessage>{itemImageMessage}</ImgVaildMessage>
              <UploadFileBtn onChange={uploadImgHandler} />
            </ProductImgUploaderStyle>
          </div>
          <Input
            label="?????????"
            id="productName"
            placeholder="2~15??? ???????????? ?????????."
            required="required"
            min="2"
            max="15"
            onChange={itemNameHandler}
            onKeyUp={btnAbleHandler}
            message={itemNameMessage}
            getValue={itemName}
          />
          <Input
            label="??????"
            id="productPrice"
            placeholder="????????? ?????? ???????????????."
            required="required"
            min="2"
            max="15"
            onChange={priceHandler}
            onKeyUp={btnAbleHandler}
            getValue={price}
            message={priceMessage}
          />
          <Input
            label="?????? ??????"
            id="productURL"
            placeholder="URL??? ????????? ?????????."
            required="required"
            onChange={linkHandler}
            onKeyUp={btnAbleHandler}
            message={linkMessage}
            getValue={link}
          />
        </ConWrapStyle>
      </PageWrapStyle>
    );
  }
}
