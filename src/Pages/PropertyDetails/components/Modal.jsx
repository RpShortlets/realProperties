import { SkeletonLoader } from "../../../components/Loader/Skeleton"
import Modal from "../../../components/Modal/Modal"
import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components"
import { FlexStyle } from "../../../styles/globalStyles"
import SelectDateInput from "../components/ReservationComponent/components/SelectDateInput"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import OpenGuestDropdown from "../../../components/OpenGuestDropdown"
import useAddGuestTotal from "../../../hooks/useAddGuestTotal/useAddGuestTotal"
import { decrementAdult, decrementChildren, incrementAdult, incrementChildren } from "../../../redux/actions/componentState"
import styles from "../../../styles/home.module.css"
import ValueAddedServices from "./ReservationComponent/components/ValueAddedServices"
import Button from "../../../components/Button/Button"
import Prices from "./ReservationComponent/components/Prices"
import RentalServices from "./ReservationComponent/components/RentalServices"

const Wrapper = styled.div `
    margin: 1rem 0;
    width: 100%;
    height: 100%;

`

const PriceNight = styled.div `
    span {
        font-size: var(--font-small);
        font-weight: 600;
    }
`

const Container = styled.div `
    margin-top: 1rem;
`

const GuestandDates = styled.div `
    ${FlexStyle}
    flex-direction: column;
    background: #FFFFFF;
    padding: 10px;
    border: 0.908854px solid rgba(33, 8, 8, 0.5);
    border-radius: 4.54427px;

    .guestModal {
        /* display: flex; */
        position: relative;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        
        div { 
            
        }

        > div:first-child {
            display: flex;
            padding: 0.5rem;
            flex: 1;
            h4 {
                font-size: var( --font-small);
                font-weight: 600;
                text-transform: uppercase;
                margin: 0;
            }

            > div:last-child { 
                flex: 1; 
                padding: 0.5rem;
                ${FlexStyle}
                align-items: center;
                justify-content: end;
        

            svg {
                font-size: var(--font-big);
                color: var(--color-dark);
            }
        }
        }

        

    }
`

const Condition = styled.div `
    display: block;
    margin: 1rem 0;
    ${FlexStyle}
    justify-content: center;

    p {
        font-size: var(--font-xtra-small-screen);
        margin: 0;
    }
    
`


const MobileModal = ({show, selectedCar, setshow, openGuest, setOpenGuest, modalRef, handleChange,
    handleSubmit, checkboxes, openService, setOpenService, TotalAdditionalServices, TotalCarAndDriverPrice,


    Query,  setOpenCar,
    openCar, setDriver, driver, carlength,
    setRadio, radio, driverlengthValue,
    carlengthValue, showBenzRef, BenZ, resetData, addDriverLength,
    minusDriverLength, handlecheckbox, addDays, minusDays, showSuvRef, Suv, Camry, showCamryRef, handleBenz

}) => {

    const dispatch = useDispatch();
    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const {reserve, reservation: {price, summary_details, max_guest } } = useSelector(state => state.reservationState)

    const GeneralInfo = max_guest && max_guest[0]?.allowed_guest; 
    const AdultMinuss =  max_guest &&  max_guest[0]?.allowed_adult
    const AdultAdds = max_guest && max_guest[0]?.allowed_child  
    const countAdultMinus = 1;
    const countAdultAdd =  reserve === 'succeeded' && AdultMinuss
    const countAddChild =  reserve === 'succeeded' && AdultAdds
    const countMinusChild = 1;
    const  TotalGuest = useAddGuestTotal({adultcount, childrencount, AdultMinuss});

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
        if(adultcount === countAdultAdd) {
            return;
        } else if(childrencount < countAddChild) {
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
        <Modal  height='90%' overFlow='scroll' zIndex="11" show={show} setShow={setshow} theme="" left="-30px" top="10vh" width="90%" calanders={2} initial={{opacity: 0, y: 0, x: 50}} animate={{opacity: 1, y: 5}}>
            <Wrapper>
                <PriceNight style={{flex: '1'}}>
                    <span>&#8358;{reserve === 'loading' ? <SkeletonLoader /> : `${price[0]?.price?.toLocaleString()}/night `}</span>
                </PriceNight>
                <Container>
                    <GuestandDates> 
                        <SelectDateInput/>
                        <div className="guestModal">
                            <div onClick={() => setOpenGuest(!openGuest)}>
                                <div>
                                    <h4>Guests</h4>
                                    <span>{reserve === 'loading' ? <SkeletonLoader /> : TotalGuest > 1 ? TotalGuest : countAdultMinus } { GeneralInfo > 1 ? 'guests' : 'guest' }</span> 
                                </div>
                                <div>
                                    {openGuest ? (<FiChevronUp  fontSize={20}/>) : (<FiChevronDown  fontSize={20}/>)}
                                </div>
                            </div>
                                <OpenGuestDropdown  
                                    openGuest={openGuest} 
                                    setOpenGuest={setOpenGuest}
                                    myRef={modalRef} 
                                    adultcount={adultcount} 
                                    styles={styles} 
                                    MinusAdult={MinusAdult} 
                                    childrencount={childrencount} 
                                    AddAdult={AddAdult} 
                                    // DisabledChild={disableChild}
                                    AllowAdult={AdultMinuss}
                                    MinusChildren={MinusChildren} 
                                    AddChildren={AddChildren} 
                                    countAdultMinus={countAdultMinus}
                                    countAdultAdd={countAdultAdd}
                                    countMinusChild={countMinusChild}
                                    countAddChild={countAddChild}
                                    top="75px" 
                                    width= "100%" 
                                    left='0'   
                                    border="1px solid rgba(33, 8, 8, 0.22)"
                                    
                                />
                        </div> 
                    </GuestandDates>
                    <ValueAddedServices 
                        reserve={reserve} 
                        // modalRef={modalRef} 
                        checkboxes={checkboxes} 
                        show={show}
                        handleChange={handleChange} 
                        openService={openService} 
                        setOpenService={setOpenService}
                    />
                    <RentalServices 
                        openCar={openCar} 
                        setOpenCar={setOpenCar} 
                        showBenzRef={showBenzRef} 
                        BenZ={BenZ} 
                        handleBenz={handleBenz}
                        showCamryRef={showCamryRef}
                        Camry={Camry}
                        showSuvRef={showSuvRef}
                        Suv={Suv}
                        selectedCar={selectedCar}
                        driver={driver}
                        setDriver={setDriver}
                        carlength={carlength}
                        addDays={addDays}
                        minusDays={minusDays}
                        carlengthValue={carlengthValue}
                        handlecheckbox={handlecheckbox}
                        setRadio={setRadio}
                        radio={radio}
                        resetData={resetData}
                        addDriverLength={addDriverLength}
                        minusDriverLength={minusDriverLength}
                        driverlengthValue={driverlengthValue}
                        show={show}
                    
                    />
                    <div style={{margin: '1rem 0'}}>
                        <Button  disabledBG="var(--linear-primary)" onClicks={handleSubmit} title='Reserve' border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                    </div>
                    <Condition>
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : 'You won’t be charged yet'}</p>
                    </Condition>
                    <Prices 
                        price={price} 
                        show={show}
                        summary_details={summary_details} 
                        selectedCar={selectedCar}
                        reserve={reserve}
                        TotalAdditionalServices={TotalAdditionalServices}
                        TotalCarAndDriverPrice={TotalCarAndDriverPrice}
                    
                    />
                    
                    
                </Container>
            </Wrapper>
        </Modal>
    )
}

export default MobileModal
