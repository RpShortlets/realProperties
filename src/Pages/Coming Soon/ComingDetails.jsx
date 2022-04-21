import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { PaddingStyle } from "../../styles/globalStyles"
import { useDispatch, useSelector } from 'react-redux'
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery'

import DetailComponent from './components/Details'
import ImagesComponent from "./components/Images"
import FacilityComponent from './components/Facility'
import AmenityComponent from "./components/Amenity"
import { getComingSoonDetails } from '../../redux/actionCreators/actionCreators'
import { useParams } from 'react-router'



const Section = styled.section `
    width: 100%;
    height: 100%;
    background: var(--color-white);
`

const Main  = styled.main `
    ${PaddingStyle}
    padding-top: 4vw;
    padding-bottom: 4vw;
`

const Container  = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;

    @media screen and (min-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

`


const ComingDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch();

    const [show, setShow] = useState(false)
    const {PropertyDetails} = useSelector(state => state?.propertyDetails)
    const {proceess, comingDetails } = useSelector(state => state.comingsoonReducer)
    const [showAmenity, setShowAmenity] = useState(false)
    const Query = useMediaQuery("(min-width: 769px)")

    console.log({
        comingDetails,
        proceess
    })


    useEffect(() => {
        dispatch(getComingSoonDetails(id))        
    }, [id, dispatch])


    return (
        <Section data-testid="comingDetails">
            <Main paddingleft="true" paddingRight="true">
                <Container>
                    <DetailComponent 
                        show={show} 
                        setShow={setShow} 
                    />
                    <ImagesComponent />
                    <FacilityComponent />
                    <AmenityComponent 
                        PropertyDetails={PropertyDetails}
                        showAmenity={showAmenity}
                        setShowAmenity={setShowAmenity}
                        Query={Query}
                    />
                    
                </Container>
                
            </Main>
        </Section>
    )
}

export default ComingDetails