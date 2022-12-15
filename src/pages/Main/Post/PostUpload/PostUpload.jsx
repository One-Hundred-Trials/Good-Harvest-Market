import React from 'react';
import {
  PostUploadContainerStyle,
  MyProfileImg,
  PostTextStyle,
  BtnContainer,
} from './PostUploadStyle';
import profileImg from '../../../../assets/img/basic-profile-50.png';
import TopUploadNav from '../../../../components/Header/TopUploadNav/TopUploadNav';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function PostUpload() {
  return (
    <div>
      <TopUploadNav size="ms" variant="disabled">
        업로드
      </TopUploadNav>
      <PostUploadContainerStyle>
        <MyProfileImg src={profileImg} alt="" />
        <PostTextStyle placeholder="게시글 입력하기" />
        <BtnContainer>
          <UploadFileBtn margin="16px" />
        </BtnContainer>
      </PostUploadContainerStyle>
    </div>
  );
}
