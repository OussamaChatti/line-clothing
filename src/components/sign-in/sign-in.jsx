 import React from 'react';
 import './sign-in.scss';
 import CustomButton from '../custom-button/custom-button.jsx';
 import FormInput from '../form-input/form-input.jsx';

 class SignIn extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({email:'',password:''});
    }

      handleChange = e => {
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
                    handleChange={this.handleChange}
                    name='email'
                    type='email'
                    required
                    value={this.state.email}
                    label='Email '
                    />
                    <FormInput
                    handleChange={this.handleChange}
                    name='password'
                    type='password'
                    required
                    value={this.state.password}
                    label='Password '
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );
    }
 }

export default SignIn;
