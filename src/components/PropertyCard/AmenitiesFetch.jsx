import { SecurityIcon, KitchenIcon, AcIcon, 
        ParkingIcon, OceanViewIcon, 
        FirstAidIcon, ElevatorIcon, WifiIcon,
        BalconyIcon, GuestRoomIcon,
        TvIcon, PoolIcon, BulbIcon, ShowerIcon 
    } from "../../Svg/svg"
import styled from "styled-components"
import { SkeletonLoader } from "../Loader/Skeleton";

const IconContent = styled.div `

    div {
        margin: 5px 0;
    }

    span:last-child {
        font-size: var(--font-xtra-small-screen);
        margin-left: ${({loading}) => loading === "loading" ? "0" : "max(0.2vw, 0.5rem)"} 
    }
    
`



export const AmenitiesOne = ({PropertyDetails: {amenities}, loading}) => {

    const securityCheck = amenities ? amenities[0]?.security : "";
    const ConditionalCheck = amenities ? amenities[0]?.air_condition : "";
    const parkingCheck =   amenities ? amenities[0]?.parking : "";
    // const bedroomCheck =  amenities[0]?.bed;
    const fristAidCheck = amenities ? amenities[0]?.first_aid : "";
    const elevatorCheck =   amenities ? amenities[0]?.elevator : "";
    const oceanViewCheck = amenities ? amenities[0]?.oceanview : "";
    const bathroomCheck =  amenities ? amenities[0]?.bath : "";
    const kitchenCheck =  amenities ? amenities[0]?.kitchen : "";

    return (
        <IconContent loading={loading}>
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {securityCheck && (
                        <div>
                            <span>{SecurityIcon}</span>
                            <span>24 hours security</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {ConditionalCheck && (
                        <div>
                            <span>{AcIcon}</span>
                            <span>Fully Air conditioned</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {parkingCheck && (
                        <div>
                            <span>{ParkingIcon}</span>
                            <span>Secure parking spots</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {oceanViewCheck && (
                        <div>
                            <span>{OceanViewIcon}</span>
                            <span>Oceanview</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {fristAidCheck && (
                        <div>
                            <span>{FirstAidIcon}</span>
                            <span>First Aid</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {elevatorCheck && (
                        <div>
                            <span>{ElevatorIcon}</span>
                            <span>Elevator access</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {bathroomCheck && (
                        <div>
                            <span>{ShowerIcon}</span>
                            <span>Rain shower equipped</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {kitchenCheck && (
                        <div>
                            <span>{KitchenIcon}</span>
                            <span>Kitchen</span>
                        </div>
                    )}
                </>
            }
        </IconContent>
    )
}

export const AmenitiesTwo = ({PropertyDetails: {amenities}, loading} ) => {

    
    const wifiCheck =  amenities ?  amenities[0]?.wifi : "";
    const balconyCheck =   amenities ?  amenities[0]?.balcony : "";
    const guestRoomCheck =  amenities ?  amenities[0]?.guest_restroom : "";
    // const cleaningCheck =  amenities[0]?.cleaning_service;
    const RokuCheck =  amenities ?  amenities[0]?.netflix : "";
    const swimmingCheck = amenities ?  amenities[0]?.swimming_pool : "";
    const lightingCheck =   amenities ?  amenities[0]?.lighting : "";
    

    return (

        <IconContent loading={loading}>
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {wifiCheck && (
                        <div>
                            <span>{WifiIcon}</span>
                            <span>Wifi</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {balconyCheck && (
                        <div>
                            <span>{BalconyIcon}</span>
                            <span>Private wrap around Balcony</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {guestRoomCheck && (
                        <div>
                            <span>{GuestRoomIcon}</span>
                            <span>Guest Restroom</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {RokuCheck && (
                        <div>
                            <span>{TvIcon}</span>
                            <span>Roku TV (Netflix)</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {swimmingCheck && (
                        <div>
                            <span>{PoolIcon}</span>
                            <span>Swimming Pool</span>
                        </div>
                    )}
                </>
            }
            {loading === "loading" ? <SkeletonLoader width="100%" height={"10px"} />  : loading === "succeeded" &&
                <>
                    {lightingCheck && (
                        <div>
                            <span>{BulbIcon}</span>
                            <span>Ambient lighting</span>
                        </div>
                    )}
                </>
            }
        </IconContent>
    )
}