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
// import PropertyImage from "./components/PropertyImage"
import PropertyHeader from "./components/PropertyHeader"
import PropertyDescription from "./components/PropertyDescription"
import PropertyAmenities from "./components/PropertyAmenities"
import PropertyCalender from "./components/PropertyCalender"
import PropertyRules from "./components/PropertyRules"
import { SkeletonLoader } from "../../components/Loader/Skeleton"
import LargeOne from "../../image/largeOne.jpg"
import SmallOne from "../../image/smallestTwo.jpg"
import SmallTwo from "../../image/smallestThree.jpg"
import SmallThree from "../../image/smallestThree.jpg"
import SmallFour from "../../image/smallestFour.jpg"
import { VideoPlayer } from "../../Svg/svg"


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
    const [openGuest, setOpenGuest] = useState(false)
    const [openService, setOpenService] = useState(false)
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

    // if(pending) return <WaitLoading />

    return (
        <>
            {!Query && <MobileModal show={show} setshow={setshow}/>}
            <Section>
                <Main paddingleft='true' paddingRight='true'>
                    <Header>
                        {status === 'loading' ?  <SkeletonLoader />  : <PropertyName status={status} />}
                        <ImageContainer>
                            <ImageWrapper>
                                <LargeImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : (
                                        <div>
                                            <img data-src={LargeOne} alt=""  width='100%' height='100%' className="lazyload"/>
                                            <span>
                                                {VideoPlayer}
                                            </span>
                                        </div>
                                    )}
                                    
                                </LargeImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                        <img data-src={SmallOne} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                        <img data-src={SmallTwo} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                        <img data-src={SmallThree} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                        <img data-src={SmallFour} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                        <img data-src={SmallTwo} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                                <SmallImage>
                                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                                    <img data-src={SmallOne} alt=""  width='100%' height='100%' className="lazyload"/>
                                    )}
                                </SmallImage>
                            </ImageWrapper>
                        </ImageContainer>
                        {/* <PropertyImage status={status}/>  */}
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
                    <PropertyCalender /> 
                    <PropertyRules  status={status}/>
                </Main> 
            </Section>
        </>
    )
}

export default PropertyDetails

const ImageWrapper = styled.div ` 
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    grid-gap: 1rem;
    /* height: 400px; */

`

const LargeImage = styled.div `
    grid-column: 1/4;
    grid-row: 1/3;

    div {
        position: relative;
        span {
            position: absolute;
            left: 20px;
            bottom: 20px;
            background: #C4C4C4;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
        }
    }
`

const SmallImage = styled.div `
    
`


const ImageContainer = styled.div `
    margin: max(3vw, 2rem) 0;
    img {
        object-fit: cover;
        border-radius: 10px !important;
        width: 100%;
        height: 100%;
    }
`

