import {useState, useRef, useEffect} from "react"
import { useSelector } from "react-redux"
import styled  from "styled-components/macro"
import { PaddingStyle } from "../../styles/globalStyles"
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import MobileModal from "./components/Modal"
import ReservationComponent from "./components/ReservationComponent/ReservationComponent" 
import "../../styles/propertyDetails.css"
import PropertyName from "./components/PropertyName"
import PropertyImage from "./components/PropertyImage"
import PropertyHeader from "./components/PropertyHeader"
import PropertyDescription from "./components/PropertyDescription"
import PropertyAmenities from "./components/PropertyAmenities"
import {PropertyCalender} from "./components/PropertyCalender"
import PropertyRules from "./components/PropertyRules"
import { SkeletonLoader } from "../../components/Loader/Skeleton"


const Section  = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Main = styled.div `
    ${PaddingStyle}

    @media screen and (min-width: 769px) {
        padding-top: 2rem;
    }
`

const Header = styled.div `
    position: relative; 

`



const BodyContainer = styled.div `
    margin-bottom: max(1vw, 1rem);    

`

const BodyContent = styled.div `
    

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2rem;
    }
`



const PropertyDetails = () => {
    const Query = useMediaQuery("(min-width: 769px)")
    const {status} = useSelector(state => state.propertyDetails)
    const {reservation: {summary_details }} = useSelector(state => state.reservationState)
    const [openGuest, setOpenGuest] = useState(false)
    const [openService, setOpenService] = useState(false)
    const [show, setshow] = useState(false);
    const modalRef = useRef()
    const staylength = summary_details ? summary_details[0]?.stay_length : 1;


    useClickOutside(modalRef, () => {
        // if (openGuest || openService) {
        //     setOpenGuest(false)
        //     setOpenService(false)
        // }
            // If user clicks outside of modal, close it.
    })

    //* HIDE SCROLL BAR WHILE HEADER IMAGE IS STILL LOADING AT HOME PAGE
    useEffect(() => {
        if(show) {
            document.body.style.overflow = 'hidden'
        } 
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [show])

    // if(pending) return <WaitLoading />

    return (
        <>
            {!Query && <MobileModal show={show} setshow={setshow}/>}
            <Section>
                <Main paddingleft='true' paddingRight='true'>
                    <Header>
                        {status === 'loading' ?  <SkeletonLoader />  : <PropertyName status={status} />}
                        <PropertyImage status={status}/> 
                        <BodyContainer>
                            <BodyContent>
                                <PropertyHeader status={status}/>
                                <PropertyDescription status={status} />
                                <ReservationComponent 
                                    setOpenGuest={setOpenGuest}
                                    openGuest={openGuest}
                                    modalRef={modalRef}
                                    openService={openService}
                                    setOpenService={setOpenService}
                                    setshow={setshow}
                                    show={show}
                                    Query={Query}
                                />
                                <PropertyAmenities  status={status}/>
                            </BodyContent>
                        </BodyContainer>
                    </Header>
                    <PropertyCalender status={status} lenghtstay={staylength}  margin="max(3vw,2rem) 0"/> 
                    <PropertyRules  status={status}/>
                </Main> 
            </Section>
        </>
    )
}

export default PropertyDetails