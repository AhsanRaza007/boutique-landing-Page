import React from 'react';
import styled from 'styled-components';
import {Star, StarsContainer} from "../Section4Helpers/BestDeal"




const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Righteous', 'cursive';
    width: 100%;

`
const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    p{
        background-color: #fff;
        position: absolute;
        bottom: 28px;
        left: 20.4px;
        font-size: 0.8rem;
        padding: 10px 20px;
        @media (min-width: 1000){
            left: 29.3;
            bottom: 38.6;
        }
        @media (min-width: 321px) and (max-width: 376px){
            left: 24.4px;
            bottom: 33px;
        }
        @media (min-width: 377px) and (max-width: 426px){
            left: 28px;
            bottom: 36.7px;
        }
        
    }
    img{
        width:100%;
    }
`


const ProductDetailContainer = styled.div`
    margin: 0 20.4px;
`

const Product = (props) => {
    return (
        <ProductWrapper>
            <ImgContainer>
                <img src={props.imgsrc} alt="product"/>
                <p>
                    {props.price}
                </p>
            </ImgContainer>
            <ProductDetailContainer>
                <StarsContainer>
                    {
                        [1, 2, 3, 4, 5].map((star, index)=><Star key={index}/>)
                    }
                </StarsContainer>
                <p>
                Lemon Green Woven Patola Saree With Banarasi Border
                </p>
            </ProductDetailContainer>
        </ProductWrapper>
    );
};

export default Product;