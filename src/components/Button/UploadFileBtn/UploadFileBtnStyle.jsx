import styled, { css } from 'styled-components';
import uploadFileImg from '../../../assets/img/img-button.png';
// import uploadFileFillImg from '../../assets/img/upload-file.png';

export const UploadFileStyle = css`
  content: '';
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  cursor: pointer;
  input[type='file'] {
    display: none;
  }
`;

export const UploadFileLabel = styled.label`
  ${UploadFileStyle}
  background: url(${uploadFileImg}) no-repeat center/36px;
`;
