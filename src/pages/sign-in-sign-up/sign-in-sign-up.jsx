 import React from 'react';
 
 import SignIn from '../../components/sign-in/sign-in.jsx';
 import SignUp from '../../components/sign-up/sign-up.jsx';

 import {SignInSignUpContainer} from './sign-in-sign-up.styles';

const SignInSignUp = props => (
    <SignInSignUpContainer>
    <SignIn className='sign-in'/>
    <SignUp className='sign-up'/>
    </SignInSignUpContainer>
);

export default SignInSignUp;
