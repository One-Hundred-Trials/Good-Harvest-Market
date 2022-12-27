import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../../../_state/auth';
import UploadProfileImg from '../../../../../components/UploadProfileImg/UploadProfileImg';
import Input from '../../../../../components/Input/Input';
import Header from '../../../../../components/Header/Header';
import InputFormStyle from '../ProfileEdit/ProfileEditStyle';

export default function ProfileEdit() {
  const auth = useRecoilValue(authAtom);
  const [username, setUsername] = useState('');
  const [accountname, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          'https://mandarin.api.weniv.co.kr/user/myinfo',
          {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          }
        );

        const data = res.data.user;
        console.log(data);
        setUsername(data.username);
        setAccountName(data.accountname);
        setIntro(data.intro);
        setProfileImg(data.image);
      } catch (err) {
        console.error(err);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <Header size="m" variant="able">
        저장
      </Header>
      <InputFormStyle>
        <UploadProfileImg src={profileImg} />
        <Input
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          name="username"
          value={username}
        ></Input>
        <Input
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          name="accountname"
          value={accountname}
        ></Input>
        <Input
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          name="intro"
          value={intro}
        ></Input>
      </InputFormStyle>
    </>
  );
}
