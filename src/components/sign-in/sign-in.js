import React, { useState } from "react";
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(
            emailSignInStart({ email, password })
        )
});

export default connect(null, mapDispatchToProps)(SignIn);