import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('user')),
});

export default authAtom;
