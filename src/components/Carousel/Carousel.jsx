import React from 'react'
import Carousel  from "react-bootstrap/Carousel"


const Carousels = ({index, handleSelect, data, controls, fade, onMouseEnter, onMouseLeave, fetch}) => {

    return (
        <>
            <Carousel  activeIndex={index} onSelect={handleSelect} fade={fade} controls={controls} indicators={false}>
                {data?.map((data, i) => (
                    <Carousel.Item key={i}
                        onMouseEnter={() => onMouseEnter(i)}
                        onMouseLeave={() => onMouseLeave(i)}
                        onClick={() => fetch(data?.apartment_id)}
                    >
                        <img
                            className="d-block w-100"
                            src={data?.picture}
                            alt="First slide"
                            
                        />
                    </Carousel.Item>
                ))}
                    
            </Carousel>
        </>
    )
}

export default Carousels