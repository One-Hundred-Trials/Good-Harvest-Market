import { React, useState } from 'react';
import axios from 'axios';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  PostTextStyle,
  BtnContainer,
  Form,
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

  // input에 입력한 값 알아내서 state 저장
  const OnChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 키 누르면 버튼 활성화
  const ActivateHandler = () => {
    if (text.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 미리보기 이미지 파일
  const SaveFileImg = (e) => {
    setFileImg(URL.createObjectURL(e.target.files[0]));
  };

  // 미리보기 이미지 파일 삭제
  const DeleteFileImg = (e) => {
    URL.revokeObjectURL(FileImg);
    setFileImg('');
  };

  // 게시글 POST req
  const OnSubmitHandler = async () => {
    const url = 'https://mandarin.api.weniv.co.kr/post';
    try {
      const postData = {
        post: {
          content: text,
          image: FileImg,
        },
      };
      const res = await axios.post(url, JSON.stringify(postData), {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZjYTkwMTdhZTY2NjU4MWM3NGU4NSIsImV4cCI6MTY3NjYwMDc2NCwiaWF0IjoxNjcxNDE2NzY0fQ.i8lcM05IPiggiyTNUpf0lCGvrSsbWXVNek4SmQm2iMg`,
          'Content-type': 'application/json',
        },
        data: postData,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageWrapStyle>
      <Header
        size="ms"
        variant={!isActive ? 'disabled' : ''}
        onClick={OnSubmitHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="" />
        <Form>
          <PostTextStyle
            placeholder="게시글 입력하기"
            onChange={OnChangeHandler}
            onKeyUp={ActivateHandler}
            value={text}
          />
          <ImgWrapStyle>
            <ImgDeleteBtn onClick={DeleteFileImg} />
            <ImgPreview src={FileImg} alt="" />
          </ImgWrapStyle>
        </Form>
        <BtnContainer>
          <UploadFileBtn onChange={SaveFileImg} />
        </BtnContainer>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
