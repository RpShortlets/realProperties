import { useRef, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle, ModalStyle } from "../../../styles/globalStyles"
import Button from "../../../components/Button/Button"
import styled from "styled-components"
import useAddGuestTotal from "../../../hooks/useAddGuestTotal/useAddGuestTotal"
import OpenGuestDropdown from "../../../components/OpenGuestDropdown"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../../redux/actions/componentState"
import styles from "../../../styles/home.module.css"
import CheckBox from "../../../utils/FormElement/CheckBox"

const Reservations = styled.div `
    margin: max(1vw, 2rem) 0;
    transition: all 0.8s;
    

    @media screen and (min-width: 769px) {
        margin: 0;
        grid-column: 5/7;
        grid-row: 1/4;
        position: ${({position}) => position};
    }
    
`

const ReservationBody = styled.div `
    border: 1px solid rgba(0, 0, 0, 0.22);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem 1rem;

    @media screen and (min-width: 769px) {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        filter: none;
    }

`

const ReservationContent = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:nth-child(2) {
        display: none;
    }

    @media screen and (min-width:  769px) {
        display: block;
        > div:nth-child(2) {
            display: block;
            border: 1px solid rgba(33, 8, 8, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            margin: max(1vw,1rem) 0 0.7rem;
            /* padding: 10px; */

            > div:first-child {
                ${FlexStyle}
                border-bottom: 1px solid rgba(33, 8, 8, 0.5);

                > div {
                    flex: 1;
                    padding: 10px 10px 5px 10px;
                }

                > div:first-child {
                    border-right: 1px solid rgba(33, 8, 8, 0.5);
                }

                span {
                    text-transform: uppercase;
                }
                span:first-child {
                    display: block;
                    font-size: var(--font-xtraLarge-small);
                    font-weight: 600;
                }

                span:nth-child(2) {
                    font-size: 10px;
                    font-weight: 500;
                }
            }

            > div:nth-child(2) {
                padding: 7px 10px 10px;
                position: relative;
                cursor: pointer;

                > div:first-child {
                    ${FlexStyle}
                    justify-content: space-between;
                }

                h4 {
                    font-size: var(--font-xtraLarge-small);
                    font-weight: 600;
                    text-transform: uppercase;
                    margin: 0;
                }

                span {
                    font-size: 10px;
                    font-weight: 500;
                }
            }
        }        
    }


`

const ValueAdded = styled.div `
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        border: 1px solid rgba(33, 8, 8, 0.5);
        box-sizing: border-box;
        border-radius: 5px;
        position: relative;

        h4 {
            font-size: var(--font-xtra-small-screen);
            font-weight: 500;
            margin: 0;
        }

        > div {
            padding: 10px;
        }

    }


`

const Condition = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: block;
        ${FlexStyle}
        justify-content: center;

        p {
            font-size: var(--font-xtra-small-screen);
            margin: 0;
        }
    }
`

const PriceBody =  styled.div `
    display: none;

    @media screen and (min-width:769px) {
        display: block;
        margin: max(1vw, 1rem) 0;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
                display: flex;
                justify-content: space-between;
                margin: 0.2rem 0;

                p:first-child {
                    text-decoration: underline;
                }
            }

            p {
                margin: 0;
                font-size: var(--font-xtra-small-screen);
            }

            div:last-child {
                margin: max(1vw, 1rem) 0 0 0;
                
                p {
                    font-weight: 600;
                    text-decoration: none;
                }
            }
        }

    }
`

const ReserveButton = styled.div `
    margin: 0;
    flex: 1;

    @media screen and (min-width: 769px) {
        margin: max(.6vw, .9rem) 0; 
    }   

`
const ModalDiv = styled.div `
    ${ModalStyle}
    z-index: 1;

    > div {
        padding: 1rem;

        
    }

    form div {
        ${FlexStyle}
        justify-content: space-between;    
    }
`

const initiateState = {CulinaryArtist: "", RealCabsTaxis: "" }


