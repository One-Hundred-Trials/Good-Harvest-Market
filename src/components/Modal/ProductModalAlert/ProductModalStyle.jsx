import React from 'react';
import styled from 'styled-components';

export const ModalContainerDiv = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  bottom: 0px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
`;

export const ModalUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 36px 0 10px;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 4px;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    background-color: var(--sub-grey-C4);
  }
  & > li {
    list-style: none;
  }
`;

export const ModalBtn = styled.button`
  width: 100%;
  padding: 14px 26px;
  border: none;
  background-color: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;
