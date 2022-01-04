import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { resetCounts } from '../../redux/actions/componentState';
import { SectionStyle } from '../../styles/globalStyles';
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import SearchFilter from './components/Search/SearchFilter';



const Section = styled.section `
    ${SectionStyle}
`



const location = [
    {
        id: 0,
        name: 'Ikoyi'
    }, 
    {
        id: 1,
        name: 'Lekki'
    },
    {
        id: 2,
        name: 'Ikotun'
    }
]
const Home = () => {
    const dispatch = useDispatch()
    const textTitle = 'Find Shortlets'
    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const [arrivalDeparture, setArrivalDeparture] = useState([])
    const [guest, setGuest] = useState()
    const [text, setText] = useState(textTitle);
    const [openModal, setOpenModal] = useState(false)
    const [openGuest, setOpenGuest] = useState(false)
    const [value, setvalue] = useState('');


    const myRef = useRef(null)


    useClickOutside(myRef, () => {
        if (openModal || openGuest) {
            setOpenModal(false)
            setOpenGuest(false)
        }
            // If user clicks outside of modal, close it.
    })


    //* Change Search Button Title on Mouse Movement
    const changeText = () => {
        setText('Search')
    }

    const DefaultText = () => {
        setText(textTitle)
    }
    //* End

    const handleModal = () => {
        setOpenModal(true)
    }

    const handleGuest = () => {
        setOpenGuest(true)
    }


    const resetCount = () => {
        setGuest()
        dispatch(resetCounts())
    }

    useEffect(() => {
        setGuest(adultcount + childrencount)
    }, [adultcount, childrencount]);

    

    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value
            setvalue(value)
            setOpenModal(false)
        }
    }

    return (
        <> 
            <Section>
                <SearchFilter 
                    changeText={changeText} 
                    DefaultText={DefaultText} 
                    openModal={openModal} 
                    handleModal={handleModal} 
                    value={value} 
                    myRef={myRef} 
                    location={location} 
                    handleGuest={handleGuest} 
                    guest={guest} 
                    resetCount={resetCount} 
                    setArrivalDeparture={setArrivalDeparture} 
                    openGuest={openGuest} 
                    text={text} 
                    handleOption={handleOption} 
                
                />
            </Section>
        </>
    )
}

export default Home
