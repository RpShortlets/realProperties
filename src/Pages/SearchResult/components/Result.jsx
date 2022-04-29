import  { useNavigate } from "react-router-dom"
import {useSelector } from "react-redux"
import {useEncrypt } from "../../../hooks/useEncryption/useEncryption"
import PropertyCard from "../../../components/PropertyCard/PropertyCard"
// import { ShortletDetails } from "../../../redux/actionCreators/actionCreators"
// import Tooltips from "../../../components/Tooltip"


const key = "@@TechnoRealProperty" 

const Result = ({data: {apartment_id}, status, data, title }) => {
    const navigate = useNavigate()
    const {checkInDate, checkOutDate, } = useSelector(state => state.ComponentState)
    const {encrypted} = useEncrypt(apartment_id?.toString(), key)
    

    const handleGetDetails = async(Id) => {  
        localStorage.setItem('apidid', encrypted)      
        navigate(`/apartment/${apartment_id}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate: ''}`)
    }


    return (  
        <PropertyCard data={data} loading={status} handleGetDetails={handleGetDetails} title={title} />      
    )
}

export default Result


