import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
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
import Header from '../../../../components/common/Header/Header';
import UploadFileBtn from '../../../../components/common/UploadFileBtn/UploadFileBtn';
import { baseUrl } from '../../../../api/api';
import getMyProfile from '../../../../api/Profile/getMyProfile';
import getPost from '../../../../api/Feed/getPost';
import postImage from '../../../../api/ImgUpload/postImage';
import putPost from '../../../../api/Feed/putPost';

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

  const base64toFile = (base64data, fileName) => {
    const arr = base64data.split(',');
    const mimeType = arr[0].match(/:(.*?);/)[1];
    const realData = arr[1];
    const blob = new Blob([realData], { type: mimeType });
    const file = new File([blob], fileName, { type: mimeType });
    console.log(file);
    return file;
  };

  const previewImgHandler = async (e) => {
    const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
    const file = e.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };
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
    }
    try {
      const compressedFile = await imageCompression(file, options);
      setImgFile(file);
      fileReader.readAsDataURL(compressedFile);
      fileReader.onload = () => {
        const base64data = fileReader.result;
        setPreviewImgUrl((preview) => [...preview, base64data]);
        base64toFile(base64data, file.name);
        e.target.value = null;
      };
    } catch (err) {
      console.log(err);
    }
  };

  const imgUploadHandler = async (file) => {
    if (!file) {
      return prevImgFile;
    } else {
      const formData = new FormData();
      formData.append('image', file);
      const res = await postImage(formData);
      console.log(res);
      const feedImgUrl = `${baseUrl}/${res[0].filename}`;
      console.log(feedImgUrl);
      return feedImgUrl;
    }
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
