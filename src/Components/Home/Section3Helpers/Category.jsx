import React from 'react';
import Item from './Item';
import Carousel from 'react-elastic-carousel';




const Category = () => {
    const breakpoints = [
        {width: 1, itemsToShow: 3, itemsToScroll: 3},
        { width: 750, itemsToShow: 6, itemsToScroll: 0, pagination: false },
    ]
    return (
        <Carousel breakPoints={breakpoints} className="cateogry-carousel">
            <Item src="/images/cat1.png" category="Handloom" />
            <Item src="/images/cat2.png" category="Dhakai Jamdani" />
            <Item src="/images/cat3.png" category="Pure Silk" />
            <Item src="/images/cat4.png" category="Banarasi" />
            <Item src="/images/cat5.png" category="Kanjivaram" />
            <Item src="/images/cat6.png" category="Linen" />
        </Carousel>
    );
};

export default Category;