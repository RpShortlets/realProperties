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
    const {status, reservation: {dates}, } = useSelector(state => state.reservationState)
    const {useCheckInDate, useCheckOutDate} = useSelector(state => state.ComponentState)

    const [show, setShow] = useState(false)


    return (
        <>
            <CalenderModal show={show} setShow={setShow} theme='' top="12vh" width="fit-content" left="80%" calanders={1} />
            <div>
                <InputContainer onClick={() => setShow(!show)}>
                    <span>{status === 'loading' ? <SkeletonLoader /> : 'Check-in'}</span>
                    {status === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_in_date ? dates[0]?.check_in_date : useCheckInDate ? useCheckInDate : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
                <InputContainer  onClick={() => setShow(!show)}>
                    <span>{status === 'loading' ? <SkeletonLoader /> : 'Check-out'}</span>
                    {status === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_out_date ? dates[0]?.check_out_date : useCheckOutDate ? useCheckOutDate : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
            </div>
        </>
    )
}

export default SelectDateInput
