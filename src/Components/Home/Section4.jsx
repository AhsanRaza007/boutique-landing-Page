import React from 'react';
import styled from 'styled-components';
import Container from '../Styled-Components/Container';
import BestDeal from './Section4Helpers/BestDeal'

const SectionContainer4 = styled.div`
    margin: 50px auto;
    overflow: hidden;

    @media (min-width: 1px) and (max-width: 320px){
        margin: 20px auto;
        height: 600px;
    }

    @media (min-width: 321px) and (max-width: 376px){
        margin: 20px auto;
        height: 700px;
    }
    @media (min-width: 377px) and (max-width: 426px){
        margin: 20px auto;
        height: 750px;
    }

    @media (min-width: 427px) and (max-width: 576px){
        margin: 20px auto;
        height: 900px;
    }
    
    
    

`

const SectionHeading = styled.p`
    font-size: 2rem;
    font-family: 'Righteous', 'cursive';
    margin: 40px 0px;
    
    @media (max-width: 576px){
        text-align: center;
        margin: 20px 0px;
    }
`
const SectionWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;

    img{
        width:100%;
        height: auto;
        
        /* &:nth-child(1){
            width: 50%;

            @media  (max-width: 576px){
                width: 100%;
            }
        } */
        &:nth-child(2){
            position: absolute;
            width:80%;
            right:0;
            top: 50%;
            transform: translate(0, -50%);

            @media  (max-width: 576px){
                position: absolute;
                width: 170%;
                transform: translate(70px, 50px);
            }
        }

        
    }

    @media (max-width: 576px){
        flex-direction: column;
    }
`

const DealsWrapper = styled.div`
    width: 50%;
    position: relative;
    @media  (max-width: 576px){
        width: 100%;
    }
`




const Section4 = () => {
    return (
        <Container>
            <SectionContainer4>
                <SectionHeading>
                    Today's Deal
                </SectionHeading>
                <SectionWrapper>
                    <DealsWrapper>
                        <img src="/images/dark_rect.png" alt="dark"/>
                        <BestDeal />
                    </DealsWrapper>
                    <img src="/images/section4_image2.png" alt="img"/>
                </SectionWrapper>
            </SectionContainer4>
        </Container>
    );
};

export default Section4;