import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../../api/api';
import getMyProfile from '../../../../api/Profile/getMyProfile';
import postImage from '../../../../api/ImgUpload/postImage';
import createPost from '../../../../api/Feed/createPost';
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
import Header from '../../../../components/common/Header/Header';
import UploadFileBtn from '../../../../components/common/UploadFileBtn/UploadFileBtn';
import Loading from '../../../Loading/Loading';

export default function PostUpload() {
  const accountName = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [previewImgUrl, setPreviewImgUrl] = useState('');

  useEffect(() => {
    const getMyProfileImg = async () => {
      try {
        const res = await getMyProfile();
        setProfileImg(res.user.image);
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
    getMyProfileImg();
  }, []);

  useEffect(() => {
    if (text || previewImgUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [text, previewImgUrl]);

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const imgUploadHandler = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await postImage(formData);
      const feedImgUrl = `${baseUrl}/${res[0].filename}`;
      return feedImgUrl;
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
      return null;
    }
  };

  const previewImgHandler = (e) => {
    const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (previewImgUrl.length > 0) {
      alert('1개의 이미지 파일을 업로드 하세요.');
      return;
    }
    if (file.size > 1024 * 1024 * 10) {
      alert('10MB 이상의 이미지는 업로드 할 수 없습니다.');
      return;
    }
    if (!file.name.match(correctForm)) {
      alert(
        '이미지 파일만 업로드가 가능합니다. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)'
      );
    } else {
      fileReader.readAsDataURL(file);
      setImgFile(file);
    }
    fileReader.onload = () => {
      setPreviewImgUrl((preview) => [...preview, fileReader.result]);
      e.target.value = null;
    };
  };

  const deleteImgHandler = (e) => {
    e.preventDefault();
    setPreviewImgUrl('');
    setImgFile('');
    e.target.value = null;
  };

  const postUploadHandler = async () => {
    const image = await imgUploadHandler(imgFile);
    const postData = {
      post: {
        content: text,
        image,
      },
    };
    try {
      if (!text && imgFile.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
        return;
      }
      const res = await createPost(postData);
      navigate(`/my_profile/${accountName}`);
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

  if (!profileImg) return <Loading />;
  else {
    return (
      <PageWrapStyle>
        <Header
          size="ms"
          variant={isActive ? '' : 'disabled'}
          onClick={postUploadHandler}
          disabled={!(text || previewImgUrl)}
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
                  <DeleteImgBtn type="button" onClick={deleteImgHandler} />
                </PreviewImgWrapStyle>
              </ImgWrapStyle>
            )}
            <BtnWrapStyle>
              <UploadFileBtn onChange={previewImgHandler} />
            </BtnWrapStyle>
          </PostFormStyle>
        </ConWrapStyle>
      </PageWrapStyle>
    );
  }
}
