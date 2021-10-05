import React,{useState} from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.jsx';
import FormInput from '../form-input/form-input.jsx';

import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions.js';

import {SignInContainer,TitleContainer,ButtonsContainer} from './sign-in.styles';

const SignIn = ({emailSignInStart,googleSignInStart}) => {
    const [userCredentials,setCredentials] = useState({email:'',password:''});
    const {email,password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email,password);
    }

    const handlechange = e => {
        const {value,name} = e.target;

        setCredentials({...userCredentials,[name]:value});
    }

    return (
        <SignInContainer>
            <TitleContainer>Already have an account?</TitleContainer>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                handlechange={handlechange}
                name='email'
                type='email'
                required
                value={email}
                label='Email '
                />
                <FormInput
                handlechange={handlechange}
                name='password'
                type='password'
                required
                value={password}
                label='Password '
                />
                <ButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}


const mapDispatchToProps = (dispatch) => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);
