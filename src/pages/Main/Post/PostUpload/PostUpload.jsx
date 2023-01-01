import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  PreviewImgWrapStyle,
  PreviewImg,
  DeleteImgBtn,
} from './PostUploadStyle';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

function PostUpload() {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  // 프로필 이미지
  const [profileImg, setProfileImg] = useState('');
  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);
  // post 정보 데이터
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  // 이미지 미리보기 데이터
  const [previewImgUrl, setPreviewImgUrl] = useState('');

  // 내 프로필 이미지 불러오기
  useEffect(() => {
    const getMyProfileImg = async () => {
      try {
        const res = await API.get('/user/myinfo', {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
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
    getMyProfileImg();
  }, []);

  // 텍스트를 입력하거나 이미지가 있으면 버튼 활성화
  useEffect(() => {
    if (text || previewImgUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [text, previewImgUrl]);

  // input에 입력한 값 알아내서 저장
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 이미지 업로드
  const imgUploadHandler = async (file) => {
    // const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await API.post('/image/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const feedImgUrl = `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
      return feedImgUrl;
    } catch (err) {
      if (err.response) {
        // 응답코드 2xx가 아닌 경우
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
      return false;
    }
  };

  // 이미지 미리보기
  const PreviewImgHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (previewImgUrl.length > 0) {
      alert('1개의 이미지 파일을 업로드 하세요.');
      return;
    }
    if (file) {
      fileReader.readAsDataURL(file);
      setImgFile(file);
    }
    fileReader.onload = () => {
      setPreviewImgUrl((preview) => [...preview, fileReader.result]);
      e.target.value = null;
    };
  };

  // 이미지 미리보기 삭제
  const DeletePreviewImgHandler = (e) => {
    e.preventDefault();
    setPreviewImgUrl('');
    setImgFile('');
  };

  // 게시글 업로드
  const postUploadHandler = async () => {
    const image = await imgUploadHandler(imgFile);
    const postData = {
      post: {
        content: text,
        image,
      },
    };
    try {
      const res = await API.post('/post', JSON.stringify(postData), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      res.then(navigate(`/my_profile/${account}`));
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

  return (
    <PageWrapStyle>
      <Header
        size="ms"
        variant={isActive ? '' : 'disabled'}
        onClick={postUploadHandler}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="내 프로필 이미지" />
        <PostFormStyle>
          <TextAreaStyle
            type="text"
            placeholder="게시글 입력하기"
            onChange={textChangeHandler}
          />
          {previewImgUrl && (
            <ImgWrapStyle>
              <PreviewImgWrapStyle>
                <PreviewImg src={previewImgUrl} alt="이미지 미리보기" />
                <DeleteImgBtn type="button" onClick={DeletePreviewImgHandler} />
              </PreviewImgWrapStyle>
            </ImgWrapStyle>
          )}
          <BtnWrapStyle>
            <UploadFileBtn onChange={PreviewImgHandler} />
          </BtnWrapStyle>
        </PostFormStyle>
      </ConWrapStyle>
    </PageWrapStyle>
  );
}

export default PostUpload;
