
import styled from 'styled-components';


const Button = styled.button`
    width: 200px;
    background-color: black;
    color: white;
    font-family: 'Righteous', 'cursive';
    font-size: 0.7rem;
    padding: 0.8rem 2rem;
    border-radius: ${props=> props.pill  ? '40px' : '5px'};
    outline: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: translateY(-3px);
    }
    &:active{
        transform: scale(0.8);
    }
`



export default Button;