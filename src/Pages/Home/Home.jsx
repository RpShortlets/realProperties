import { useState, useRef } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { resetCounts } from '../../redux/actions/componentState';
import { SectionStyle } from '../../styles/globalStyles';
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import SearchFilter from './components/Search/SearchFilter';
import WhyRealShortlets from './components/WhyRealShortlets';
import { useNavigate } from 'react-router';
import { saveSearchValue } from '../../redux/actions/componentState';
import { searchShortlets } from "../../redux/actionCreators/actionCreators"
import useAddGuestTotal from '../../hooks/useAddGuestTotal/useAddGuestTotal';




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

    const TotalGuest = useAddGuestTotal({adultcount, childrencount});
    const myRef = useRef(null)


    useClickOutside(myRef, () => {
        // if (openModal || openGuest) {
        //     setOpenModal(false)
        //     setOpenGuest(false)
        // }
            // If user clicks outside of modal, close it.
    })


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
        
        dispatch(searchShortlets({searchValue, checkInDate, checkOutDate, adultcount, childrencount}))
        navigate(`/s/location=${searchValue}&adults=${adultcount}&children=${childrencount}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }

    return (
        <> 
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
                
                />
                <WhyRealShortlets />
            </Section>
        </>
    )
}

export default Home
