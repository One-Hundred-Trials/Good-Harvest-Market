import styled from 'styled-components';
import { ConWrap } from 'styles/GlobalStyles';

const ChatListWrapStyle = styled.ul`
  ${ConWrap}
  padding: 24px 16px;
  & > li + li {
    margin-top: 23px;
  }
`;

export default ChatListWrapStyle;
