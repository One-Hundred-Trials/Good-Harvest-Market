import styled from 'styled-components';
import iconUploadFileFill from '../../assets/img/icon-upload-file-fill.png';

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
  background: url(${iconUploadFileFill}) no-repeat 50%/36px;
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
export const UploadProfileInputStyle = styled.input`
  display: none;
`;

export const ProfileImageContainerStyle = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: block;
  overflow: hidden;
`;

export const ProfileImageStyle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;
`;
