import React from 'react';
import ProductUploadIcon from '../../assets/img/img-button.png';
import {
  ProductUploadTextStyle,
  ProductUploadImgContainerStyle,
  ProductUploadIconStyle,
} from './ProductImgUploadStyle';

export default function ProductImgUpload() {
  return (
    <React.Fragment>
      <ProductUploadTextStyle>이미지 등록</ProductUploadTextStyle>
      <ProductUploadImgContainerStyle>
        <ProductUploadIconStyle
          src={ProductUploadIcon}
          alt="업로드할 상품 이미지 불러오기"
        />
      </ProductUploadImgContainerStyle>
    </React.Fragment>
  );
}
