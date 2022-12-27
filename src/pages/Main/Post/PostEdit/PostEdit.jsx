import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from '../PostUpload/PostUploadStyle';
import Header from '../../../../components/Header/Header';
import UploadFileBtn from '../../../../components/Button/UploadFileBtn/UploadFileBtn';

function PostEdit() {
  const auth = useRecoilValue(authAtom);
  const account = useRecoilValue(accountAtom);
  const { id } = useParams();
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const postData = {
    post: {
      content: text,
      image: selectedImg,
    },
  };
  const formData = new FormData();

  // 내 프로필 이미지 불러오기
  useEffect(() => {
    const GetMyProfile = async () => {
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
    GetMyProfile();
  }, []);

  // 기존 게시글 불러오기
  useEffect(() => {
    const GetPostData = async () => {
      try {
        const res = await API.get(`/post/${id}`, {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
        });
        console.log(res);
        console.log(res.data.post);
        const { post } = res.data;
        if (post.content) {
          setText(post.content);
        }
        if (post.image) {
          setSelectedImg(post.image);
        }
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
    GetPostData();
  }, []);

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

  // 게시글 수정 PUT
  const EditUploadHandler = async () => {
    try {
      if (!text && selectedImg.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
      }
      const res = await API.put(
        `/post/63a9510917ae666581226227`,
        JSON.stringify(postData),
        {
          headers: {
            Authorization: `Bearer ${auth}`,
            'Content-type': 'application/json',
          },
          data: postData,
        }
      );
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

  // 이미지 업로드
  const ChangeFileHandler = async (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setSelectedImg((prevState) => [...prevState, file.name]);
    formData.append('image', file);
    if (selectedImg.length > 0) {
      alert('1개 이하의 파일을 업로드 하세요.');
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
        setSelectedImg([...selectedImg]);
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
        go={isActive ? `/my_profile/${account}` : ''}
        id={id}
        onClick={EditUploadHandler}
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
            value={text}
          ></PostTextAreaStyle>
          <ImgWrapStyle>
            {imgUrl &&
              imgUrl.map((img, index) => (
                <ImgItemWrapStyle key={index} id={index}>
                  <ImgPreview src={img} alt="이미지 미리보기" />
                  <ImgDeleteBtn onClick={ImgDeleteHandler(index)} />
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

export default PostEdit;
