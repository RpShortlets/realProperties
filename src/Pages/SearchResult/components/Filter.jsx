import OpenGuestDropdown from "../../../components/OpenGuestDropdown"
import { useSelector } from "react-redux"
import { FiSearch,} from "react-icons/fi"
import { BsCalendarWeek } from "react-icons/bs"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import Button from "../../../components/Button/Button"
import OpenDestination from "../../../components/Dropdowns/OpenDestination"
import { Destlocation } from "../../../components/Dropdowns/data/destinationLocation"
import styled, {css} from "styled-components/macro"
import { FlexStyle, PaddingStyle } from "../../../styles/globalStyles"
import CalenderModal from "../../../components/Calender/CalenderModal"


const GeneralDivStyle = css`
    border-radius: 4px;
    height: 50px;
    position: relative;
    background: var(--color-secondary);
    /* ${FlexStyle} */
    justify-content: center;
    color: var(--color-dark);
    cursor: pointer;
    flex: 1;

    span {
        font-size: 10px;
    }

`

const Filter = styled.div `
    display: none;    

    @media screen and (min-width: 769px) { 
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1;
        top: 0;
        ${FlexStyle}
        ${PaddingStyle}
        justify-content: center;
        margin-top: .5rem;


        > div {
            width: 100%;
            display: flex;
            align-items: center;
        }

        span {
            font-weight: 300;
        }
    }

`

const Destination = styled.div `
    grid-column: 1/3;
    ${GeneralDivStyle}
    position: relative;
    z-index: 12;

`

const DestinationDiv = styled.div `
    display: flex;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    padding: 0 max(2vw, 1rem);
    opacity: 1;

    :hover {
        opacity: 0.8;
    }

    span{
        font-size: var( --font-xtra-small-screen);
        margin-left: .5rem;
    }

    div:last-child label { 
        color: var(--color-black);
    }
`


const DateContainer = styled.div `
    ${GeneralDivStyle}
    margin: 0 1rem;
    ${FlexStyle}
    flex: 2;
`


const Dates = styled.div `
    
    display: flex;
    align-items: center;
    flex: 1;

`

const DateWrapper = styled.div `
    ${FlexStyle}
    justify-content: center;
    opacity: 1;
    flex: 1;

    :hover {
        opacity: 0.8;
    }

    .filterDates {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    
`
const Guest = styled.div `
    ${GeneralDivStyle}
`

const GuestClick = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    opacity: 1;

    :hover {
        opacity: 0.8;
    }
