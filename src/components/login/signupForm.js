import React, { useState } from 'react';
import Axios from 'axios';

function SigninForm() {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/user/register", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <>
            <div className='SigninHighlight'></div>
            <div className='loginFormContainer'>
                <input className='signinForm' type="text" placeholder="  Full Name" 
                onChange={(e) => 
                setUsernameReg(e.target.value)
                }
                /> <br />
                <input className='signinForm' type="text" placeholder="  Email Address" 
                onChange={(e) => 
                    setEmailReg(e.target.value)
                    }
                /> <br />
                <input className='signinForm' type="password" placeholder="  Password" 
                onChange={(e) => 
                    setPasswordReg(e.target.value)
                    }
                /> <br />
                <input className='signinForm' type="password" placeholder="  Confirm Password"
                
                /> <br />

                <button id='modalButton' onClick={register}>Sign up</button>
            </div>
        </>
    );
}

export default SigninForm;