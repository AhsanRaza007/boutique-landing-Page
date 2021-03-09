import React from 'react';
import Product from './Product';
import Carousel, {consts} from 'react-elastic-carousel';


const ProductCarousel = () => {

    const breakpoints = [
        {width: 1, itemsToShow: 1, itemsToScroll: 1, itemPosition: consts.START},
        {width: 550, itemsToShow: 1, itemsToScroll: 1},
        { width: 700, itemsToShow: 3, itemsToScroll: 3 },
        {width: 1000, itemsToShow: 3, itemsToScroll: 3}
    ]

    return (
        <Carousel breakPoints={breakpoints} itemPadding={[0, 0]} >
            <Product imgsrc="/images/product1.png" price="₹ 5,000"/>
            <Product imgsrc="/images/product2.png" price="₹ 4,299"/>
            <Product imgsrc="/images/product3.png" price="₹ 5,000"/>
            <Product imgsrc="/images/product1.png" price="₹ 5,000"/>
            <Product imgsrc="/images/product2.png" price="₹ 4,299"/>
            <Product imgsrc="/images/product3.png" price="₹ 5,000"/>
        </Carousel>
    );
};

export default ProductCarousel;