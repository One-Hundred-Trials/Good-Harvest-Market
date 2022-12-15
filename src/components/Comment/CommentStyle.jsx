import styled from 'styled-components';
import { Ellipsis } from '../../styles/GlobalStyles';

export const CommentContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const InfoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    ${Ellipsis}
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
  span {
    font-weight: 400;
    color: var(--sub-grey-C4);
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  strong {
    margin: 0 6px 0 12px;
  }
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const MoreBtn = styled.button`
  img {
    width: 20px;
    height: 20px;
  }
`;

export const TxtStyle = styled.p`
  height: fit-content;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 18px;
  color: var(--main-grey-76);
  margin-left: 48px;
`;
