import styled from 'styled-components';

const ProfileAccountStyle = styled.div`
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  p:first-child {
    font-weight: 700;
    font-size: ${(props) => (props.size === '1.4rem' ? '1.4rem' : '1.6rem')};
    margin-bottom: ${(props) => props.namemarginbottom};
  }
  p:last-child {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 14px;
    color: var(--main-grey-76);
  }
`;

export default ProfileAccountStyle;
