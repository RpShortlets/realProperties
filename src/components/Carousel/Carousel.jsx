import React from 'react'
import Carousel  from "react-bootstrap/Carousel"
import styled from "styled-components"


const Carosuel = styled(Carousel) `
    height: 100%;

    .carousel-inner {
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        height: ${({caro}) => caro ? "230px" : "100%"}
    }
`


const Carousels = ({index, handleSelect, data, loading, controls, fade, onMouseEnter, onMouseLeave, fetch, style, imageStyle, caro}) => {

    return (
        <>
            <Carosuel caro={caro} activeIndex={index} onSelect={handleSelect} fade={fade} controls={controls} indicators={false}>
                
                {data?.map((data, i) => (
                    <Carousel.Item key={i}
                        onMouseEnter={() => onMouseEnter(i)}
                        onMouseLeave={() => onMouseLeave(i)}
                        onClick={() => fetch(data?.apartment_id)}
                        style={style}
                    >
                        <img
                            className="d-block w-100"
                            src={data?.picture}
                            alt="First slide"
                            style={imageStyle}
                        />
                    </Carousel.Item>
                ))}
                                    
            </Carosuel>
        </>
    )
}

export default Carousels