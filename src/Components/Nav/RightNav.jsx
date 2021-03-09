import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


const Button = styled.button``

const UL = styled.ul`
    list-style: none;
    flex-flow: row nowrap;
    text-decoration: none;
    display: flex;
    color: #fff;
    z-index: 99;
    li{
        padding: 0;

        a{
            text-decoration: none;
            color: #fff;
            padding: 20px 30px;
        }
        & .active{
            border-bottom: 5px solid #fff;
        }
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #000;
        position: fixed;
        top: 0;
        right: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        height: 100vh;
        width:300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li{
            margin: 20px 20px;
            
            & .active{
                   border-bottom: none;
                   font-weight: bolder;
            } 
            
        }
    }

`


const RightNav = (props) => {
    return (
        <UL open={props.open}>
            <li>
                <NavLink to='/home'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/products'>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to='/gallery'>
                    Gallery
                </NavLink>
            </li>
            <li>
                {
                    props.isLoggedIn 
                        ? <Button onClick={props.handleSignOut}>Sign Out</Button>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </li>
        </UL>
    );
}; 

export default RightNav;