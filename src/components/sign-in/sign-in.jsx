 import React from 'react';
 import './sign-in.scss';
 import CustomButton from '../custom-button/custom-button.jsx';
 import FormInput from '../form-input/form-input.jsx';
 import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js';


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
            <div className='sign-in'>
                <h1>Already have an account?</h1>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
 }

export default SignIn;
