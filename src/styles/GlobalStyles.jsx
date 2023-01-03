import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 700;
      src: local('Spoqa Han Sans Neo Bold'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.otf') format('opentype'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 500;
      src: local('Spoqa Han Sans Neo Medium'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.otf') format('opentype'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 400;
      src: local('Spoqa Han Sans Neo Regular'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.otf') format('opentype'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
      url('../assets/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2');
    }

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
      --black: #000;
      --white: #fff;
      --bg-color: #E5E5E5;
    }
    body {
      font-family: "Spoqa Han Sans Neo", "sans-serif";
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
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
      font: inherit;
    }
`;

export const PageWrap = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConWrap = css`
  width: 390px;
  flex-grow: 1;
  background-color: var(--white);
  box-shadow: -1px 0 20px -1px #f2f2f2, 1px 0 20px -1px #f2f2f2;
`;

export const Wrap = css`
  width: 390px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--white);
  box-shadow: -1px 0 30px -1px #f2f2f2, 1px 0 30px -1px #f2f2f2; ;
`;

export const IR = css`
  position: absolute;
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const Ellipsis = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