`


const FilterComponent = ({showCalender, setShowCalender, openModal, setOpenModal, value, myRef, handleOption, handleGuest, guest, setguest, TotalGuest,MinusAdult, MinusChildren, AddAdult, AddChildren, handlesubmit, countAddChild, countMinusChild, countAdultMinus, countAdultAdd, styles }) => {
    const {adultcount, childrencount, useCheckInDate, useCheckOutDate, searchValue} = useSelector(state => state.ComponentState)

    

    const searchDayIn = useCheckInDate?.split(',')[0];
    const seacrhMonthIn = useCheckInDate?.split(',')[1]?.slice(0, 4);
    const searchYearIn = useCheckInDate?.split(',')[2]
    const searchDayNumberIn = useCheckInDate?.split(',')[1].slice(4)
    const searchDayOut= useCheckOutDate?.split(',')[0];
    const seacrhMonthOut = useCheckOutDate?.split(',')[1]?.slice(0, 4);
    const searchYearOut = useCheckOutDate?.split(',')[2]
    const searchDayNumberOut = useCheckOutDate?.split(',')[1].slice(4)
    
    return (

        <Filter>
            <div>
                <Destination>
                    <DestinationDiv onClick={() => setOpenModal(!openModal)}>
                        <FiSearch size={16} />
                        <span>{searchValue ? searchValue : 'Destination'}</span>
                    </DestinationDiv>
                    {openModal && (
                        <OpenDestination 
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            myRef={myRef}
                            widths='28vw'
                            top='60px'
                            location={Destlocation}
                            handleOption={handleOption}
                            color='#333'
                            zIndex='0'
                        />
                    )}
                </Destination>
                <DateContainer style={{position: 'relative'}}>
                    <Dates style={{borderRight: '1px solid var(--color-primary)', height: '100%'}} onClick={() => setShowCalender(!showCalender)}>
                        {useCheckInDate && useCheckOutDate ? (
                            <DateWrapper>
                                <div style={{marginRight: '1rem'}}>
                                    <BsCalendarWeek fontSize={16} color="" />
                                </div>
                                <div>
                                    <div>
                                        <span>{searchDayNumberIn}</span>
                                        <span>{seacrhMonthIn}</span>
                                        <span>{searchYearIn}</span>
                                    </div>
                                    <div>
                                        <span style={{color: 'var(--color-primary)'}}>{searchDayIn}</span>
                                    </div>
                                </div>
                                
                            </DateWrapper>
                            
                        ) : (
                            <div style={{display: 'flex', alignItems: 'center', padding: '20px'}} onClick={() => setShowCalender(!showCalender)}>
                                <BsCalendarWeek fontSize={18} color="" />
                                <span style={{marginLeft: '.5rem'}}>
                                    Check-in
                                </span>
                            </div>
                            
                        )}
                    </Dates>
                    <Dates onClick={() => setShowCalender(!showCalender)}>
                        {useCheckInDate && useCheckOutDate ? (
                            <DateWrapper>
                                <div style={{marginRight: '1rem'}}>
                                    <BsCalendarWeek fontSize={18} color="" />
                                </div>
                                <div>
                                    <div>
                                        <span>{searchDayNumberOut}</span>
                                        <span>{seacrhMonthOut}</span>
                                        <span>{searchYearOut}</span>
                                    </div>
                                    <div>
                                        <span style={{color: 'var(--color-primary)'}}>{searchDayOut}</span>
                                    </div>
                                </div>
                                    
                            </DateWrapper>
                        ) : (
                            <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}  onClick={() => setShowCalender(!showCalender)}>
                                <BsCalendarWeek fontSize={16} color="" />
                                <span style={{marginLeft: '.5rem'}}>
                                    Check-out
                                </span>
                            </div>
                        
                        )}
                    </Dates>
                    {showCalender && (
                        <CalenderModal show={showCalender} setShow={setShowCalender} theme="" left="15%" right="30%" calanders={2} initial={{opacity: 0, y: 0, x: 50}} animate={{opacity: 1, y: 5}}/>
                    )}
                </DateContainer>
                <Guest style={{marginRight: '.6rem'}}>
                    <GuestClick onClick={() => setguest(!guest)}>
                        <div style={{marginRight: '1rem'}}>
                            {adultcount || childrencount ? (
                                <div>
                                    <span style={{fontWeight: 500}}> {TotalGuest}</span>
                                </div>
                            ) :
                                <AiOutlineUsergroupAdd fontSize={16} color="" />
                            }
                        </div>
                        <div >
                            <div>
                                <span>{adultcount || childrencount ? `${TotalGuest > 1 ? 'Guests' : 'Guest'}` : 'Add Guest'}</span>
                            </div>
                            
                            {/* {adultcount || childrencount ? (
                                <div>
                                    <span style={{fontWeight: 500}}> {TotalGuest}</span>
                                </div>
                            ): ('')} */}
                            
                        </div>
                    </GuestClick>
                    {guest && (
                        <OpenGuestDropdown 
                            openGuest={guest} 
                            width='28vw'
                            top='60px'
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
                            setOpenGuest={setguest}
                            zIndex='0'                            
                        />
                    )}
                </Guest>
                <div style={{flex: 1, height: '50px', }}>
                    <Button onClicks={handlesubmit}  borderRadius='5px' fontSize='var(--font-xtra-small-screen)' width='100%' height='100%' title='SEARCH' border='none' background='var(--linear-primary)' color='var(--color-white)' />
                </div>
            </div>
        </Filter>
    )
}

export default FilterComponent
