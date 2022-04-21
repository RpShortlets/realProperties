import  { useState} from "react"
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery"
import { useSelector } from "react-redux"
import AmenitiesCard from "../../../components/PropertyCard/AmenitiesCard"


const PropertyAmenities = () => {
    const {PropertyDetails} = useSelector(state => state?.propertyDetails)
    const [show, setShow] = useState(false)
    const Query = useMediaQuery("(min-width: 769px)")

    return (
        <AmenitiesCard  
            PropertyDetails={PropertyDetails}
            show={show}
            setShow={setShow}
            Query={Query}
        />
    )
}

export default PropertyAmenities
