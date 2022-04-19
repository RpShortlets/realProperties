import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Bk from "../../image/comingImg.png"
import comingImage from "../../image/comingPage.png"
import PropertyCard from "../../components/PropertyCard/PropertyCard"


const Data = [
    {
        id: 1,
        picture: comingImage,
        apartment_name: 'Executive Suite',
        price: '50,000',
        price2: '30,000',
        property_brief_description: '2bedroom Apartment' 
    },
    {
        id: 2,
        picture: comingImage,
        apartment_name: 'Executive Suite',
        price: '60,000',
        price2: '40,000',
        property_brief_description: '2bedroom Apartment' 
    },
    {
        id: 3,
        picture: comingImage,
        apartment_name: 'Executive Suite',
        price: '70,000',
        price2: '50,000',
        property_brief_description: '2bedroom Apartment' 
    }
]


const Section = styled.section `
    height: 100vh;
    background: rgba(224, 224, 224, 1);
`

const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    width: 100%;
    position:relative;

    .content {
        grid-column: 1/3;
    }


    .ImageBk {
        background-image: url(${Bk});
        background-repeat: no-repeat;
        background-position: center;
    }

    .comingCard {
        position: absolute;
        overflow: scroll;
        left: 25%;
        top: 15%;
        background: #fff;
        width: 60%;
        height: 70%;
        padding: max(5vh, 1.5rem) max(1vh, 1rem) 0 max(5vh, 1rem);


        div {
            h1 {
                font-size: var(--font-small);
                font-weight: 600;
                text-align: center;
            }
        }
    }

`

const ComingResult = () => {
    const navigate = useNavigate()

    const handleGetDetails = (id) => {
        navigate(`/coming-soon/apartment/1`)
    }

    return (
        <>  
            <Section>
                <Container data-testId="comingId">
                    <div className="content" >

                    </div>
                    <div className='ImageBk'></div>
                    <div className="comingCard">
                        <div>
                            <h1 data-testId="comingHeader" >Up Coming Apartments</h1>
                            <div>
                                {Data.map((item) => (
                                    <PropertyCard data={item} title="View" color handleGetDetails={handleGetDetails}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default ComingResult