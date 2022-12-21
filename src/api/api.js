import axios from 'axios';

async function login(form, auth, setAuth) {
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
  const { token } = json.user;
  const { accountname } = json.user;
  console.log(token);
  console.log(accountname);
  localStorage.setItem('auth', JSON.stringify(token));
  localStorage.setItem('account', JSON.stringify(accountname));
  setAuth(token);
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
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export { login, checktoken };
