
import styled from 'styled-components'
import Guest from "./Guest"
import GuestDropdowns from './GuestDropdown';


const GuestDiv = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: block;
        flex: 1;
        position: relative;
        margin: 0 15px;
    }

`

const AddGuest = ({handleGuest, guest, resetCount, openGuest, myRef, setOpenGuest}) => {

    return (
        <GuestDiv >
            <Guest 
                guest={guest}
                resetCount={resetCount} 
                openGuest={openGuest}
                handleGuest={handleGuest}
            />
            <GuestDropdowns 
                openGuest={openGuest} 
                myRef={myRef} 
                setOpenGuest={setOpenGuest}
            /> 
        </GuestDiv>
    )
}

export default AddGuest
