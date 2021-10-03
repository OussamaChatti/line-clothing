import React,{useState} from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.jsx';
import FormInput from '../form-input/form-input.jsx';

import { signUpStart } from '../../redux/user/user.actions.js';

import {SignUpContainer,TitleContainer,ButtonContainer} from './sign-up.styles';

const SignUp = ({signUpStart}) => {
    const [signUpCredentials,setSignUpCredentials] = useState({displayName:'',email:'',password:'',confirmPassword:''});
    const {displayName,email,password,confirmPassword} = signUpCredentials;

    const handleSubmit = async event =>
    {
        event.preventDefault();
        if (password!== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        signUpStart({displayName,email,password});
    };

    const handleChange = event =>
    {
        const {name,value} = event.target;
        setSignUpCredentials({...signUpCredentials,[name]:value});
    };

    return (
        <SignUpContainer>
            <TitleContainer>Don't have an account?</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                />
                <ButtonContainer>
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </ButtonContainer>
            </form>
        </SignUpContainer>
    );
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);
