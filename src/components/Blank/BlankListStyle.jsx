import styled from 'styled-components';

export const BlankContDivStyle = styled.div`
  position: absolute;
  top: 30%;
  padding: 32px 60px;
  text-align: center;
`;

export const BlankImgStyle = styled.img`
  width: ${(props) => props.width};
  margin-bottom: 18px;
`;

export const BlankTextStyle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--main-grey-76);
`;
