import React from 'react';
import Signup from '../../Component/Auth/Signup';

const SignupPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center mt-5">
      <div className='max-w-md md:max-w-2xl lg:max-w-2xl m-8 place-items-center'>
      <Signup />
    </div>
  </div>
  );
};

export default SignupPage;
