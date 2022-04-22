import  { useState} from "react"
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery"
import { useSelector } from "react-redux"
import AmenitiesCard from "../../../components/PropertyCard/AmenitiesCard"


const PropertyAmenities = () => {
    const {PropertyDetails, status} = useSelector(state => state?.propertyDetails)
    const [show, setShow] = useState(false)
    const Query = useMediaQuery("(min-width: 769px)")

    console.log(status)
    return (
        <AmenitiesCard  
            PropertyDetails={PropertyDetails}
            show={show}
            setShow={setShow}
            Query={Query}
            loading={status}
        />
    )
}

export default PropertyAmenities
