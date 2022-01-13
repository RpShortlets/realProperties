import {useState, useRef, useEffect} from "react"
import { useSelector } from "react-redux"
import styled  from "styled-components/macro"
import { PaddingStyle } from "../../styles/globalStyles"
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import MobileModal from "./components/Modal"
import ReservationComponent from "./components/ReservationComponent"
import "../../styles/propertyDetails.css"
import PropertyName from "./components/PropertyName"
import PropertyImage from "./components/PropertyImage"
import PropertyHeader from "./components/PropertyHeader"
import PropertyDescription from "./components/PropertyDescription"
import PropertyAmenities from "./components/PropertyAmenities"
import PropertyCalender from "./components/PropertyCalender"
import PropertyRules from "./components/PropertyRules"



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
    const {pending, error} = useSelector(state => state.propertyDetails)
    const [openGuest, setOpenGuest] = useState(false)
    const [openService, setOpenService] = useState(false)
    const [arrivalDeparture, setArrivalDeparture] = useState([])
    const [show, setshow] = useState(false);
    const modalRef = useRef()


    useClickOutside(modalRef, () => {
        if (openGuest || openService) {
            setOpenGuest(false)
            setOpenService(false)
        }
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

    if(pending) return <div>Loading</div>

    return (
        <>
            {!Query && <MobileModal show={show} setshow={setshow}/>}
            <Section>
                <Main>
                    <Header>
                        <PropertyName  />
                        <PropertyImage/>
                        <BodyContainer>
                            <BodyContent>
                                <PropertyHeader />
                                <PropertyDescription />
                                <ReservationComponent 
                                    setOpenGuest={setOpenGuest}
                                    openGuest={openGuest}
                                    modalRef={modalRef}
                                    openService={openService}
                                    setOpenService={setOpenService}
                                    setshow={setshow}
                                    show={show}
                                    Query={Query}
                                    dates={arrivalDeparture}
                                />
                                <PropertyAmenities />
                            </BodyContent>
                        </BodyContainer>
                    </Header>
                    <PropertyCalender setArrivalDeparture={setArrivalDeparture} />
                    <PropertyRules />
                </Main> 
            </Section>
        </>
    )
}

export default PropertyDetails
