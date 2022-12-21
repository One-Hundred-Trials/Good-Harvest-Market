import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('auth')),
});

const accountAtom = atom({
  key: 'account',
  default: JSON.parse(localStorage.getItem('account')),
});

export { authAtom, accountAtom };
