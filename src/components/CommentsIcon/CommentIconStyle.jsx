import styled from 'styled-components';
import CommentImg from '../../assets/img/icon-message-circle.png';

export const CommentWrapStyle = styled.span`
  display: flex;
  align-items: center;
  gap: 7.82px;
  color: var(--main-grey-76);
`;

export const CommentbtnStyle = styled.button`
  width: 17px;
  height: 15px;
  background: url(${CommentImg}) no-repeat 50%;
  background-size: cover;
`;
