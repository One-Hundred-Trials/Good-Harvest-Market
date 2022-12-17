import React from 'react';
import ProductUploadIcon from '../../assets/img/img-button.png';
import UploadFileBtn from '../Button/UploadFileBtn/UploadFileBtn';
import {
  ProductUploadTextStyle,
  ProductUploadImgContainerStyle,
} from './ProductImgUploadStyle';

export default function ProductImgUpload() {
  return (
    <React.Fragment>
      <ProductUploadTextStyle>이미지 등록</ProductUploadTextStyle>
      <ProductUploadImgContainerStyle>
        <UploadFileBtn />
      </ProductUploadImgContainerStyle>
    </React.Fragment>
  );
}
