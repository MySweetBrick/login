import React, { useState } from 'react';
import Axios from 'axios';
import '../login/loginModal.css';
import Students from './images/Students.png';
import Teachers from './images/teacher.png';
import LoginForm from './loginForm';
import SigninForm from './signupForm';

function Modal(
    // { closeModal }
    ) {

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignin, setSignin] = useState(true);

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='modalMainContainer'>
                    <div className='leftContainer'>
                        <div className='imageContainer'>
                            <img id='studentImage' src={Students}></img>
                        </div>
                        <div className='ModalHeader'>
                            <h1>Students</h1>
                        </div>
                        <div className='switchContainer'>
                            <button id='loginButton' onClick={() => {
                                setOpenLogin(true);
                                setSignin(false);
                            }}
                            >LOG IN</button>
                            <button id='signupButton' onClick={() => {
                                setOpenLogin(false);
                                setSignin(true);
                            }}
                            >SIGN UP</button>
                        </div>
                        <div className='loginFormContainer'>
                            {openLogin && <LoginForm />}
                            {openSignin && <SigninForm />}
                        </div>
                    </div>
                    <div className='rightContainer'>

                        {/* <div className='closeButton'>
                            <button onClick={() => closeModal(false)}> X </button>
                        </div> */}
                        <div className='imageContainer'>
                            <img id='teacherImage' src={Teachers}></img>
                        </div>
                        <div className='ModalHeader'>
                            <h1>Teachers</h1>
                        </div>
                        <div className='switchContainer'>
                            <button id='loginButton' onClick={() => {
                                setOpenLogin(true);
                                setSignin(false);
                            }}
                            >LOG IN</button>
                            <button id='signupButton' onClick={() => {
                                setOpenLogin(false);
                                setSignin(true);
                            }}
                            >SIGN UP</button>
                        </div>
                        <div className='loginFormContainer'>
                        {openLogin && <LoginForm />}
                            {openSignin && <SigninForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;