const ReservationComponent = ({dates,setOpenGuest, openGuest, modalRef, openService, setOpenService, setshow, show, Query}) => {
    const dispatch = useDispatch();
    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const GeneralInfo = general_info?.map((data) => data)
    const [checkboxes, setCheckboxes] = useState(initiateState)
    const countAdultMinus = 1;
    const countAdultAdd = GeneralInfo[0]?.allowed_adult;
    const countAddChild = GeneralInfo[0]?.allowed_child;
    const countMinusChild = 1;
    const reserveRef = useRef();
    const TotalGuest = useAddGuestTotal({adultcount, childrencount});



    const handleChange = (e) => {
        setCheckboxes({...checkboxes, [e.target.name]: e.target.checked})
    }

    const scrollHandler = () => {
        if(window.scrollY >= 1327) {
            if(reserveRef.current) {
                reserveRef.current.style.position = 'relative'
                reserveRef.current.style.bottom = '-50%'
            }
            
        }else {
            if(reserveRef.current) {
                reserveRef.current.style.position = 'static'
            }
        }
    }

    window.addEventListener('scroll', scrollHandler)


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
        <Reservations ref={reserveRef}>
            <ReservationBody>
                <ReservationContent>
                    <div style={{flex: '1'}}>
                        <span>&#8358;{GeneralInfo[0]?.price?.toLocaleString()}/night</span>
                    </div>
                    <div>
                        <div>
                            <div>
                                <span>Check-in</span>
                                <span>{dates[0] ? dates[0] : 'DD/MM/YYYY'}</span>
                            </div>
                            <div>
                                <span>Check-out</span>
                                <span>{dates[1] ? dates[1] : 'DD/MM/YYYY'}</span>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setOpenGuest(!openGuest)}> 
                                <div>
                                    <h4>Guests</h4>
                                    <span>{TotalGuest > 1 ? TotalGuest : countAdultMinus } {GeneralInfo[0]?.allowed_guest > 1 ? 'guests' : 'guest' }</span> 
                                </div>
                                <div>
                                    {openGuest ? (<FiChevronUp />) : (<FiChevronDown />)}
                                </div>
                            </div>
                            <OpenGuestDropdown  
                                openGuest={openGuest} 
                                myRef={modalRef} 
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
                                top="51.7px" 
                                width= "100%" 
                                left='0'   
                                border="1px solid rgba(33, 8, 8, 0.22)"
                                
                            />
                        </div>
                    </div>
                    <ValueAdded>
                        <div> 
                            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}  onClick={() => setOpenService(!openService)}>
                                <div>
                                    <h4>Additional Services</h4>
                                </div>
                                {openService ? (<FiChevronUp />) : (<FiChevronDown />)}
                            </div>
                            {openService && (
                                <ModalDiv  top="36px" ref={modalRef} width= "100%" left='0'  border="1px solid rgba(33, 8, 8, 0.22)">
                                    <div>
                                        <CheckBox  onChange={handleChange} label="Culinary Artist" name="CulinaryArtist" value="CulinaryArtist"/>
                                        <CheckBox  onChange={handleChange} label="Real-Cabs/Taxis" name="RealCabsTaxis" value="RealCabsTaxis"/>    
                                    </div>
                                </ModalDiv>
                            )}
                        </div>
                    </ValueAdded>
                    <ReserveButton>
                        <Button onClicks={Query ? "" : (() => setshow(!show))} title={Query ? 'Reserve' : 'Proceed'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                    </ReserveButton>
                    <Condition>
                        <p>You won’t be charged yet</p>
                    </Condition>
                    <PriceBody>
                        <div>
                            <div>
                                <p>
                                    &#8358;{GeneralInfo[0]?.price?.toLocaleString()}
                                    x
                                    3nights
                                </p>
                                <p>
                                    &#8358;40,000
                                </p>
                            </div>
                            <div>
                                <p>Cleaning fee</p>
                                <p>&#8358;50</p>
                            </div>
                            <div>
                                {checkboxes?.CulinaryArtist && (
                                    <>
                                        <p>{checkboxes?.CulinaryArtist && 'Culinary Artist'}</p>
                                        <p>&#8358;60</p>
                                    </>
                                )}
                            </div>
                            <div>
                                {checkboxes?.RealCabsTaxis && (
                                    <>
                                        <p>{checkboxes?.RealCabsTaxis && 'Real-Cabs/Taxis'}</p>
                                        <p>&#8358;60</p>
                                    </>
                                )}
                            </div>
                            <div>
                                <p>Total</p>
                                <p>&#8358;485</p>
                            </div>
                        </div>
                    </PriceBody>
                </ReservationContent>
            </ReservationBody>
        </Reservations>
    )
}

export default ReservationComponent
