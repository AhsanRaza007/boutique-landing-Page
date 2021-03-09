import React from 'react';
import Container from '../Styled-Components/Container'
import styled from 'styled-components';
import Quote from '../Styled-Components/Quote'

const SectionContainer = styled.div`
    display: flex;
    margin: 50px auto;
    justify-content: space-between;
    img{
        width: 100%;
        height: auto;
    }
    @media (max-width: 576px){
        flex-direction: column;
        margin: 20px auto;
    }
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: space-between;
    
    div{
        &:first-child{
            @media (min-width: 1024px){
                margin-top: 25px;
                font-size: 1.3rem;
            }
        }
    }
    @media (max-width: 576px){
        width: 100%;
    }


`
const LeftContainer = styled.div`
    width: 40%;
    @media (max-width: 576px){
        width: 100%;
    }
`

const Section1 = () => {
    return (
        <Container>
            <SectionContainer>
                <LeftContainer>
                    <img src="/images/section1_image1.png" alt="show"/>
                </LeftContainer>
                <RightContainer>
                    <Quote text="
I love it when a girl’s saree is made 
of grace, her jewellery is made 
of confidence and her heels are 
made of inner-strength."/>
                    <img src="/images/section1_image2.png" alt="show"/>
                </RightContainer>
            </SectionContainer>
        </Container>
    );
};

export default Section1;