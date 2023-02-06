import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContSecStyle,
  HeaderStyle,
  DescriptStyle,
  InputFormStyle,
  BtnContainerStyle,
} from './SignupUserProfileStyle';
import Input from '../../components/common/Input/Input';
import UploadProfileImg from '../../components/UploadProfileImg/UploadProfileImg';
import Button from '../../components/common/Button/Button';
import basicProfile from '../../assets/img/basic-profile-50.png';
import postMyProfile from '../../api/ProfileSetting/postMyProfile';
import postImage from '../../api/ImgUpload/postImage';
import postAccountNameValid from '../../api/ProfileSetting/postAccountNameValid';

export default function SignupUserProfile(porps) {
  const [signupForm, setSignupForm] = useState({
    username: '',
    accountname: '',
    intro: '',
    profileImg: '',
  });
  const [imgFile, setImgFile] = useState([]);
  const [userNameError, setUserNameError] = useState('');
  const [accountNameError, setAccountNameError] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isAccountNameValid, setIsAccountNameValid] = useState(false);

  const navigate = useNavigate();

  const formData = new FormData();

  const UploadProfileImgHandler = async (e) => {
    formData.append('image', e.target.files[0]);
    const res = await postImage(formData);
    setImgFile(res[0].filename);
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setUserNameError();
  }, [signupForm.username]);

  useEffect(() => {
    setAccountNameError();
  }, [signupForm.accountname]);

  const UserNameHandler = () => {
    if (!signupForm.username) {
      setUserNameError('* 사용자 이름은 필수 입력사항입니다.');
      setIsUserNameValid(false);
    } else if (
      signupForm.username.length < 2 ||
      signupForm.username.length > 10
    ) {
      setUserNameError('* 사용자 이름은 2~10자 이내여야 합니다.');
      setIsUserNameValid(false);
    } else {
      setUserNameError('');
      setIsUserNameValid(true);
    }
  };

  const AccountNameHandler = async () => {
    const regex = /^[._a-zA-Z0-9]+$/gi;

    const accountNameData = {
      user: {
        accountname: signupForm.accountname,
      },
    };
    const res = await postAccountNameValid(accountNameData);
    if (!signupForm.accountname) {
      setAccountNameError('* 계정 ID는 필수 입력사항입니다.');
      setIsAccountNameValid(false);
    } else if (!regex.test(signupForm.accountname)) {
      setAccountNameError('* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.');
      setIsAccountNameValid(false);
    } else if (res.message === '이미 가입된 계정ID 입니다.') {
      setAccountNameError(`* ${res.message}`);
      setIsUserNameValid(false);
    } else if (res.message === '사용 가능한 계정ID 입니다.') {
      setAccountNameError('');
      setIsAccountNameValid(true);
    }
  };

  function arrayIsEmpty(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }
    return arr.length === 0;
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const userProfileImage =
      imgFile && !arrayIsEmpty(imgFile)
        ? `https://mandarin.api.weniv.co.kr/${imgFile}`
        : 'https://mandarin.api.weniv.co.kr/1672571236285.png';

    console.log(userProfileImage);

    const userInfo = {
      user: {
        username: signupForm.username,
        email: porps.signupForm.email,
        password: porps.signupForm.password,
        accountname: signupForm.accountname,
        intro: signupForm.intro,
        image: userProfileImage,
      },
    };
    if (isUserNameValid && isAccountNameValid) {
      const res = await postMyProfile(userInfo);
      console.log(res);
      navigate('/login');
    }
  };

  return (
    <ContSecStyle>
      <HeaderStyle>프로필 설정</HeaderStyle>
      <DescriptStyle>나중에 언제든지 변경할 수 있습니다.</DescriptStyle>
      <InputFormStyle onSubmit={SubmitHandler}>
        <UploadProfileImg
          src={
            imgFile && !arrayIsEmpty(imgFile)
              ? `https://mandarin.api.weniv.co.kr/${imgFile}`
              : basicProfile
          }
          name="proflieImg"
          value={signupForm}
          onChange={UploadProfileImgHandler}
        />
        <Input
          label="사용자 이름"
          type="text"
          name="username"
          placeholder="2~10자 이내여야 합니다."
          min="2"
          max="10"
          required="required"
          value={signupForm}
          onBlur={UserNameHandler}
          onChange={inputChangeHandler}
          message={userNameError}
        ></Input>
        <Input
          label="계정 ID"
          type="text"
          name="accountname"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          required="required"
          value={signupForm}
          onBlur={AccountNameHandler}
          onChange={inputChangeHandler}
          message={accountNameError}
        ></Input>
        <Input
          label="소개"
          type="text"
          name="intro"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          value={signupForm}
          onChange={inputChangeHandler}
        ></Input>

        <BtnContainerStyle>
          <Button
            variant={
              signupForm.username && signupForm.accountname
                ? 'abled'
                : 'disabled'
            }
            disabled={!signupForm.username || !signupForm.accountname}
          >
            {'풍년마켓 시작하기'}
          </Button>
        </BtnContainerStyle>
      </InputFormStyle>
    </ContSecStyle>
  );
}
