import React from 'react';
import Header from '../../../../../../components/Header/Header';
import Input from '../../../../../../components/Input/Input';
// import ProductImgUpload from '../../../../../../components/ProductImgUpload/ProductImgUpload';
import {
  ProductUploadContStyle,
  ProductUploadSectionStyle,
} from './ProductEditStyle';

export default function ProductUpload() {
  return (
    <ProductUploadContStyle>
      <Header size="s" variant="disabled">
        업로드
      </Header>
      <ProductUploadSectionStyle>
        {/* <ProductImgUpload /> */}
        <Input label="상품명" placeholder="2~15자 이내여야 합니다." />
        <Input label="가격" placeholder="숫자만 입력 가능합니다." />
        <Input label="판매 링크" placeholder="URL을 입력해 주세요." />
      </ProductUploadSectionStyle>
    </ProductUploadContStyle>
  );
}
