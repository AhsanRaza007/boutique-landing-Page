import React from 'react';
import styled from 'styled-components';
import Container from '../Styled-Components/Container'
import ProductCarousel from './Section5Helpers/ProductCarousel';


const SectionContainer = styled.div`
    margin: 50px 0;
    @media (max-width: 576px){
        margin: 20px 0;
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

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`


const Section5 = () => {
    return (
        <Container>
            <SectionContainer className="product-carousel">
                <SectionHeading>
                    Our Top Products
                </SectionHeading>
                <ProductContainer>
                    <ProductCarousel/>
                </ProductContainer>
            </SectionContainer>
        </Container>
    );
};



export default Section5;