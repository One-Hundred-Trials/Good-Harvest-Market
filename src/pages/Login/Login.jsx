import React from 'react';
import {
  ContSectionStyle,
  ContTopDivStyle,
  LogoiImgStyle,
  DuckImgStyle,
  BtnFlexDivStyle,
  SNSFlexDivStyle,
  SNSImgStyle,
} from './LoginStyle';
import Button from '../../components/Button/Button';
import fullLogo from '../../assets/img/full-logo.png';
import duckFarm from '../../assets/img/duck-farm.png';
import kakao from '../../assets/img/kakako.png';
import google from '../../assets/img/google.png';
import facebook from '../../assets/img/facebook.png';

export default function Login() {
  const children = ['이메일로 로그인', '풍년마켓'];

  return (
    <ContSectionStyle>
      <ContTopDivStyle>
        <LogoiImgStyle src={fullLogo} alt="" />
        <DuckImgStyle src={duckFarm} alt="" />
      </ContTopDivStyle>
      <BtnFlexDivStyle>
        <Button size="lg">{children[0]}</Button>
        <Button size="lg">{children[1]}</Button>
      </BtnFlexDivStyle>
      <p>SNS계정으로 로그인하기</p>
      <SNSFlexDivStyle>
        <a>
          <SNSImgStyle src={kakao} alt="" />
          <p>카카오톡</p>
        </a>
        <a>
          <SNSImgStyle src={google} alt="" />
          <p>구글</p>
        </a>
        <a>
          <SNSImgStyle src={facebook} alt="" />
          <p>페이스북</p>
        </a>
      </SNSFlexDivStyle>
    </ContSectionStyle>
  );
}
