import React from 'react';
import './Sign-in-and-Sign-up.scss';
import SignUp from '../../Component/Sign-Up/Sign-Up';
import SignIn from  '../../Component/SignIn/SignIn';
const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
        </div>
)
export default SignInAndSignUp;