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
import Loading from '../../../Loading/Loading';

export default function PostUpload() {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
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
      alert('1?????? ????????? ????????? ????????? ?????????.');
      return;
    }
    if (file.size > 1024 * 1024 * 10) {
      alert('10MB ????????? ???????????? ????????? ??? ??? ????????????.');
      return;
    }
    if (!file.name.match(correctForm)) {
      alert(
        '????????? ????????? ???????????? ???????????????. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)'
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
        alert('?????? ?????? ???????????? ??????????????????.');
        return;
      }
      const res = await API.post('/post', JSON.stringify(postData), {
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
          ?????????
        </Header>
        <ConWrapStyle>
          <MyProfileImg src={profileImg} alt="??? ????????? ?????????" />
          <PostFormStyle>
            <TextAreaStyle
              type="text"
              placeholder="????????? ????????????"
              onChange={textChangeHandler}
            />
            {previewImgUrl && (
              <ImgWrapStyle>
                <PreviewImgWrapStyle>
                  <PreviewImg src={previewImgUrl} alt="????????? ????????????" />
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
