import { useSelector } from "react-redux"
import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import styled from "styled-components"
import CalenderModal from "../../../../../components/Calender/CalenderModal"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useMediaQuery from "../../../../../hooks/useMediaQuery/useMediaQuery"


const Wrapper = styled.div`
    display: flex;
    width: 100%;

    div:first-child {
        border-right: 0.867108px solid rgba(0, 0, 0, 0.3);
    }

    div {
        padding: 0.5rem ;
    }


    @media screen and (min-width: 769px) { 
        display: block;

        div:first-child {
            border-right: 0;
        }

        div {
            padding: 0;
        }

    }

`

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

    @media screen and (max-width: 768px) {
        flex: 1;

        span {
            font-size: var( --font-small);
            font-weight: 600;
            text-transform: uppercase;
        }
    }

`

const SelectDateInput = () => {
    const {checkin, checkout} = useParams()
    const {reserve, reservation: {dates}, } = useSelector(state => state.reservationState)
    // const {checkInDate, checkOutDate} = useSelector(state => state.ComponentState)
    const Query = useMediaQuery("(min-width: 769px)")

    const [show, setShow] = useState(false)

    const checkInD = checkin.slice(8);
    const checkOutD = checkout.slice(9);


    return (
        <>
            {show &&
                (
                <CalenderModal  show={show} setShow={setShow}  theme='' top="12vh" right={Query ? '250px' : '180px'}width="fit-content" calanders={1} disablebooked='true'  initial={{opacity: 0, y: 0, x: '100%'}} animate={{opacity: 1, y: 70, x: '50%'}} />
                )
            }
            <Wrapper>
                <InputContainer onClick={() => setShow(!show)}>
                    <span>{reserve === 'loading' ? <SkeletonLoader /> : 'Check-in'}</span>
                    {reserve === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_in_date ? dates[0]?.check_in_date : checkInD !== '' || null || '' ? checkInD : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
                <InputContainer  onClick={() => setShow(!show)}>
                    <span>{reserve === 'loading' ? <SkeletonLoader /> : 'Check-out'}</span>
                    {reserve === 'loading' ? <SkeletonLoader /> : <input type="text" value={dates[0]?.check_out_date ? dates[0]?.check_out_date : checkOutD !== '' || null || '' ? checkOutD : 'DD/MM/YYYY'} disabled /> }
                </InputContainer>
            </Wrapper>
        </>
    )
}

export default SelectDateInput
