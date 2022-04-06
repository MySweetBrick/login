import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    MiddleContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLink,
    NavbarLinkContainer,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    LogInLink,
    LanguageButton,
    LangContainer,
    LogInContainer,
} from '../styles/Navbar.styles';
import LogoImg from '../images/Home/Star Logo 07-2.png';
import NZ from '../images/Home/NZ Flag.png';
import tinoRangatiratanga from '../images/Home/Maori flag.png';
import Modal from './login/loginModal';



function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false);
    // const [openModal, setOpenModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);


    
    // console.log(localStorage.getItem("loggedIn"));

    useEffect(() => {
        // console.log(localStorage.getItem("loggedIn"));
        setLoggedIn(localStorage.getItem("loggedIn"))
        // console.log(loggedIn)
    }, );
    

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>
                <MiddleContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/' >Home</NavbarLink>
                        <NavbarLink to='/features' >Features</NavbarLink>
                        <NavbarLink to='/teachers' >Teachers</NavbarLink>
                        <OpenLinksButton onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}
                        >
                            {extendNavbar ? <> &#10005;</> : <> &#8801; </>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </MiddleContainer>
                <RightContainer>

                    <LangContainer>LANG
                        <LanguageButton src={NZ} ></LanguageButton>
                        <LanguageButton src={tinoRangatiratanga} ></LanguageButton>
                    </LangContainer>

                    {/* <LogInContainer>
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            <LogInLink to='/login' 
            // onClick={() => {
            //                 setOpenModal(true);
            //             }}
                        >Register | Log In</LogInLink>
            </LogInContainer> */}

                    {!loggedIn ? (
                             <LogInContainer>
                             <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                             <LogInLink to='/login'
                             // onClick={() => {
                             //                 setOpenModal(true);
                             //             }}
                             >Register | Log In</LogInLink>
                         </LogInContainer>
                        ) : (
                            
                            <LogInContainer>Hello</LogInContainer>
                    )}

                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to='/' >Home</NavbarLinkExtended>
                    <NavbarLinkExtended to='/features' >Features</NavbarLinkExtended>
                    <NavbarLinkExtended to='/teachers' >Teachers</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
            {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        </NavbarContainer>
    );
}

export default Navbar;