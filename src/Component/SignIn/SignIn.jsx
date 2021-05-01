import React from 'react';
import './SignIn.style.scss';
import FormInput from '../Form-Input/Form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(`error is present at SignIn component ${error}`)
        }
    }
    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an Account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' 
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required/>
                  
                    <FormInput type='password'
                     name='password'
                      value={this.state.password} 
                      handleChange={this.handleChange}
                      label='password'
                      required/>
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{'  '}</CustomButton>
                    </div>               
                </form>
            </div>
        )
    }
}
export default SignIn;