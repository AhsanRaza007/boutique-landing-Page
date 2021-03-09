import React from 'react';
import styled from 'styled-components'


const DealsCard = styled.div`
    width: 300px;
    height: 200px;
    padding: 1.5rem;
    z-index: 10;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Righteous', 'cursive';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p{
        margin: 10px 0;

        &:nth-child(1){

        }
        &:nth-child(2){
            color: grey;
        }
        &:nth-child(3){
            
        }
        &:nth-child(4){
            font-size: 0.8rem;
        }
        &:nth-child(5){
            font-size: 1rem;
        }
        @media (min-width: 1300px){
            font-size: 1.5rem;
        }
        @media (max-width: 768px){
            margin: 5px 0;
        }
    }

    

    @media (min-width: 1300px){
        width: 450px;
        height: 300px;
    }
    
    

    @media (max-width: 576px) {
        transform: translate(-50%, -100%);
    }
    @media (max-width: 350px){
        transform: translate(-50%, -87%);
    }
   
`

const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    svg{
        margin: 0 10px;
        &:first-child{
            margin-left: 0;
        }

        &:last-child{
            margin-right: 0;
        }

    }
`



const Star = () =>{
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z" fill="black"/>
        </svg>

    )
}


const BestDeal = () => {
    return (
        <DealsCard>
            <p>
                Best Deal
            </p>
            <p>
                Sea green Handloom Saree
            </p>
            <StarsContainer>
                {
                    [1, 2, 3, 4, 5].map((star, index)=> <Star key={index}/>)
                }
            </StarsContainer>
            <p>
                ₹ 5,000
            </p>
            <p>
                “ six yards of pure beauty! ”
            </p>
        </DealsCard>
    );
};

export default BestDeal;
export {Star, StarsContainer};