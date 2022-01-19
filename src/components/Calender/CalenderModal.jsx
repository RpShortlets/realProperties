
import Modal  from "../Modal/Modal"
import StaticCalender from "./StaticCalender"



const CalenderModal = ({show, setShow, theme}) => {
    return (
        <Modal show={show} setShow={setShow} theme={theme} top="12vh" width="fit-content">
            <StaticCalender />
        </Modal>
    )
}

export default CalenderModal
