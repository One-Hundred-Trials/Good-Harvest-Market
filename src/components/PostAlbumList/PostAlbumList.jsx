import React from 'react';
import iconImgLayer from 'assets/img/icon-img-layers.png';
import ListStyle from './PostAlbumListStyle';

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
>>>>>>> a8fa8ab (Modify : 이미지명 정리 및 불필요한 이미지 삭제)

export default function PostAlbumList({ image }) {
  return (
    <ListStyle>
      <img src={image} alt="" />
    </ListStyle>
  );
}
