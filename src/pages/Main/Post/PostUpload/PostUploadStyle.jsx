import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';
import iconX from '../../../../assets/img/icon-x.png';

export const PageWrapStyle = styled.div`
  ${PageWrap}
`;

export const ConWrapStyle = styled.section`
  ${ConWrap}
  display: flex;
  position: relative;
  padding: 20px 16px;
`;

export const MyProfileImg = styled.img`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostFormStyle = styled.form`
  width: 100%;
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 55px;
  font-size: 1.4rem;
  margin-left: 13px;
  margin-top: 12px;
  &::placeholder {
    font-size: 1.4rem;
    color: var(--sub-grey-C4);
  }
`;
export const ImgWrapStyle = styled.ul`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > li + li {
    margin-left: 8px;
  }
`;

export const PreviewImgWrapStyle = styled.li`
  position: relative;
`;

export const PreviewImg = styled.img`
  border-radius: 10px;
  width: 200px;
  height: auto;
`;

export const DeleteImgBtn = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 11px;
  right: 11px;
  background: url(${iconX}) no-repeat;
  background-size: cover;
`;

export const BtnWrapStyle = styled.div`
  & > label {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 16px;
    right: 16px;
  }
`;
