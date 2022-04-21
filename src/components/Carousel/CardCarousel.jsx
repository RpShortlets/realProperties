import React from 'react'
import Carousel from 'react-multi-carousel'



const CardCarousel = ({children, responsive, showDots, centerMode, autoPlay, infinite, customRight}) => {
    return (
        <Carousel
            autoPlay
            autoPlaySpeed={2000}
            additionalTransfrom={0}
            arrows
            centerMode
            className=""
            containerClass="containerCarousel"
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={customRight}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={showDots}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {children}
        </Carousel>
    )
}

export default CardCarousel