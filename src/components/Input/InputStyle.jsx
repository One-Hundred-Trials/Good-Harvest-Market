import styled from 'styled-components';

const ContDivStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled.input`
  width: 322px;
  height: 33px;
  border: transparent;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 16px;
  outline: none;
  &:focus {
    border-bottom: 2px solid var(--point-green);
  }
`;

export { InputStyle, ContDivStyle };
