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
        // dispatch(ShortletDetails({checkInDate,checkOutDate,apartment_id}))
        //checkIn=${checkInDate}&checkOut=${checkOutDate 
        navigate(`/apartment/${apartment_id}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate: ''}`)
    }


    return (  
        <PropertyCard data={data} handleGetDetails={handleGetDetails} title={title} />      
        // <Card >
        //     <CardContainer onClick={handleGetDetails}>
        //         <PictureContainer height={status === 'succeeded' ? 'true' : 'false'}>
        //             <div>
        //                 <picture>
        //                     <source
        //                         data-srcset={picture}
        //                         media="(max-width: 559px)" />
        //                     <source
        //                         data-srcset={picture}
        //                         media="(min-width: 560px)" />
                            
        //                     <img data-src={picture} alt="" width="100%" height="100%" className="lazyload"/>
        //                 </picture>
        //             </div>
        //         </PictureContainer>
        //         <ContentContainer>
        //             <div>
        //                 <div>
        //                     <h2>{apartment_name}</h2>
        //                     <span>{address}</span>
        //                     <span>
        //                         {property_brief_description}
        //                     </span>
        //                 </div>
        //                 <IconDiv>
        //                     <IconContent>
        //                             {bed && (
        //                                 <IconCard>
        //                                     <div>
        //                                         <span><IoBed/></span>
        //                                     </div>
        //                                     <div>
        //                                         <span>{bed}</span>
        //                                         <span>Beds</span>
        //                                     </div>
        //                                 </IconCard>
        //                             )}
        //                             {bath && (
        //                                 <IconCard>
        //                                     <div>
        //                                         <span> {Baths}</span> 
        //                                     </div>
        //                                     <div>
        //                                         <span>{bath}</span>
        //                                         <span>Bath</span>
        //                                     </div>
        //                                 </IconCard>
        //                             )}
        //                             {washer && (
        //                                 <IconCard>
        //                                     <div>
        //                                         <span>{Washer}</span> 
        //                                     </div>
        //                                     <div>
        //                                         <span>{washer}</span>   
        //                                     </div>                            
        //                                 </IconCard>
        //                             )}
        //                             {room && (
        //                                 <IconCard>
        //                                     <div>
        //                                         <span>{Rooms}</span>
        //                                     </div>
        //                                     <div>
        //                                         <span>{room} </span>
        //                                         <span>Rooms</span>
        //                                     </div>
        //                                 </IconCard>
        //                             )}
        //                     </IconContent>
        //                 </IconDiv>
        //             </div>
        //             <Apartment>
        //                 <div>
        //                     <span>Apartment</span>
        //                 </div>
        //                 <div>
        //                     <span>6 Max Guests</span>
        //                 </div>
        //                 <div>
        //                     <span>{seaview}</span>
        //                 </div>
        //             </Apartment>
        //             <Price>
        //                 <h3>&#8358; {price.toLocaleString()}</h3>
        //                 <div style={{marginLeft:'max(8vw, 2.5rem)'}}>
        //                     <Button color={"var(--color-white)"} padding=".6rem" border="0" title="Make reservation" background="var(--linear-primary)" fontSize="var(--font-xtra-small-screen)" />
        //                 </div>
        //             </Price>
        //         </ContentContainer>
        //     </CardContainer>
        // </Card>
    )
}

export default Result


