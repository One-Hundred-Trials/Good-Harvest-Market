import styled from 'styled-components';
import uploadFile from '../../assets/img/upload-file.png';

export const InputFileFormStyle = styled.div`
  height: 110px;
  margin: 30px auto;
  position: relative;
  width: 110px;
`;
export const UploadProfileLabelStyle = styled.label`
  right: 0px;
  bottom: 0px;
  position: absolute;
  background: url(${uploadFile}) no-repeat 50%/36px;
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
export const UploadProfileInputStyle = styled.input`
  display: none;
`;
