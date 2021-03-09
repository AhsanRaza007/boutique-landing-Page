import React, { useContext } from 'react';
import styled from 'styled-components'
import {ArrowButtonContext} from './Carousel'


const SContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.65);
    }
`
const STextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 500px; */
    position: absolute;
    color: #fff;
    white-space: 'wrap';
    left: 100px;
    top: 80px;
    /* filter: drop-shadow(-1px 1px 1px #000); */
    font-family: 'Righteous', 'cursive';
    p{
        font-size: 0.8rem;
        font-family: 'Roboto';
        font-weight: 300;
    }
    @media (min-width: 1600px){
        left: 700px;
        top: 200px;
    }
    @media (max-width: 768px){
        left: 50px;
        top: 100px;
    }
    @media (max-width: 576px){
        left: 10px;
        top: 40px;
    }
`

const SubHeroText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin-top: 20px;

    div{
        display: flex;
        margin-top: 10px;
    }
    button{
        border: none;
        padding: 0;
        margin: 0 10px;
        outline: none;
        background: none;
        
        svg{
            fill: white;
            transition: all 0.3s ease-in-out;
            &:hover{
                transform: translateY(-3px);
            }
        }   
    }

    @media (max-width: 576px){
        flex-direction: column;
    }
`

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: 3.5rem;
        @media (max-width: 768px){
            font-size: 3rem;
        }
    }
`



const Slide = (props) => {
    const {goLeft, goRight} = useContext(ArrowButtonContext);
    return (
        
        <SContainer>
            <img src={props.imgsrc} alt="img-alt"/>
            
                <STextWrapper>
                    <HeroText>
                        <h1>
                            A modern boutique
                        </h1>
                        <h1>
                            with vintage
                        </h1>
                        <h1>
                            charm
                        </h1>
                    </HeroText>
                    <SubHeroText>
                        <p>
                            “A saree is not simply an outfit. It’s a power, an identity, a language.”
                        </p>
                        <div>
                            <button onClick={goLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 256 256" width="32"><path d="M203.3 128c0 3.5-2.9 6-6.4 6H74.9l47.1 46c2.5 2.5 2.6 6.6 0.1 9.1 -1.3 1.3-2.9 2-4.6 2 -1.6 0-3.2-0.6-4.5-1.8l-58.5-56.7c-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.4 1.9-4.6l58.5-56.7c2.5-2.5 6.6-2.4 9.1 0.1 2.5 2.5 2.4 6.8-0.1 9.3L74.9 122h122C200.4 122 203.3 124.5 203.3 128zM256 128C256 57.4 198.6 0 128 0S0 57.4 0 128s57.4 128 128 128S256 198.6 256 128zM243.2 128c0 63.5-51.7 115.2-115.2 115.2S12.8 191.5 12.8 128 64.5 12.8 128 12.8 243.2 64.5 243.2 128z"/></svg> 
                            </button>
                            <button onClick={goRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 256 256" width="32"><path d="M52.7 128c0-3.5 2.9-6 6.4-6h122l-47.1-46c-2.5-2.5-2.6-6.6-0.1-9.1 1.3-1.3 2.9-2 4.6-2 1.6 0 3.2 0.6 4.5 1.8l58.5 56.7c1.2 1.2 1.9 2.9 1.9 4.6s-0.7 3.4-1.9 4.6l-58.5 56.7c-2.5 2.5-6.6 2.4-9-0.1 -2.5-2.5-2.4-6.8 0.1-9.3L181.1 134H59.1C55.6 134 52.7 131.5 52.7 128zM0 128c0 70.6 57.4 128 128 128s128-57.4 128-128S198.6 0 128 0 0 57.4 0 128zM12.8 128C12.8 64.5 64.5 12.8 128 12.8S243.2 64.5 243.2 128 191.5 243.2 128 243.2 12.8 191.5 12.8 128z"/></svg>
                            </button>
                        </div>
                        
                    </SubHeroText>
                </STextWrapper>
            
        </SContainer>
    );
};

export default Slide;