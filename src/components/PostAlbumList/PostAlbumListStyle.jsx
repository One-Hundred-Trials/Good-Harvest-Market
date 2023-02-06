import styled from 'styled-components';

const ListStyle = styled.li`
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ListStyle;
