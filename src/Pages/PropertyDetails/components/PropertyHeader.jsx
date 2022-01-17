import { useSelector } from "react-redux"
import styled from "styled-components"
import { FlexStyle } from "../../../styles/globalStyles"
import { IoBed } from "react-icons/io5"
import { Rooms, Baths } from "../../../Svg/svg"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"


const BodyHeader = styled.div `
grid-column: 1/5;

h2,p {
    margin: 0;
}

h2 {
    font-size: var( --font-xtra-small);
    font-weight: 600;
}

`

const BodyHeaderIcon = styled.div `
    display: flex;
    margin: max(1vw, 1.2rem) 0;
`


const BodyIconCard = styled.div `
    ${FlexStyle}

    div {
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: 32px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 14px;
        }

        span {
            ${FlexStyle}
        }

    }

    > span:last-child {
        color: var(--color-dark);
        font-size: var( --font-small-screen);
        margin-left: max(0.5vw,0.3rem);
    } 

`



const PropertyHeader = ({status}) => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const GeneralInfo = general_info?.map((data) => data)

    return (
        <BodyHeader>
            {status === 'loading' ? <SkeletonLoader  width='40%'/> : <h2>{GeneralInfo[0]?.apartment_name}</h2>}
            <BodyHeaderIcon>
                {status === 'loading' ? <SkeletonLoader /> :(
                    <BodyIconCard>
                        <div>
                            <span><IoBed/></span>
                        </div>
                        <span>{GeneralInfo[0]?.bed} Beds</span> 
                    </BodyIconCard>
                )}
                
                <BodyIconCard style={{margin: '0 max(5vw, 1rem)'}}> 
                    {status === 'loading' ? <SkeletonLoader /> : (
                        <div>
                            <span>{Baths}</span>
                        </div>
                    )}
                    
                    {status === 'loading' ? <SkeletonLoader /> : (<span>{GeneralInfo[0]?.bath} Baths</span>)}
                </BodyIconCard>
                <BodyIconCard>
                    {status === 'loading' ? <SkeletonLoader /> : (
                        <div>
                            <span>{Rooms}</span>
                        </div>
                    )}
                    {status === 'loading' ? <SkeletonLoader /> : (<span>{GeneralInfo[0]?.room} Rooms</span>)}
                </BodyIconCard>
            </BodyHeaderIcon>
        </BodyHeader>
    )
}

export default PropertyHeader
