import styled from 'styled-components';
import uploadFile from '../../../../../assets/img/upload-file.png';

export const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin: 0 auto;
  text-align: left;
  label {
  }
  input {
    width: 322px;
    height: 33px;
    border: transparent;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 16px;
    outline: none;
    &:focus {
      border-bottom: 2px solid var(--point-green);
    }
  }
`;
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
