import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-36.png';

const CommentContainer = styled.div`
  width: 390px;
  height: 61px;
`;
const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const MyProfileImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 13px 18px 12px 16px;
`;
const CommentTxtInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  border-style: none;
  outline: none;
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--sub-grey-C4);
  }
`;
const UploadBtn = styled.button`
  flex-shrink: 0;
  padding: 16px;
  background: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--sub-grey-C4);
  /* cursor: pointer; */
`;

export default function Comment() {
  return (
    <CommentContainer>
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
    </CommentContainer>
  );
}
