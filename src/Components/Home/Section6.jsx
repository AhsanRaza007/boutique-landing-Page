import React from 'react';
import styled from 'styled-components';
import Button from '../Styled-Components/Button';
import Container from '../Styled-Components/Container';


const SectionContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;

    @media (min-width: 1px) and (max-width: 321px){
        height: 550px;
    }

    @media (min-width: 322px ) and (max-width: 376px){
        height: 650px;
    }

    @media (min-width: 377px ) and (max-width: 577px){
        height: 750px;
    }
    @media (min-width: 577px ) and (max-width: 700px){
        height: 750px;
    }
    @media (min-width: 701px) and (max-width: 950px){
        height: 650px;
    }
    @media (min-width: 950px) and (max-width: 1100px){
        height: 850px;
    }
    @media (min-width: 1101px) and (max-width: 1440px){
        height: 850px;
    }
    @media (min-width: 1441px) and (max-width: 2561px){
        height: 900px;
    }
`
const ImageWithTextContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    img{
        z-index: 1;
        filter: brightness(0.8);
        @media (min-width: 1px) and (max-width: 577px){
            z-index: 3;
            transform: translate(4%, 100%);
            width: 150%;
        }
        @media (min-width: 700px) and (max-width: 1100px){
            width: 100%;
            transform: translate(20%, 60%);
        }
        @media (min-width: 1101px) and (max-width: 1440px){
            transform: translate(50%, 70%);
            width: 70%;
        }
        @media (min-width: 1441px) and (max-width: 2561px){
            transform: translate(50%, 90%);
            width: 63%;
        }
    }
`

const Image1Wrapper = styled.div`
    width: 100%;
    z-index: 2;
    img{
        width: 100%;
        filter: brightness(0.8);
        @media (min-width: 700px) and (max-width: 1100px){
            width: 50%;
            margin-left: 50px;
        }
        @media (min-width: 1101px) and (max-width: 1440px){
            width: 40%;
            margin-left: 300px;
        }
        @media (min-width: 1441px) and (max-width: 2561px){
            width: 40%;
            margin-left: 230px;
        }
    }
`




const TextContainer = styled.div`
    color: #fff;
    z-index: 4;
    width: 50%;
    position: absolute;
    text-align: center;
    right: 30%;
    top: 80%;
    
    p{
        &:nth-child(1){
            font-size: 1.5rem;
            font-family: 'Righteous', 'cursive';
            line-height: 2rem; 
            margin-bottom: 10px;
            
            @media (min-width: 950px) and (max-width: 1100px){
                font-size: 2.5rem;
                line-height: 3rem; 
            }      
            @media (min-width: 1101px) and (max-width: 1440px){
                font-size: 2rem;
                line-height: 3rem;
            }
            @media (min-width: 1441px) and (max-width: 2561px){
                font-size: 2.5rem;
                line-height: 3rem;
            } 
        }
        &:nth-child(2){
            font-size: 0.7rem;
            text-align: left;
            font-family: 'Roboto', 'sans serif';
            line-height: 1.5rem;
            @media (min-width: 950px) and (max-width: 1100px){
                font-size: 1rem;
                line-height: 1.5rem;
            }
            @media (min-width: 1101px) and (max-width: 1440px){
                font-size: 1rem;
                line-height: 2rem;
            }
            @media (min-width: 1441px) and (max-width: 2561px){
                font-size: 1.2rem;
                line-height: 3rem;
            }
        }
    }

    @media (min-width: 1px) and (max-width: 321px){
        transform: translate(0, 2%);
    }

    @media (min-width: 322px ) and (max-width: 376px){
        transform: translate(0, 30%);
    }
    @media (min-width: 377px ) and (max-width: 577px){
        transform: translate(0, 54%);
    }
    @media (min-width: 701px) and (max-width: 950px){
        width: 30%;
    }
    @media (min-width: 950px) and (max-width: 1100px){
        width: 30%;
        transform: translate(-50px, 0px);
    }
    @media (min-width: 1101px) and (max-width: 1440px){
        width: 28%;
        transform: translate(-20px, -40px);
    }
    @media (min-width: 1441px) and (max-width: 2561px){
        width: 25%;
        transform: translate(-130px, 0px);
    }
`


const WhiteButton = styled(Button)`
    color: black;
    background-color: white;
    width: 150px;
    padding: 10px 20px;
    margin-top: 10px;
`

const Section6 = () => {
    return (
        <Container>
            <SectionContainer>
                <Image1Wrapper>
                    <img src="/images/section6_image1.png" alt=""/>
                </Image1Wrapper>
                <ImageWithTextContainer>
                    <img src="/images/section4_image2.png" alt=""/>
                    <TextContainer>
                        <p>“six yards of pure beauty!”</p>
                        <p>
                            Saree’s are like indian women, so clever. 
                            From business meetings to first nights, 
                            from political talks to red carpets, 
                            from college farewells to Indian kitchens, 
                            they actually have many avatars.
                        </p>
                        <p>
                            <WhiteButton pill>
                                view products
                            </WhiteButton>
                        </p>
                    </TextContainer>
                </ImageWithTextContainer>
            </SectionContainer>
        </Container>
    );
};

export default Section6;