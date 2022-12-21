import { React, useState } from 'react';
import API from '../../../../API';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  PostTextStyle,
  Form,
  BtnWrapStyle,
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
  const [selectedFile, setSelectedFile] = useState([]);
  const postData = {
    post: {
      content: text,
      image: selectedFile.join(','),
    },
  };
  const formData = new FormData();

  // input에 입력한 값 알아내서 state 저장
  const OnChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // 키 누르면 버튼 활성화
  const ActivateHandler = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 게시글 POST req
  const OnSubmitHandler = async () => {
    try {
      const res = await API.post('/post', JSON.stringify(postData), {
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

  const UploadImgHandler = async (e) => {
    // e.preventDefault();
    // console.log(e.target.files[0]);
    const imgInput = e.target.files[0].name;
    setSelectedFile((prev) => [...prev, imgInput.name]);
    // console.log(selectedFile);
    formData.append('image', e.target.files[0]);
    // console.log(formData);
    try {
      const res = await API.post('/image/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // 미리보기
  };

  return (
    <PageWrapStyle>
      <Header
        size="ms"
        variant={isActive ? '' : 'disabled'}
        go={isActive ? '/user_profile/1' : ''}
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
            <ImgPreview src={selectedFile} alt="" />
          </ImgWrapStyle>
          <BtnWrapStyle>
            <UploadFileBtn onChange={UploadImgHandler} />
          </BtnWrapStyle>
        </Form>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
