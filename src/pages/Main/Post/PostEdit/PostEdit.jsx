import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
} from '../PostUpload/PostUploadStyle';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';
import { baseUrl } from '../../../../api/api';
import getMyProfile from '../../../../api/Profile/getMyProfile';
import getPost from '../../../../api/Feed/getPost';
import postImage from '../../../../api/ImgUpload/postImage';
import putPost from '../../../../api/Feed/editPost';

export default function PostEdit() {
  const accountName = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [prevImgFile, setPrevImgFile] = useState('');
  const [previewImgUrl, setPreviewImgUrl] = useState('');

  useEffect(() => {
    const getMyProfileImg = async () => {
      const res = await getMyProfile();
      setProfileImg(res.user.image);
    };
    getMyProfileImg();
  }, []);

  useEffect(() => {
    const getPostData = async () => {
      const res = await getPost(id);
      const { post } = res;
      if (post.content) {
        setText(post.content);
      }
      if (post.image) {
        setPrevImgFile(post.image);
        setPreviewImgUrl(post.image);
      }
    };
    getPostData();
  }, [id]);

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
      setPreviewImgUrl(fileReader.result);
      e.target.value = null;
    };
  };

  const deleteImgHandler = (e) => {
    e.preventDefault();
    setPreviewImgUrl('');
    setImgFile('');
    e.target.value = null;
  };

  const editUploadHandler = async () => {
    const image = await imgUploadHandler(imgFile);
    const postData = {
      post: {
        content: text,
        image,
      },
    };
    const res = await putPost(id, postData);
    navigate(`/my_profile/${accountName}`);
  };

  return (
    <PageWrapStyle>
      <Header
        id={id}
        size="ms"
        variant={isActive ? '' : 'disabled'}
        onClick={editUploadHandler}
        disabled={!(text || previewImgUrl)}
      >
        업로드
      </Header>
      <ConWrapStyle>
        <MyProfileImg src={profileImg} alt="내 프로필 이미지" />
        <PostFormStyle>
          <TextAreaStyle
            type="text"
            value={text}
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
