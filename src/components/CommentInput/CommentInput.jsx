import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import API from '../../API';
import ProfileImg from '../ProfileImg/ProfileImg';
import { authAtom } from '../../_state/auth';
import BasicProfile from '../../assets/img/basic-profile.png';
import {
  CommentInputContainerStyle,
  CommentForm,
  CommentTxtInput,
  UploadBtn,
} from './CommentInputStyle';

export default function CommentInput({ upDateComment }) {
  const auth = useRecoilValue(authAtom);
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [btnAble, setBtnAble] = useState(false);

  const btnAbleHandler = () => {
    if (content.length > 0) {
      setBtnAble(true);
    } else {
      setBtnAble(false);
    }
  };

  const commentInputHandler = (e) => {
    setContent(e.target.value);
  };
  const inputClear = () => {
    setContent('');
    setBtnAble(false);
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
      upDateComment();
    } catch (err) {
      if (err.response) {
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
        <ProfileImg
          width="36px"
          height="36px"
          image={BasicProfile}
          alt="프로필 사진"
        />
        <CommentTxtInput
          type="text"
          id="commentInput"
          placeholder="댓글 입력하기..."
          onChange={commentInputHandler}
          onKeyUp={btnAbleHandler}
          value={content}
        />
        <UploadBtn
          type="submit"
          onClick={handleSubmit}
          color={btnAble ? 'var(--point-green)' : 'var(--sub-grey-C4)'}
          disabled={btnAble ? '' : 'disabled'}
        >
          게시
        </UploadBtn>
      </CommentForm>
    </CommentInputContainerStyle>
  );
}
