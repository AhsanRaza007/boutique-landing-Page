import React from 'react';
import Category from './Section3Helpers/Category'
import styled from 'styled-components';
import Container from '../Styled-Components/Container'

const SectionContainer = styled.div`
    margin: 50px auto;
    
    @media (max-width: 576px){
        margin: 20px auto;
    }
`

const SectionHeading = styled.p`
    font-size: 2rem;
    font-family: 'Righteous', 'cursive';
    margin: 20px 0px;
    
    @media (max-width: 576px){
        text-align: center;
    }
`


const Section3 = () => {
    return (
        <Container>
            <SectionContainer>
                <SectionHeading>
                    Our Top Categories
                </SectionHeading>
                <Category />
            </SectionContainer>
        </Container>
    );
};

export default Section3;