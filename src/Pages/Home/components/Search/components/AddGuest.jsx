
import styled from 'styled-components'
import Guest from "./Guest"
import GuestDropdowns from './GuestDropdown';


const GuestDiv = styled.div `
    display: none;

    @media screen and (min-width: 600px) {
        display: block;
        flex: 1;
        position: relative;
        margin: 0 15px;
    }

`

const AddGuest = ({handleGuest, guest, resetCount, openGuest, myRef,}) => {

    return (
        <GuestDiv onClick={handleGuest}>
            <Guest 
                guest={guest}
                resetCount={resetCount} 
                openGuest={openGuest}
            />
            <GuestDropdowns 
                openGuest={openGuest} 
                handleGuest={handleGuest} 
                myRef={myRef} 
            /> 
        </GuestDiv>
    )
}

export default AddGuest
