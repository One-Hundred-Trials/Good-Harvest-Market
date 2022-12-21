import React, { useState } from 'react';
import Signup from './Signup';
import SignupUserProfile from './SignupUserProfile';

export default function Register() {
  const [isSignupValid, setIsSignupValid] = useState(false);
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
  });

  return (
    <>
      {isSignupValid ? (
        <SignupUserProfile signupForm={signupForm} />
      ) : (
        <Signup
          setIsSignupValid={setIsSignupValid}
          setSignupForm={setSignupForm}
          signupForm={signupForm}
        />
      )}
    </>
  );
}
