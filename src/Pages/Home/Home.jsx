import { useState, useRef } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { resetCounts } from '../../redux/actions/componentState';
import { SectionStyle } from '../../styles/globalStyles';
import SearchFilter from './components/Search/SearchFilter';
import WhyRealShortlets from './components/WhyRealShortlets';
import { useNavigate } from 'react-router';
import { saveSearchValue } from '../../redux/actions/componentState';
import useAddGuestTotal from '../../hooks/useAddGuestTotal/useAddGuestTotal';
import Drawer from "../../components/Drawer/Drawer";
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';




const Section = styled.section `
    ${SectionStyle}
`


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {adultcount, childrencount, checkInDate, checkOutDate, searchValue} = useSelector(state => state.ComponentState)
    const [homeDateValue, setHomeDateValue] = useState([null, null]);
    const [openModal, setOpenModal] = useState(false)
    const [openGuest, setOpenGuest] = useState(false)
    const [isOpenCalender, setIsOpenCalender] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)

    const TotalGuest = useAddGuestTotal({adultcount, childrencount});
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


    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value
            dispatch(saveSearchValue(value))
            setOpenModal(false)
        }
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        navigate(`/s/location=${searchValue}&adults=${adultcount === null || 'null' ? "" : adultcount}&children=${childrencount === null || 'null' ? "" : childrencount}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }

    return (
        <> 
            {!Query && <Drawer openDrawer={openDrawer}  setOpenDrawer={setOpenDrawer}/>}
            <Section>
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
                    setOpenDrawer={setOpenDrawer}
                    openDrawer={openDrawer}
                
                />
                <WhyRealShortlets />
            </Section>
        </>
    )
}

export default Home
