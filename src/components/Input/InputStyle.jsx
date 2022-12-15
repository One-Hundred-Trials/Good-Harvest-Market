import styled from 'styled-components';

const ContDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 1.2rem;
  }
`;

const InputStyle = styled.input`
  width: 322px;
  height: 33px;
  border: transparent;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 16px;
  outline: none;
  font-size: 1.4rem;
  &:focus {
    border-bottom: 2px solid var(--point-green);
  }
  &::placeholder {
    color: var(--sub-grey-C4);
  }
`;

export { InputStyle, ContDivStyle };
