import {useDispatch, useSelector} from "react-redux"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../../../redux/actions/componentState"
import styles from "../../../../../styles/home.module.css"
import OpenGuestDropdown from "../../../../../components/OpenGuestDropdown"





const GuestDropdowns = ({openGuest, handleGuest, myRef, setOpenGuest }) => {
        const dispatch = useDispatch();
        const {adultcount, childrencount} = useSelector(state => state.ComponentState)
        const countAdultMinus = 1;
        const countAdultAdd = 4;
        const countAddChild = 3;
        const countMinusChild = 1;

        const AddAdult = () => {
            if(adultcount < countAdultAdd) {
                dispatch(incrementAdult())
            }
        }

        const MinusAdult = () => {
            if(adultcount === countAdultMinus) {
                return;
            } else {
                dispatch(decrementAdult())
            }
        }

        
        const AddChildren = () => {
            if(childrencount < countAddChild) {
                dispatch(incrementChildren())
            }
        }

        const MinusChildren = () => {
            if(childrencount === countMinusChild) {
                return;
            } else {
                dispatch(decrementChildren())
            }
        }

    return (
        <>
                    
            <OpenGuestDropdown 
                openGuest={openGuest} 
                myRef={myRef} 
                adultcount={adultcount} 
                styles={styles} 
                MinusAdult={MinusAdult} 
                childrencount={childrencount} 
                AddAdult={AddAdult} 
                MinusChildren={MinusChildren} 
                AddChildren={AddChildren}
                countAdultMinus={countAdultMinus}
                countAdultAdd={countAdultAdd}
                countMinusChild={countMinusChild}
                countAddChild={countAddChild}
                setOpenGuest={setOpenGuest}
                width='30vw'
                left="-65px"
                zIndex='0'
            />
                    
        </>
    )
}

export default GuestDropdowns
