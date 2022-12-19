import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';

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
`;

export const PostTextStyle = styled.textarea`
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

export const BtnContainer = styled.div`
  > label {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 16px;
    right: 16px;
  }
`;
