import styled from 'styled-components';
import { Wrap } from '../../styles/GlobalStyles';

const ContSectionStyle = styled.section`
  ${Wrap}
  text-align: center;
  height: 100vh;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 15px;
  color: var(--main-grey-76);
  background-color: var(--splash-bg-color);
  position: relative;
`;

const LogoiImgStyle = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
`;

const DuckImgStyle = styled.img`
  position: absolute;
  bottom: 297px;
  right: 30px;
  width: 122px;
  height: 109px;
`;

const Div = styled.div`
  position: absolute;
  bottom: 0;
  background-color: var(--white);
  border-radius: 20px 20px 0px 0px;
  button:nth-child(1) {
    margin: 44px auto 8px;
  }
  button:nth-child(2) {
    margin-bottom: 33px;
  }
`;

const SNSImgStyle = styled.img`
  width: 18px;
  height: 18px;
`;

const SNSFlexDivStyle = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 13px auto 84px;
  a {
    display: flex;
    flex-direction: row;
    gap: 5px;
    :not(:nth-child(3))::after {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 12px;
      font-size: 1.2rem;
      margin: 0 12px;
      background-color: var(--sub-grey-C4);
    }
  }
`;

export {
  ContSectionStyle,
  LogoiImgStyle,
  DuckImgStyle,
  Div,
  SNSFlexDivStyle,
  SNSImgStyle,
};
