import styled, { css } from 'styled-components';
import iconUploadFile from '../../assets/img/icon-upload-file.png';
// import iconUploadFileFill from '../../../assets/img/icon-upload-file-fill.png';

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
  background: url(${iconUploadFile}) no-repeat center/36px;
`;
