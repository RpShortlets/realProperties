import React from 'react'
import AmenitiesCard from "../../../components/PropertyCard/AmenitiesCard"
import styled from "styled-components"


const Amenities = styled.div `

    @media screen and (max-width: 991px) {
        order: 3;
    }
`

const AmenityComponent = ({showAmenity, setShowAmenity, PropertyDetails, Query, loading}) => {
    return (
        <Amenities>
            <AmenitiesCard 
                setShow={setShowAmenity} 
                show={showAmenity}
                PropertyDetails={PropertyDetails}
                Query={Query}
                loading={loading}
            />
        </Amenities>
    )
}

export default AmenityComponent