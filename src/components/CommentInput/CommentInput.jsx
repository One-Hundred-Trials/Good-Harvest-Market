import React from 'react';
import ProfileImg from '../../assets/img/basic-profile-36.png';
import {
  CommentInputContainerStyle,
  CommentForm,
  MyProfileImg,
  CommentTxtInput,
  UploadBtn,
} from './CommentInputStyle';

export default function CommentInput() {
  return (
    <CommentInputContainerStyle>
      <CommentForm>
        <MyProfileImg src={ProfileImg} alt="프로필 사진" />
        <CommentTxtInput
          type="text"
          id="commentInput"
          placeholder="댓글 입력하기..."
        />
        <UploadBtn type="submit" disabled>
          게시
        </UploadBtn>
      </CommentForm>
    </CommentInputContainerStyle>
  );
}
