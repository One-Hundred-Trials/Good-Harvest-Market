import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '_state/auth';
import MetaDatas from 'components/MetaDatas/MetaDatas';
import UploadProfileImg from 'components/UploadProfileImg/UploadProfileImg';
import Input from 'components/common/Input/Input';
import Header from 'components/common/Header/Header';
import { baseUrl } from 'api/api';
import postImage from 'api/ImgUpload/postImage';
import getMyProfile from 'api/Profile/getMyProfile';
import postAccountNameValid from 'api/ProfileSetting/postAccountNameValid';
import updateMyProfile from 'api/Profile/updateMyProfile';
import InputFormStyle from './ProfileEditStyle';

export default function ProfileEdit() {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [prevProfileImg, setPrevProfileImg] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [accountNameError, setAccountNameError] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isAccountNameValid, setIsAccountNameValid] = useState(false);

  const navigateToMyProfile = () => {
    navigate(`/my_profile/${accountName}`);
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const UserNameHandler = () => {
    if (!userName) {
      setUserNameError('* 사용자 이름은 필수 입력사항입니다.');
      setIsUserNameValid(false);
    } else if (userName.length < 2 || userName.length > 10) {
      setUserNameError('* 사용자 이름은 2~10자 이내여야 합니다.');
      setIsUserNameValid(false);
    } else {
      setUserNameError('');
      setIsUserNameValid(true);
    }
  };

  const accountNameChangeHandler = (e) => {
    setAccountName(e.target.value);
  };

  const AccountNameHandler = async (e) => {
    const regex = /^[._a-zA-Z0-9]+$/gi;

    if (!accountName) {
      setAccountNameError('* 계정 ID는 필수 입력사항입니다.');
      setIsAccountNameValid(false);
    } else if (!regex.test(accountName)) {
      setAccountNameError('* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.');
      setIsAccountNameValid(false);
    }
    const accountNameData = {
      user: {
        accountname: accountName,
      },
    };
    const res = await postAccountNameValid(accountNameData);
    if (res.message === '이미 가입된 계정ID 입니다.') {
      setAccountNameError(`* ${res.message}`);
      setIsUserNameValid(false);
    } else if (res.message === '사용 가능한 계정ID 입니다.') {
      setAccountNameError('');
      setIsAccountNameValid(true);
    }
  };

  const introChangeHandler = (e) => {
    setIntro(e.target.value);
  };

  useEffect(() => {
    setUserNameError();
  }, [userName]);

  useEffect(() => {
    setAccountNameError();
  }, [accountName]);

  const formData = new FormData();

  const uploadImgHandler = async (e) => {
    const productImage = e.target.files[0];
    formData.append('image', productImage);
    const res = await postImage(formData);
    const imgUrl = `${baseUrl}/${res[0].filename}`;
    setProfileImg(imgUrl);
    setPrevProfileImg(imgUrl);
  };

  useEffect(() => {
    const getProfile = async () => {
      const res = await getMyProfile();
      const data = res.user;

      setUserName(data.username);
      setIsUserNameValid(true);
      setAccountName(data.accountname);
      setIsAccountNameValid(true);
      setIntro(data.intro);
      setPrevProfileImg(data.image);
      setProfileImg(data.image);
    };
    getProfile();
  }, []);

  const editProfileHandler = async () => {
    const userInfo = {
      user: {
        username: userName,
        accountname: accountName,
        intro,
        image: profileImg,
      },
    };
    if (isUserNameValid && isAccountNameValid) {
      const res = await updateMyProfile(userInfo);
      console.log('update res', res);
      alert('사용자 정보가 정상적으로 수정되었습니다.');
      localStorage.setItem('account', JSON.stringify(accountName));
      navigateToMyProfile();
    } else {
      alert('사용자 정보를 형식에 맞게 입력해주세요.');
    }
  };

  return (
    <>
      <MetaDatas
        title={'내 정보 수정'}
        desc={'풍년마켓 내 정보 수정하기'}
        pageURL={'/profile_edit'}
      />
      <Header size="m" variant="able" onClick={editProfileHandler}>
        저장
      </Header>
      <InputFormStyle>
        <UploadProfileImg
          src={prevProfileImg}
          name="proflieImg"
          onChange={uploadImgHandler}
        />
        <Input
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          name="username"
          getValue={userName}
          onChange={userNameChangeHandler}
          onBlur={UserNameHandler}
          message={userNameError}
        ></Input>
        <Input
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          name="accountname"
          getValue={accountName}
          onChange={accountNameChangeHandler}
          onBlur={AccountNameHandler}
          message={accountNameError}
        ></Input>
        <Input
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          name="intro"
          getValue={intro}
          onChange={introChangeHandler}
        ></Input>
      </InputFormStyle>
    </>
  );
}
