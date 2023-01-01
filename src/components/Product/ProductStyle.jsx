import styled from 'styled-components';
import { Ellipsis } from '../../styles/GlobalStyles';

export const ProductWrap = styled.article`
  width: 140px;
`;

export const ProductImgWrap = styled.div`
  position: relative;
  width: 140px;
  height: 90px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 6px;
  border: 1px solid var(--sub-grey-C4);
`;

export const ProductImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProductName = styled.p`
  ${Ellipsis}
  font-size: 1.4rem;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--point-green);
`;
