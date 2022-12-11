import React from 'react';
import styled from 'styled-components';
import Follow from '../../../../components/Follow/Follow';
import Profile from '../../../../components/Profile/Profile';
import { Wrap } from '../../../../styles/GlobalStyles';

const WrapContainer = styled.div`
  ${Wrap};
  text-align: center;
`;

export default function MyProfile() {
  return (
    <WrapContainer>
      <Profile />
      <Follow />
    </WrapContainer>
  );
}
