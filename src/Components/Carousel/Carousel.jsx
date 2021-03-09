import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components'


const CarouselWrapper = styled.div`
    height: 100vh;
    max-height: 1000px;
    width: 100%;
    /* position: relative; */
    display: flex;
    overflow: hidden;
`

const SCarouselSlide = styled.div`
    flex: 0 0 auto;
    /* opacity: ${props=> props.active ? 1 : 0}; */
    transition: all 0.3s ease-in;
    width: 100%;
`
const SCarouselSlides = styled.div`
  display: flex;
  width: 100%;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;


const ArrowButtonContext = React.createContext();

const Carousel = ({ children }) => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    

    const goLeft = ()=>{
        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length)
    }

    const goRight = ()=>{
        setCurrentSlide((currentSlide + 1) % activeSlide.length);
    }

    const arrowFunctions = {
        'goLeft': goLeft,
        'goRight': goRight
    }

    
    
    const activeSlide = children.map((slide, index)=>(
        <SCarouselSlide active={currentSlide === index} key={index}>
            {slide}
        </SCarouselSlide>
        
    ))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [currentSlide, activeSlide.length]);
    
    return (
        <>
        <CarouselWrapper>
            <SCarouselSlides currentSlide={currentSlide}>
                <ArrowButtonContext.Provider value={arrowFunctions}>
                    {activeSlide}
                </ArrowButtonContext.Provider>
            </SCarouselSlides>
        </CarouselWrapper>
        
      {/* <button onClick={goLeft}>left</button>
      <button onClick={goRight}>right</button> */}
      
      </>
    )
};

export default Carousel;
export {ArrowButtonContext}