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
  ImgItemWrapStyle,
  ImgPreview,
  ImgDeleteBtn,
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
      // 이미지 미리보기
      const previewImg = () => {
        if (file === undefined) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다 (사진을 올리고 지우고 다시 같은 사진을 올리면 그 값이 남아있다?)
        e.target.value = '';
        fileReader.onload = () => {
          setImgUrl((ImgUrl) => [...ImgUrl, fileReader.result]);
        };
      };
      // 포스트된 이미지 보기
      if (res.data.message === '이미지 파일만 업로드가 가능합니다.') {
        alert(
          '이미지 파일만 업로드가 가능합니다. 올바른 형식의 파일을 넣어주세요. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)'
        );
      } else {
        // console.log(res.data.filename);
        setSelectedImg([
          ...selectedImg,
          `https://mandarin.api.weniv.co.kr/${res.data.filename}`,
        ]);
        previewImg(file);
      }
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

  // 미리보기 이미지 삭제
  const ImgDeleteHandler = (targetIndex) => {
    // img.index가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다
    // targetIndex는 삭제할 대상의 index이고 img.index가 targetIndex와 같은 것을 삭제한다
    const imgArr = selectedImg.filter((img) => img.index !== targetIndex);
    setSelectedImg([...imgArr]);
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
            {imgUrl &&
              imgUrl.map((img, index) => (
                <ImgItemWrapStyle key={index} id={index}>
                  <ImgPreview src={img} alt="이미지 미리보기" />
                  <ImgDeleteBtn onClick={() => ImgDeleteHandler(index)} />
                </ImgItemWrapStyle>
              ))}
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
