import React, { useState } from 'react';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  PostTextStyle,
  BtnContainer,
  ImgWrapStyle,
  ImgPreview,
  ImgDeleteBtn,
} from './PostUploadStyle';
import profileImg from '../../../../assets/img/basic-profile-50.png';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

function PostUpload() {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [FileImg, setFileImg] = useState('');

  // 텍스트 입력
  const OnChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 키 누르면 활성화
  const ActivateHandler = () => {
    if (text.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 미리보기 이미지 파일
  const saveFileImg = (e) => {
    setFileImg(URL.createObjectURL(e.target.files[0]));
  };

  // 미리보기 이미지 파일 삭제
  const deleteFileImg = (e) => {
    URL.revokeObjectURL(FileImg);
    setFileImg('');
  };

  return (
    <PageWrapStyle>
      <Header size="ms" variant={!isActive ? 'disabled' : ''}>
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="" />
        <div>
          <PostTextStyle
            placeholder="게시글 입력하기"
            onChange={OnChangeHandler}
            onKeyUp={ActivateHandler}
            value={text}
          />
          <ImgWrapStyle>
            <ImgPreview src={FileImg} alt="" />
            <ImgDeleteBtn onClick={deleteFileImg} />
          </ImgWrapStyle>
        </div>
        <BtnContainer>
          <UploadFileBtn onChange={saveFileImg} />
        </BtnContainer>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
