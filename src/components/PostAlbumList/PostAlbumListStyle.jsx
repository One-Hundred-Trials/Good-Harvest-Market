import styled from 'styled-components';
import iconImgLayer from 'assets/img/icon-img-layers.svg';

const ListStyle = styled.li`
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    /* background-image: url(${iconImgLayer});
    background-size: contain; */
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ListStyle;
