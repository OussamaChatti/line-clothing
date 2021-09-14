 import React from 'react';
 
 import SignIn from '../../components/sign-in/sign-in.jsx';
 import SignUp from '../../components/sign-up/sign-up.jsx';

 import './sign-in-sign-up.scss';

const SignInSignUp = props => (
    <div className='sign-in-sign-up'>
    <SignIn className='sign-in'/>
    <SignUp className='sign-up'/>
    </div>
);

export default SignInSignUp;
