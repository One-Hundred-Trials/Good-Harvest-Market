import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../../../../styles/GlobalStyles';

export const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export const ConWrapStyle = styled.form`
  ${ConWrap}
  padding: 30px 34px;
`;

export const ProductUploadTitleStyle = styled.h3`
  margin-bottom: 18px;
  font-size: 1.2rem;
  color: var(--main-grey-76);
`;

export const ProductImgUploaderStyle = styled.div`
  position: relative;
  overflow: hidden;
  height: 204px;
  border-radius: 10px;
  background-color: var(--light-grey-F2);
  border: 0.5px solid #dbdbdb;
  margin-bottom: 30px;
  & > label {
    position: absolute;
    width: 36px;
    right: 12px;
    bottom: 12px;
  }
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImgVaildMessage = styled.span`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #eb5757;
  font-size: 1.2rem;
`;
