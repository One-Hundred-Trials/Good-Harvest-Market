import styled from 'styled-components';
import IconMore from 'assets/img/icon-more.svg';

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
  line-height: 1.9rem;
  font-size: 1.4rem;
`;

export const PostCarouselStyle = styled.article`
  position: relative;
  width: 304px;
  max-height: 400px;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--light-grey-F2);
`;

export const PostCarouselContStyle = styled.div`
  display: flex;
  align-items: center;
  max-height: 400px;
  transition: 0.5s;
  transform: translateX(${(props) => props.transform}px);
`;

export const PostImgStyle = styled.img`
  min-width: 304px;
  object-fit: contain;
`;

export const PostCarouselBtnsContStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PostCarouselBtnStyle = styled.button`
  width: 22px;
  height: 22px;
  font-size: 1.1rem;
  line-height: 19px;
  border-radius: 50%;
  border: 1.5px solid var(--main-grey-76);
  color: var(--main-grey-76);
  background-color: rgba(255, 255, 255);
`;

export const PostCountDivStyle = styled.div`
  display: flex;
  gap: 18.5px;
`;

export const PostDateStyle = styled.p`
  margin-top: 17px;
  color: var(--main-grey-76);
`;
