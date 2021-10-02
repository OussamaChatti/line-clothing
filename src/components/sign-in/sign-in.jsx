 import React from 'react';
 import { connect } from 'react-redux';

 import CustomButton from '../custom-button/custom-button.jsx';
 import FormInput from '../form-input/form-input.jsx';
 
 import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions.js';

 import {SignInContainer,TitleContainer,ButtonsContainer} from './sign-in.styles';

 class SignIn extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {emailSignInStart} = this.props;
        const {email,password} = this.state;

        emailSignInStart(email,password);
    }

      handlechange = e => {
        const {value,name} = e.target;

        this.setState({[name]:value});
    }

    render(){
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <TitleContainer>Already have an account?</TitleContainer>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    handlechange={this.handlechange}
                    name='email'
                    type='email'
                    required
                    value={this.state.email}
                    label='Email '
                    />
                    <FormInput
                    handlechange={this.handlechange}
                    name='password'
                    type='password'
                    required
                    value={this.state.password}
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
 }

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);
