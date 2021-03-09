import React from 'react';
import styled from 'styled-components'


const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Righteous', 'cursive';
    
    p{
        font-size: 1rem !important;
        @media (max-width: 576px){
            font-size: 0.7rem !important;
        }
    }
    
`


const ItemButton = styled.button`
    background: none;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 100%;
    img{
        height: 120px;
        width: 120px;
        @media (max-width: 576px){
            height: 80px;
            width: 80px;
        }
    }

`




const Item = (props) => {
    return (
        <ItemWrapper>
            <ItemButton>
                <img src={props.src} alt=""/>
            </ItemButton>
            <p>
                {props.category}
            </p>
        </ItemWrapper>
    );
};



export default Item;