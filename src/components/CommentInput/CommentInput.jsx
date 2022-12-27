import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import API from '../../API';
import ProfileImg from '../../assets/img/basic-profile-36.png';
import { authAtom } from '../../_state/auth';
import {
  CommentInputContainerStyle,
  CommentForm,
  MyProfileImg,
  CommentTxtInput,
  UploadBtn,
} from './CommentInputStyle';

export default function CommentInput() {
  const auth = useRecoilValue(authAtom);
  const { id } = useParams();
  const [content, setContent] = useState('');

  const commentInputHandler = (e) => {
    setContent(e.target.value);
  };
  const inputClear = () => {
    setContent('');
  };

  const commentData = {
    comment: {
      content,
    },
  };

  const commentUpload = async (e) => {
    try {
      const res = await API.post(
        `/post/${id}/comments`,
        JSON.stringify(commentData),
        {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        }
      );
      console.log(res);
      inputClear();
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    commentUpload();
  };

  return (
    <CommentInputContainerStyle>
      <CommentForm>
        <MyProfileImg src={ProfileImg} alt="프로필 사진" />
        <CommentTxtInput
          type="text"
          id="commentInput"
          placeholder="댓글 입력하기..."
          onChange={commentInputHandler}
          value={content}
        />
        <UploadBtn type="submit" onClick={handleSubmit}>
          게시
        </UploadBtn>
      </CommentForm>
    </CommentInputContainerStyle>
  );
}
