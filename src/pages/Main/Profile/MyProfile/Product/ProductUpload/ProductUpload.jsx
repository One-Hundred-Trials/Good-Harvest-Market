import React from 'react';
import TopUploadNav from '../../../../../../components/Header/TopUploadNav/TopUploadNav';
import Input from '../../../../../../components/Input/Input';
import ProductImgUpload from '../../../../../../components/ProductImgUpload/ProductImgUpload';
import {
  ProductUploadContStyle,
  ProductUploadSectionStyle,
} from './ProductUploadStyle';

export default function ProductUpload() {
  return (
    <ProductUploadContStyle>
      <TopUploadNav size="s" variant="disabled">
        업로드
      </TopUploadNav>
      <ProductUploadSectionStyle>
        <ProductImgUpload />
        <Input label="상품명" placeholder="2~15자 이내여야 합니다." />
        <Input label="가격" placeholder="숫자만 입력 가능합니다." />
        <Input label="판매 링크" placeholder="URL을 입력해 주세요." />
      </ProductUploadSectionStyle>
    </ProductUploadContStyle>
  );
}
