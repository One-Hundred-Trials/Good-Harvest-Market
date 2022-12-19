import React, { useState } from 'react';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  PostTextStyle,
  BtnContainer,
} from './PostUploadStyle';
import profileImg from '../../../../assets/img/basic-profile-50.png';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';
import Header from '../../../../components/Header/Header';

function PostUpload() {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

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

  return (
    <PageWrapStyle>
      <Header size="ms" variant={!isActive ? 'disabled' : ''}>
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="" />
        <PostTextStyle
          placeholder="게시글 입력하기"
          onChange={OnChangeHandler}
          onKeyUp={ActivateHandler}
          value={text}
        />
        <BtnContainer>
          <UploadFileBtn />
        </BtnContainer>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
