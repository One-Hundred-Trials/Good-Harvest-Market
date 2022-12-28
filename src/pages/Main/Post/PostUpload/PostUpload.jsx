import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom, accountAtom } from '../../../../_state/auth';
import API from '../../../../API';
import {
  PageWrapStyle,
  ConWrapStyle,
  MyProfileImg,
  TextAreaStyle,
  PostFormStyle,
  BtnWrapStyle,
  ImgWrapStyle,
  ImgItemWrapStyle,
  ImgPreview,
  ImgDeleteBtn,
} from './PostUploadStyle';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

function PostUpload() {
  // 상태 관리
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  // 프로필 이미지
  const [profileImg, setProfileImg] = useState('');
  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);
  // post 정보 데이터
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState([]);
  // 업로드할 이미지 미리보기 데이터
  const [imgUrl, setImgUrl] = useState('');

  // 내 프로필 이미지 불러오기
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const res = await API.get('/user/myinfo', {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
        console.log(res);
        setProfileImg(res.data.user.image);
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
    getMyProfile();
  }, []);

  // 텍스트를 입력하거나 이미지가 있으면 버튼 활성화
  useEffect(() => {
    if (text || imgUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [text, imgUrl]);

  // input에 입력한 값 알아내서 저장
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 이미지 업로드
  const formData = new FormData();
  const changeFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file === undefined) {
      return;
    }
    if (imgFile.length > 0) {
      alert('1개의 파일을 업로드 하세요.');
      return;
    }
    setImgFile((prev) => [...prev, file.name]);
    formData.append('image', file);
    try {
      const res = await API.post('/image/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
      if (res.data.message === '이미지 파일만 업로드가 가능합니다.') {
        alert('이미지 파일만 업로드가 가능합니다.');
      }
      const feedImgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
      setImgFile(feedImgUrl);
      setImgUrl(feedImgUrl);
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

  // 게시글 업로드
  const postData = {
    post: {
      content: text,
      image: imgFile,
    },
  };
  const submitPostHandler = async () => {
    try {
      if (!text && imgFile.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
      }
      const res = await API.post('/post', JSON.stringify(postData), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
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

  // 이미지 삭제

  return (
    <PageWrapStyle>
      <Header
        size="ms"
        variant={isActive ? '' : 'disabled'}
        go={isActive ? `/my_profile/${account}` : ''}
        onClick={submitPostHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="내 프로필 이미지" />
        <PostFormStyle>
          <TextAreaStyle
            type="text"
            placeholder="게시글 입력하기"
            value={text}
            onChange={onChangeHandler}
          />
          {imgUrl && (
            <ImgWrapStyle>
              <ImgItemWrapStyle>
                <ImgPreview src={imgUrl} alt="이미지 미리보기" />
                <ImgDeleteBtn />
              </ImgItemWrapStyle>
            </ImgWrapStyle>
          )}
          <BtnWrapStyle>
            <UploadFileBtn onChange={changeFileHandler} />
          </BtnWrapStyle>
        </PostFormStyle>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
