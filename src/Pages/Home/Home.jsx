import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { resetCounts, setOpenDrawer } from '../../redux/actions/componentState';
import { SectionStyle } from '../../styles/globalStyles';
import SearchFilter from './components/Search/SearchFilter';
import WhyRealShortlets from './components/WhyRealShortlets';
import { useNavigate } from 'react-router';
import { saveSearchValue } from '../../redux/actions/componentState';
import useAddGuestTotal from '../../hooks/useAddGuestTotal/useAddGuestTotal';
import Drawer from "../../components/Drawer/Drawer";
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { AnimatePresence } from "framer-motion"
import useProgressiveImage from '../../hooks/useProgressiveImage/useProgressiveImage';
import BG from "../../image/background.webp"
// import WhyModal from "./components/WhyModal";

// import { WhyRealShortletsData } from './data/data';
import PromoBanner from './components/Promo/PromoBanner';
import { getHomeData } from '../../redux/actionCreators/actionCreators';


const Section = styled.section `
    ${SectionStyle}
    position: relative;
`



const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {adultcount, childrencount, checkInDate, checkOutDate, searchValue, openDrawer} = useSelector(state => state.ComponentState)
    const {process, upcomingGallery} = useSelector(state => state.homeReducer)


    const [homeDateValue, setHomeDateValue] = useState([null, null]);
    const [openModal, setOpenModal] = useState(false)
    const [openGuest, setOpenGuest] = useState(false)
    const [whyShortlet, setWhyShortLet] = useState(false)
    const [whyRealShortletId, setWhyRealShortletId] = useState(null)
    const [showPromo, setShowPromo] = useState(false)
    const [promoCounter, setPromoCounter] = useState(3)
    const [showText, setShowText] = useState(false)
    const [apartmentId, setApartmentId] = useState()
    // const [promoBig, setPromoBig] = useState(false)
    const [isOpenCalender, setIsOpenCalender] = useState(false)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }


    const TotalGuest = useAddGuestTotal({adultcount, childrencount});
    const loaded = useProgressiveImage(BG)
    const Query = useMediaQuery("(min-width: 769px)")
    const myRef = useRef(null)


    const openDestinationModal = () => {
        setOpenModal(!openModal)
    }

    const handleGuest = () => {
        setOpenGuest(!openGuest)
    }


    const resetCount = () => {
        dispatch(resetCounts())
    }

    // const handleShowBigPromo = () => {
    //     setPromoBig(true)
    //     setShowPromo(false)
    // }

    const handleWhyRealShortlets = (id) => {
        setWhyShortLet(!whyShortlet)
        setWhyRealShortletId(id)
    }

    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value
            dispatch(saveSearchValue(value))
            setOpenModal(false)
        }
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        dispatch(setOpenDrawer(false))
        navigate(`/s/location=${searchValue}&adults=${adultcount > 0 ?  adultcount : ''}&children=${childrencount >  0 ? childrencount : ''}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }

    //handleComingSoon
    const handleComingSoon = () => {
        navigate('/coming-soon')
    }

    //* handleGetComingDetails fetch Coming Apartment Details with apartment id
    const handleGetComingDetails = (id) => {
        navigate(`/coming-soon/apartment/${id}`)
    }


    useEffect(() => {
        let timerId;
        if(promoCounter === 0) {  
            setShowPromo(true) 
        } else {
            timerId = setTimeout(() => {
                setPromoCounter((countDown) => countDown -1);
                
            }, 1000);
        }

        return () => clearInterval(timerId)

    }, [promoCounter]);

    // useEffect(() => {
    //     if(showPromo) {
    //         document.body.style.overflow = 'hidden'
    //     } 
    //     return () => {
    //         document.body.style.overflow = 'auto'
    //     }
    // }, [showPromo])

    useEffect(() => {
        dispatch(getHomeData())
    }, [dispatch])

    return (
        <> 

            {!Query && 
                <AnimatePresence initial={true}>
                    <Drawer openDrawer={openDrawer}  SubmitForm={SubmitForm}/>
                </AnimatePresence>
            }

{/* 
            {showPromo && upcomingGallery !== "Request failed with status code 429" && (
                <PromoBanner  
                    showPromo={showPromo}
                    setShowPromo={setShowPromo}
                    OnClicks={handleComingSoon}
                    index={index}
                    handleSelect={handleSelect}
                    data={upcomingGallery}
                    loading={process}
                    apartmentId={apartmentId}
                    setApartmentId={setApartmentId}
                    showText={showText}
                    setShowText={setShowText}
                    fetch={handleGetComingDetails}
                />
            )} */}
    
            <Section data-testid="why-modal">
                <SearchFilter 
                    openModal={openModal} 
                    setOpenModal={setOpenModal}
                    handleModal={openDestinationModal} 
                    myRef={myRef} 
                    handleGuest={handleGuest} 
                    guest={TotalGuest} 
                    resetCount={resetCount} 
                    homeDateValue={homeDateValue} 
                    setHomeDateValue={setHomeDateValue}
                    openGuest={openGuest} 
                    setOpenGuest={setOpenGuest}
                    handleOption={handleOption}
                    SubmitForm={SubmitForm} 
                    setIsOpenCalender={setIsOpenCalender}
                    isOpenCalender={isOpenCalender}
                    // setOpenDrawer={setOpenDrawer}
                    openDrawer={openDrawer}
                    loaded={loaded}
                
                />
                {loaded && 
                    <WhyRealShortlets 
                        whyShortlet={whyShortlet}
                        setWhyShortLet={setWhyShortLet}
                        handleWhyRealShortlets={handleWhyRealShortlets}
                        whyRealShortletId={whyRealShortletId}
                        

                    />
                }
                {/* {loaded && (
                    <PromotionDiv handleShowBigPromo={handleShowBigPromo} />
                )} */}
            </Section>
        </>
    )
}

export default Home
