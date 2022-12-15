import styled from 'styled-components';
import BtnStyle from '../../components/Button/Button';
import { Wrap } from '../../styles/GlobalStyles';
import uploadFile from '../../assets/img/upload-file.png';

export const ContSecStyle = styled.section`
  ${Wrap}
  text-align: center;
  /* background-color: var(--sub-grey-C4); */
  color: var(--main-grey-76);
`;

export const HeaderStyle = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 30px;
  padding: 30px 0 40px 0;
  color: black;
`;

export const DescriptStyle = styled.h2`
  margin-top: -28px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--main-grey-76);
`;

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
export const BtnComStyle = styled(BtnStyle)`
  ${BtnStyle};
  margin: 20px;
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
