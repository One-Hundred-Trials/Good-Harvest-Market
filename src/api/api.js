import axios from 'axios';

const API = axios.create({
  BASE_URL: 'https://mandarin.api.weniv.co.kr',
});

async function login(form, user, setUser) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const reqPath = '/user/login';
  const loginData = {
    user: {
      email: form.email,
      password: form.pw,
    },
  };
  const reqUrl = url + reqPath;
  const res = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  const json = await res.json();
  // console.log(json, '제이손입니다');
  //   console.log(json);
  //   const { token } = json.user;
  //   localStorage.setItem('user', JSON.stringify(token));
  localStorage.setItem('userInfo', JSON.stringify(json));

  //   console.log(json);
  setUser(json);
  //   setAuth(token);
}

async function checktoken() {
  try {
    const response = await axios.get(
      'https://mandarin.api.weniv.co.kr/user/checktoken',
      {
        headers: {
          Authorization: `
          Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZjYTkwMTdhZTY2NjU4MWM3NGU4NSIsImV4cCI6MTY3NjYzMjY4MiwiaWF0IjoxNjcxNDQ4NjgyfQ.Ra9DKtKwzXgovjavrtzrvbm81A9_uy2MzIvEhddZzDg
          `,
          'Content-type': 'application/json',
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export { login, checktoken };
