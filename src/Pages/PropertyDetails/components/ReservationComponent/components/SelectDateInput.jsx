import { useSelector } from "react-redux"
import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import styled from "styled-components"
import CalenderModal from "../../../../../components/Calender/CalenderModal"
import { useState } from "react"


const InputContainer = styled.div`
    cursor: pointer;

    input {
        border: 0;
        width: 100%;
        outline: 0;
        background: transparent;
        font-size: var(--font-xtra-small-screen);
        font-weight: 400;
    }

    input::placeholder {
        color: var(--color-dark);
    }

`

const SelectDateInput = () => {
    const {reserve, reservation: {dates}, } = useSelector(state => state.reservationState)
    const {checkInDate, checkOutDate} = useSelector(state => state.ComponentState)

    const [show, setShow] = useState(false)


    return (
        <>
            {show &&
                (
                <CalenderModal  show={show} setShow={setShow}  theme='' top="12vh" width="fit-content" left="50%" calanders={1} disablebooked='true'  initial={{opacity: 0, y: 0, x: '100%'}} animate={{opacity: 1, y: 70, x: '50%'}} />
                )
            }
            <div>
                <InputContainer onClick={() => setShow(!show)}>
                    <span>{reserve === 'loading' ? <SkeletonLoader /> : 'Check-in'}</span>
                    {reserve === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_in_date ? dates[0]?.check_in_date : checkInDate ? checkInDate : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
                <InputContainer  onClick={() => setShow(!show)}>
                    <span>{reserve === 'loading' ? <SkeletonLoader /> : 'Check-out'}</span>
                    {reserve === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_out_date ? dates[0]?.check_out_date : checkOutDate ? checkOutDate : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
            </div>
        </>
    )
}

export default SelectDateInput
