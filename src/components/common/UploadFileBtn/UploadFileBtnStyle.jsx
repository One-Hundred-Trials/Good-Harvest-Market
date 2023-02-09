import styled, { css } from 'styled-components';
import iconUploadFile from 'assets/img/icon-upload-file.svg';
// import iconUploadFileFill from '../../../assets/img/icon-upload-file-fill.svg';

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
