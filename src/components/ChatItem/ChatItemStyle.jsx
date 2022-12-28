import styled from 'styled-components';

export const ChatContainerStyle = styled.div`
  display: flex;
  padding: 9px 80px 0px 4px;
  img {
    width: 42px;
    height: 42px;
    margin: 0 12px;
  }
`;

export const MessageContainerStyle = styled.div`
  background-color: #fff;
  border-radius: 0 10px 10px 10px;
  border: 1px solid var(--sub-grey-C4);
  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    padding: 12px;
  }
`;

export const TimeStyle = styled.span`
  align-self: flex-end;
  flex-shrink: 0;
  padding-left: 6px;
  color: --var(--main-grey-76);
`;
