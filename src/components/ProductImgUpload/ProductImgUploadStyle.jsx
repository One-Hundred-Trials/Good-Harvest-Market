import styled from 'styled-components';

export const ProductUploadTextStyle = styled.h3`
  margin-bottom: 18px;
  font-size: 1.2rem;
  color: var(--main-grey-76);
`;
export const ProductUploadImgContainerStyle = styled.div`
  position: relative;
  height: 204px;
  border-radius: 10px;
  background-color: var(--light-grey-F2);
  border: 0.5px solid #dbdbdb;
  margin-bottom: 30px;
  & label {
    position: absolute;
    width: 36px;
    right: 12px;
    bottom: 12px;
  }
`;
