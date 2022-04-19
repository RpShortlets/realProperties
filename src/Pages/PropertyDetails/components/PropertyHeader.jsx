import { useSelector } from "react-redux"
import styled from "styled-components"
import { IoBed } from "react-icons/io5"
import { Rooms, Baths } from "../../../Svg/svg"
import IconCard from "../../../components/PropertyCard/IconCard"



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




const PropertyHeader = () => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const GeneralInfo = general_info?.map((data) => data)

    return (
        <BodyHeader>
            <h2>{GeneralInfo[0]?.apartment_name}</h2>
            <BodyHeaderIcon>
                <IconCard data={GeneralInfo[0]?.bed} title="Beds" Icon={<IoBed/>} />
                <IconCard data={GeneralInfo[0]?.bath} title="Bathroom" Icon={Baths} style={{margin: '0 max(5vw, 1rem)'}} />
                <IconCard data={GeneralInfo[0]?.room} title="Rooms" Icon={Rooms} />
            </BodyHeaderIcon>
        </BodyHeader>
    )
}

export default PropertyHeader
