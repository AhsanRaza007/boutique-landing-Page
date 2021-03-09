import React from 'react';
import Container from '../Styled-Components/Container';
import Button from '../Styled-Components/Button';
import styled from 'styled-components';



const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 576px){
        flex-direction: column;
        align-items: center;
    }

`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: 25px;
    margin-top: 15px;
    margin-bottom: 15px; 
    justify-content: space-evenly;
    p{
        &:nth-child(1){
            font-family: 'Righteous', 'cursive';
            font-size: 2.5rem;

            @media (max-width: 576px){
                font-size: 2rem;
            }
            @media (max-width: 786px){
                font-size: 2rem;
            }
        }
        &:nth-child(2){
            font-family: 'Roboto', 'sans serif';
            line-height: 35px;

            @media (min-width: 1400px){
                line-height: 60px;
                font-size: 1.5rem;
            }

            
            @media (max-width: 786px){
                line-height: 25px;
                margin-right: 25px;
                font-size: 0.9rem;
            }
            @media (max-width: 576px){
                width: 100%;
                margin-right: 0;
                margin-top: 10px;
            }
        }

    }
    button{
        @media (max-width: 576px){
            display: none;
        }
    }
    @media (max-width: 786px){
        justify-content: space-between;
    }
    @media (max-width: 576px){
        width: 100%;
        height: fit-content;
        margin-left: 0px;
        margin-top: 0;
        padding: 0 20px;
        justify-content: space-evenly;
        /* margin-right: 25px; */
    }
    
    
`


const RightContainer = styled.div`
    display: flex;
    width: 60%;
    align-items: baseline;
    position: relative;
    img{
        height: auto;
        &:nth-child(1){
            width: 50%;
            @media (max-width: 576px){
                width: 100%;
            }
        }
        &:nth-child(2){
            width: 50%;
            @media (max-width: 576px){
                position: absolute;
                transform: translate(50px, 100%);
                width: 100%;
            }
        }
    }
    button{
        display: none;
        @media (max-width: 576px){
            display: block;
            margin-top: 30px;
        }
    }

    @media (max-width: 576px){
        width: 100%;
        overflow: hidden;
        flex-direction: column;
        align-items: center;

        /* margin-left: 25px; */
    }
`

const Section2 = () => {
    return (
        <Container>
            <SectionContainer>
                <LeftContainer>
                <p>To all the Women</p>
                <p>
                    Sarees are like indian womens, so clever. From business meetings to first nights, from political talks to red carpets, from college farewells to Indian kitchens, they actually have many avatars.
                </p>
                <Button pill>
                    view products
                </Button>
                </LeftContainer>
                <RightContainer>
                    <img src="/images/section2_image1.png" alt="show"/>
                    <img src="/images/section2_image2.png" alt="show"/>
                    <Button pill>
                        view products
                    </Button>
                </RightContainer>
                
            </SectionContainer>
        </Container>
    );
};

export default Section2;