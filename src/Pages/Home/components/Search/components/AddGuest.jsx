
import styled from 'styled-components'
import Guest from "./Guest"
import GuestDropdowns from './GuestDropdown';


const GuestDiv = styled.div `
    flex: 1;
    margin: 0 15px;
    position: relative;

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
