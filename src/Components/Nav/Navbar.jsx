import React from 'react';
import Burger from './Burger';
import styled from 'styled-components';



const Nav = styled.nav`
    width: 100%;
    /* height: 55px; */
    height: fit-content;
    border-bottom: 1px solid #fff;
    padding: 0px 20px;
    background-color: #000;
    font-family: 'Righteous', cursive;
`

const NavContainer = styled.div`
    max-width:100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: relative;
    margin: 0 auto;
    .logo{
        padding: 21px 0px;
        font-size: 1.3rem;
        color: #fff;
    }
    @media only screen and (min-width: 576px){
        max-width: 520px;
    }
    @media only screen and (min-width: 768px){
        max-width: 700px
    }
    @media only screen and (min-width: 992px){
        max-width: 940px
    }
    @media only screen and (min-width: 1200px){
        max-width: 1120px;
    }
    @media only screen and (min-width: 1400px){
        max-width: 1300px
    }
    
`;



const Navbar = (props) => {
    return (
        
        <Nav>
            <NavContainer>
                <div className='logo'>
                    Logo
                </div>
                <Burger isLoggedIn={props.isLoggedIn} handleSignOut={props.handleSignOut}/>
            </NavContainer>
        </Nav>
        
    );
};

export default Navbar;