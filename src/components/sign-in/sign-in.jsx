 import React from 'react';

 import CustomButton from '../custom-button/custom-button.jsx';
 import FormInput from '../form-input/form-input.jsx';
 
 import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js';

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

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(err){
            console.log(err);
        }
    }

      handlechange = e => {
        const {value,name} = e.target;

        this.setState({[name]:value});
    }

    render(){
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
 }

export default SignIn;
