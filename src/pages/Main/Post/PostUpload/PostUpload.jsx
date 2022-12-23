import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom, accountAtom } from '../../../../_state/auth';
import API from '../../../../API';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  PostTextAreaStyle,
  Form,
  BtnWrapStyle,
  ImgWrapStyle,
  ImgPreview,
} from './PostUploadStyle';

import profileImg from '../../../../assets/img/basic-profile-50.png';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

function PostUpload() {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const postData = {
    post: {
      content: text,
      image: selectedImg.join(','),
    },
  };
  const formData = new FormData();

  // 텍스트를 입력하거나 이미지 파일이 있으면 버튼 활성화
  useEffect(() => {
    if (text || imgUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [text, imgUrl]);

  // input에 입력한 값 알아내서 저장
  const OnChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 이미지 업로드
  const ChangeFileHandler = async (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setSelectedImg((prevState) => [...prevState, file.name]);
    formData.append('image', file);
    if (selectedImg.length > 2) {
      alert('3개 이하의 파일을 업로드 하세요.');
      return;
    }
    try {
      const res = await API.post('/image/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시글 업로드
  const PostUploadHandler = async () => {
    try {
      if (!text && selectedImg.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
      }
      const res = await API.post('/post', JSON.stringify(postData), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
        data: postData,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageWrapStyle>
      <Header
        size="ms"
        variant={isActive ? '' : 'disabled'}
        go={isActive ? `/user_profile/${account}` : ''}
        onClick={PostUploadHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="" />
        <Form>
          <PostTextAreaStyle
            type="text"
            placeholder="게시글 입력하기"
            onChange={OnChangeHandler}
          />
          <ImgWrapStyle>
            {selectedImg && <ImgPreview src={selectedImg} alt="" />}
          </ImgWrapStyle>
          <BtnWrapStyle>
            <UploadFileBtn onChange={ChangeFileHandler} />
          </BtnWrapStyle>
        </Form>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
