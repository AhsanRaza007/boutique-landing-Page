import React from 'react';
import Carousel from '../Carousel/Carousel';
import Slide1 from '../Carousel/Slide';
import Slide2 from '../Carousel/Slide'
import Slide3 from '../Carousel/Slide'

const HeroSection = () => {
    return (
        <Carousel>
            <Slide1 imgsrc="/images/hero1.png"/>
            <Slide2 imgsrc="/images/hero2.png"/>
            <Slide3 imgsrc="/images/hero3.png" />
        </Carousel>
    );
};

export default HeroSection;