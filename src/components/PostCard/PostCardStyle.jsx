import styled from 'styled-components';
import IconMore from '../../assets/img/icon-more-18.png';

export const PostAccountLiStyle = styled.li``;

export const PostProfileDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const PostIconMoreStyle = styled.button`
  width: 18px;
  height: 40px;
  background: url(${IconMore}) no-repeat 50%/18px;
`;

export const PostDivStyle = styled.div`
  padding-left: 54px;
`;

export const PostContentsStyle = styled.p`
  margin-bottom: 16px;
  line-height: 1.8rem;
  font-size: 1.4rem;
`;

export const PostImgStyle = styled.img`
  margin-bottom: 15px;
`;

export const PostCountDivStyle = styled.div`
  display: flex;
  gap: 18.5px;
`;

export const PostDateStyle = styled.p`
  margin-top: 19px;
  color: var(--main-grey-76);
`;
