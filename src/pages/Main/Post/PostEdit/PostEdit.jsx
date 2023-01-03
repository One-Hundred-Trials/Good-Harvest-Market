import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
} from '../PostUpload/PostUploadStyle';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

export default function PostEdit() {
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const { id } = useParams();
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [prevImgFile, setPrevImgFile] = useState('');
  const [previewImgUrl, setPreviewImgUrl] = useState('');

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
    const getPostData = async () => {
      try {
        const res = await API.get(`/post/${id}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        const { post } = res.data;
        if (post.content) {
          setText(post.content);
        }
        if (post.image) {
          setPrevImgFile(post.image);
          setPreviewImgUrl(post.image);
        }
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
    getPostData();
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
    if (!file) {
      return prevImgFile;
    }
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
    try {
      if (!text && imgFile.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
        return;
      }
      const res = await API.put(`/post/${id}`, JSON.stringify(postData), {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      });
      navigate(`/my_profile/${account}`);
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
