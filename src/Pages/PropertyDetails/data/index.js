import { useSelector } from "react-redux"
import { SecurityIcon, KitchenIcon, AcIcon, 
        ParkingIcon, OceanViewIcon, 
        FirstAidIcon, ElevatorIcon, WifiIcon,
        BalconyIcon, GuestRoomIcon,
        TvIcon, PoolIcon, BulbIcon, ShowerIcon 
    } from "../../../Svg/svg"
import styled from "styled-components"

const IconContent = styled.div `

    div {
        margin: 5px 0;
    }

    span:last-child {
        font-size: var(--font-xtra-small-screen);
        margin-left: max(0.2vw, 0.5rem);
    }
    
`


export const AmenitiesOne = () => {
    const {PropertyDetails: {amenities}} = useSelector(state => state?.propertyDetails)

    console.log(amenities[0]?.security)
    

    const securityCheck = amenities[0]?.security;
    const ConditionalCheck = amenities[0]?.air_condition;
    const parkingCheck =  amenities[0]?.parking;
    // const bedroomCheck =  amenities[0]?.bed;
    const fristAidCheck =  amenities[0]?.first_aid;
    const elevatorCheck =  amenities[0]?.elevator;
    const oceanViewCheck =  amenities[0]?.oceanview;
    const bathroomCheck =  amenities[0]?.bath;
    const kitchenCheck = amenities[0]?.kitchen;

    return (
        <IconContent>
            {securityCheck && (
                <div>
                    <span>{SecurityIcon}</span>
                    <span>24 hours security</span>
                </div>
            )}
            {ConditionalCheck && (
                <div>
                    <span>{AcIcon}</span>
                    <span>Fully Air conditioned</span>
                </div>
            )}
            {parkingCheck && (
                <div>
                    <span>{ParkingIcon}</span>
                    <span>Secure parking spots</span>
                </div>
            )}
            {oceanViewCheck && (
                <div>
                    <span>{OceanViewIcon}</span>
                    <span>Oceanview</span>
                </div>
            )}
            {fristAidCheck && (
                <div>
                    <span>{FirstAidIcon}</span>
                    <span>First Aid</span>
                </div>
            )}
            {elevatorCheck && (
                <div>
                    <span>{ElevatorIcon}</span>
                    <span>Elevator access</span>
                </div>
            )}
            {bathroomCheck && (
                <div>
                    <span>{ShowerIcon}</span>
                    <span>Rain shower equipped</span>
                </div>
            )}
            {kitchenCheck && (
                <div>
                    <span>{KitchenIcon}</span>
                    <span>Kitchen</span>
                </div>
            )}
            
        </IconContent>
    )
}

export const AmenitiesTwo = () => {
    const {PropertyDetails: {amenities}} = useSelector(state => state?.propertyDetails)
    
    const wifiCheck =  amenities[0]?.wifi;
    const balconyCheck =  amenities[0]?.balcony;
    const guestRoomCheck =  amenities[0]?.guest_restroom;
    // const cleaningCheck =  amenities[0]?.cleaning_service;
    const RokuCheck =  amenities[0]?.netflix;
    const swimmingCheck = amenities[0]?.swimming_pool;
    const lightingCheck =  amenities[0]?.lighting;
    

    return (

        <IconContent>
            {wifiCheck && (
                <div>
                    <span>{WifiIcon}</span>
                    <span>Wifi</span>
                </div>
            )}
            {balconyCheck && (
                <div>
                    <span>{BalconyIcon}</span>
                    <span>Private wrap around Balcony</span>
                </div>
            )}
            {guestRoomCheck && (
                <div>
                    <span>{GuestRoomIcon}</span>
                    <span>Guest Restroom</span>
                </div>
            )}
            {RokuCheck && (
                <div>
                    <span>{TvIcon}</span>
                    <span>Roku TV (Netflix)</span>
                </div>
            )}
            {swimmingCheck && (
                <div>
                    <span>{PoolIcon}</span>
                    <span>Swimming Pool</span>
                </div>
            )}
            {lightingCheck && (
                <div>
                    <span>{BulbIcon}</span>
                    <span>Ambient lighting</span>
                </div>
            )}
        </IconContent>
    )
}