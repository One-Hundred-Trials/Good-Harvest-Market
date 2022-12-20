import { atom } from 'recoil';

// const authAtom = atom({
//   key: 'auth',
//   default: JSON.parse(localStorage.getItem('user')),
// });

const userAtom = atom({
  key: 'user',
  default: JSON.parse(localStorage.getItem('userInfo')),
});

export default userAtom;
