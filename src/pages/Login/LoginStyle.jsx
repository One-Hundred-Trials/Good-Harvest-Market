import styled from 'styled-components';
import { GlobalStyle, Wrap } from '../../styles/GlobalStyles';

const ContSectionStyle = styled.section`
  ${Wrap}
  text-align: center;
  height: 100vh;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 15px;
  color: var(--main-grey-76);
`;

const ContTopDivStyle = styled.div`
  position: relative;
  height: 66%;
  background-color: var(--splash-bg-color);
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
  bottom: 0;
  right: 30px;
  width: 122px;
  height: 109px;
`;

const BtnFlexDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 44px 34px;
`;

const SNSImgStyle = styled.img`
  width: 18px;
  height: 18px;
  /* background-image: ${(props) =>
    `url(${`../../assets/img/${props.src}.png`})`}; */
`;

const SNSFlexDivStyle = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 6px auto;
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
  ContTopDivStyle,
  LogoiImgStyle,
  DuckImgStyle,
  BtnFlexDivStyle,
  SNSFlexDivStyle,
  SNSImgStyle,
};
