import {useDispatch, useSelector} from "react-redux"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../../../redux/actions/componentState"
import styles from "../../../../../styles/home.module.css"
import OpenGuestDropdown from "../../../../../components/OpenGuestDropdown"





const GuestDropdowns = ({openGuest, handleGuest, myRef }) => {
        const dispatch = useDispatch();
        const {adultcount, childrencount} = useSelector(state => state.ComponentState)
        const countAdultMinus = 1;
        const countAdultAdd = 9;
        const countAddChild = 5;
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
        {/* <CSSTransition in={openGuest}
                    mountOnEnter
                    unmountOnExit 
                    timeout={200}
                    classNames="search"
                >
                    <> */}
                    
            <OpenGuestDropdown 
                openGuest={openGuest} 
                handleGuest={handleGuest} 
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
                width='30vw'
                left="-65px"
            />
                    
        </>
    )
}

export default GuestDropdowns
