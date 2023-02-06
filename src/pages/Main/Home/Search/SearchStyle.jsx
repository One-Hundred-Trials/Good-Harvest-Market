import styled from 'styled-components';
import { PageWrap, ConWrap } from '../../../../styles/GlobalStyles';

export const PageWrapStyle = styled.div`
  ${PageWrap}
`;
export const ConWrapStyle = styled.main`
  ${ConWrap}
  padding: 20px 16px;
  & > div + div {
    margin-top: 16px;
  }
`;
