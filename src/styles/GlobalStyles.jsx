import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
    * {
      box-sizing: border-box;
    }
    :root {
      font-size: 62.5%;
      --main-green: #91ba2d;
      --point-green: #0a6d32;
      --light-green: #dfecab;
      --splash-bg-color: #f4fdcf;
      --main-grey-76: #767676;
      --sub-grey-C4: #c4c4c4;
      --light-grey-F2: #f2f2f2;
      --black: #151515;
      --white: #fdfffb;
    }
    body {
      min-height: 100vh;
      font-family: "Spoqa Han Sans Neo", "sans-serif";
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
    }
    button {
      border: none;
      padding: 0;
      background-color: inherit;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    input {
      font: inherit;
    }
    textarea {
      border: none;
      overflow: auto;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      resize: none;
    }
    .ir {
      position: absolute;
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
    }
    .wrap {
      width: 390px;
      margin: 0 auto;
    }
    .ellipsis {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`;

export default GlobalStyle;