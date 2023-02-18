import styled from 'styled-components';

export const ProfileContImg = styled.div`
  position: relative;
  flex-shrink: 0;
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

export const ProfileImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
