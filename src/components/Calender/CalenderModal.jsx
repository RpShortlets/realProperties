
import Modal  from "../Modal/Modal"
import StaticCalender from "./StaticCalender"
import Button from "../Button/Button"
import { useDispatch } from 'react-redux';
import { checkInDate, checkOutDate, newCheckInDate, newCheckOutDate } from "../../redux/actions/componentState";



const CalenderModal = ({show, setShow, theme, left, calanders, disablebooked, initial, animate}) => {
    const dispatch = useDispatch();

 

    const handleReset = () => {
        dispatch(checkInDate(null))
        dispatch(checkOutDate(null))
        dispatch(newCheckInDate(null))
        dispatch(newCheckOutDate(null))
        setShow(false)
    }
    return (
        <Modal show={show} setShow={setShow} theme={theme} top="12vh" width="fit-content" left={left} initial={initial} animate={animate}>
            <StaticCalender calendars={calanders} disablebooked={disablebooked}/>
            <div>
                <Button  onClicks={handleReset} title="Clear dates" background="transparent" border='none' fontSize='var(--font-xtra-small-screen)'/>
            </div>
        </Modal>
    )
}

export default CalenderModal
