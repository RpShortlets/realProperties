import React from 'react'
import styled from "styled-components"
import Button from '../../../components/Button/Button'

import CardCarousel from "../../../components/Carousel/CardCarousel"

import FacilityOne from "../../../image/facilityOne.png"
import FacilityTwo from "../../../image/facilityTwo.png"


const RightArrow = () => {
    return (
        <div>
            <Button border="0" background="var(--color-white)" title={"arrow"} />
        </div>
    )
}


const responsive = {
    desktop: {
        breakpoint: {
        max: 3000,
        min: 991
        },
        items: 4,
        partialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: {
        max: 500,
        min: 0
        },
        items: 1,
        partialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: {
        max: 990,
        min: 501
        },
        items: 2,
        partialVisibilityGutter: 5
    }
}

const Facility = styled.div `
    width: 35vw;

    h2 {
        font-size: var(--font-small-screen);
        font-weight: 600;
        margin: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carouselDiv {
        margin: 2rem 0 0;
    }

    @media screen and (max-width: 991px) {
        order: 4;
        width: 86vw;
    }
`

const FacilityComponent = () => {
    return (
            <Facility>
                <div>
                    <h2>Facilities</h2>
                    <div className="carouselDiv">
                        <CardCarousel 
                            responsive={responsive}
                            autoPlay={false}
                            centerMode={false}
                            infinite={false}
                            customRight={<RightArrow />}
                        >
                            <div style={{margin: '0 5px'}} >
                                <img src={FacilityOne} alt="gym" />
                            </div>
                            <div style={{margin: '0 5px'}}  >
                                <img src={FacilityTwo} alt="gym"  />
                            </div>
                            <div style={{margin: '0 5px'}}  >
                                <img src={FacilityOne} alt="gym"  />
                            </div>
                            <div style={{margin: '0 5px'}}  >
                                <img src={FacilityTwo} alt="gym" />
                            </div>
                            <div style={{margin: '0 5px'}} >
                                <img src={FacilityTwo} alt="gym"/>
                            </div>
                            <div style={{margin: '0 5px'}} >
                                <img src={FacilityTwo} alt="gym"  />
                            </div>
                            <div style={{margin: '0 5px'}} >
                                <img src={FacilityTwo} alt="gym"  />
                            </div>
                        </CardCarousel>
                    </div>
                </div>
            </Facility>
    )
}

export default FacilityComponent