import { useSelector } from "react-redux"
import { SecurityIcon, KitchenIcon, AcIcon, 
        ParkingIcon, BedIcon, OceanViewIcon, 
        FirstAidIcon, ElevatorIcon, WifiIcon,
        BalconyIcon, GuestRoomIcon,CleaningIcon,
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
    const {propertyDetail} = useSelector(state => state.propertyDetails)
    let newsdata = propertyDetail?.data.map((data) => data.amenities);

    const securityCheck = newsdata[0].map((name) => name.name).filter((x) => x === 'security');
    const ConditionalCheck = newsdata[0].map((name) => name.name).filter((x) => x === 'conditioned');
    const parkingCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Parking');
    const bedroomCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Bedrooms');
    const fristAidCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'First Aid');
    const elevatorCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Elevator');
    const oceanViewCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Oceanview');
    const bathroomCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Bathroom');

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
            {bedroomCheck && (
                <div>
                    <span>{BedIcon}</span>
                    <span>Bedrooms</span>
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
                    <span>bathrooms (rain shower equipped)</span>
                </div>
            )}
            
        </IconContent>
    )
}

export const AmenitiesTwo = () => {
    const {propertyDetail} = useSelector(state => state.propertyDetails)
    let newsdata = propertyDetail?.data.map((data) => data.amenities);
    
    const kitchenCheck = newsdata[0].map((name) => name.name).filter((x) => x === 'kitchen');
    const wifiCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Wifi');
    const balconyCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Balcony');
    const guestRoomCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Guest Restroom');
    const cleaningCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Cleaning');
    const RokuCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Roku');
    const swimmingCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Swimming');
    const lightingCheck =  newsdata[0].map((name) => name.name).filter((x) => x === 'Lighting');
    

    return (
        <IconContent>
            {kitchenCheck && (
                <div>
                    <span>{KitchenIcon}</span>
                    <span>Kitchen</span>
                </div>
            )}
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
            {cleaningCheck && (
                <div>
                    <span>{CleaningIcon}</span>
                    <span>Domestic cleaning service</span>
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