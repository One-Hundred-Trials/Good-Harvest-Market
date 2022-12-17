import styled, { css } from 'styled-components';

const ProfileAccountStyle = styled.div`
  /* display: flex; */
  /* margin: ${(props) => (props.margin ? '0px' : '16px')}; */
  /* margin: 16px; */
  margin: ${(props) => props.margin};
  /* flex-direction: column; */
  text-align: ${(props) => props.align};
  p:first-child {
    font-weight: 700;
    font-size: ${(props) => (props.size === '1.4rem' ? '1.4rem' : '1.6rem')};
    /* margin-bottom: ${(props) => (props.marginbottom ? '2px' : '6px')}; */
    margin-bottom: ${(props) => props.namemarginbottom};
    /* margin-top: ${(props) => props.margintop}; */
    /* margin-bottom: 6px; */
  }
  p:last-child {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 14px;
    color: var(--main-grey-76);
  }
`;

export default ProfileAccountStyle;
