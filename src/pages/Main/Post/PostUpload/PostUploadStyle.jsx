import styled from 'styled-components';
import { Wrap } from '../../../../styles/GlobalStyles';

export const PostUploadContainerStyle = styled.section`
  ${Wrap}
  display: flex;
  position: relative;
  padding-top: 20px;
  margin: 0 auto;
`;

export const MyProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin: 0 13px 0 16px;
`;

export const PostTextStyle = styled.textarea`
  width: 100%;
  height: 500px;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0;
  margin-top: 12px;
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--sub-grey-C4);
  }
`;

export const BtnContainer = styled.div`
  > label {
    position: fixed;
    width: 36px;
    height: 36px;
    bottom: 16px;
    right: 16px;
  }
`;
