import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"
import styles from "../../../../styles/home.module.css"
import { FlexStyle, PaddingStyle } from '../../../../styles/globalStyles';
import Button from "../../../../components/Button/Button"
import {FiSearch} from "react-icons/fi"
import Destination from "./components/Destination";
import CheckInOut from "./components/CheckInOut";
import AddGuest from "./components/AddGuest";
import useProgressiveImage  from "../../../../hooks/useProgressiveImage/useProgressiveImage";
import BG from "../../../../image/background.jpg"
import { Pulse } from "../../../../components/Loader/Spinner";

const FilterContainer = styled.div `
    background-image: url(${props => props.backgroundImage});
    /* background-color: ${props => props.backgroundImage ? 'transparent' : '#333'}; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;


    @media (max-width: 480px) { 
        height: 90vh;
    }

    @media (min-width: 481px) {
        height: 100vh;
    }

    @media screen and (max-width: 850px) {
        position: relative;
        /* height: 70vh; */
    }
`

const FilterWrapper = styled.div `
    ${FlexStyle}
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const Header = styled.div `
    ${FlexStyle}
    flex-direction: column;

    h1 {
        color: var(--color-white);
        font-size: var(--font-big);
        font-weight: 600;
        margin: 0;
    }

    p {
        color: var(--color-white);  
        font-weight: 300; 
        margin: 0;
    }
`

const ButtonContainer = styled.div `
    display: none;

    @media screen and (min-width: 850px) {
        display: block;
    }

`

const MobileButton = styled.div `
    height: 35px;
    width: 35px;
    border-radius: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* right: 35px;
    top: 17px; */
    right: 40px;
    top: 30px;
    z-index: 1;
    transform: translate(-15%, -5%);

    svg {
        color: var(--color-primary);
    }


    @media screen and (min-width: 720px) and (max-width: 850px) {
        transform: translate(-60%, -5%);
    }

    @media screen and (min-width: 851px) {
        display: none;
    }
`

const FilterSearchWrapper = styled.div `
    display: flex;
    position: fixed;
    top: 0;
    ${PaddingStyle}
    width: 100%;
    margin-top: 0 !important;
    /* transition: opacity 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important; */
    transition: all  0.3s cubic-bezier(0.35, 0, 0.65, 1) 0s;
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 1;
    
    @media screen and (min-width: 850px) { 
        position: static;
        background: transparent;
        ${FlexStyle}
        justify-content: center;
        width: 100%;
        margin-top: 3rem;
        padding-top: 15px;
        padding-bottom: 0;
    }

`

const Fiter = styled.div `

    ${FlexStyle}
    height: 70px;
    width: 100%;
    background: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius-lg);
    margin-right: 1rem;
    padding: 10px;


    @media screen and (max-width: 849px) {
        width: 100%;
        border-radius: var(--border-radius-xtra);
        margin-right: 0;
        height: 60px;
        box-shadow: none;
        background: rgba(245, 245, 245, 1);
    }
`

// const Form = styled.form `
//     ${FlexStyle}
//     justify-content: center;
//     position: relative;
//     width: 100%;
// `

const SearchFilter = ({changeText, DefaultText,SubmitForm, openModal, handleModal, value, myRef, location, handleGuest, 
    guest, resetCount, setArrivalDeparture, openGuest, 
    text, handleOption}) => {
        const Medium = useMediaQuery("(max-width: 850px)")
        const ScrollRef = useRef()
        const loaded = useProgressiveImage(BG)


        //* ADD AND REMOVE BACKGROUND COLOR IF MOBILE AND REMOVE IF NOT MOBILE
        const handleScroll = useCallback(() => {
            if (Medium && ScrollRef?.current) {
                    ScrollRef.current.style.opacity = '1';
                    ScrollRef.current.style.backgroundColor = '#fff';
                    
                } 
                else {
                    if(ScrollRef?.current) {
                        ScrollRef.current.style.opacity = '1';
                        ScrollRef.current.style.backgroundColor = 'transparent';
                    }
                }
            
        }, [Medium]);

        //* MAKE SEARCH FILTER STICKY ON SCROLL AND FIXED ON MOBILE
        const handleScrollMobile = useCallback(() => {
            if (!Medium && ScrollRef?.current) {
                ScrollRef.current.style.position = 'sticky';
                ScrollRef.current.style.top = '0';
                //! Testing : Add background color to destination
                // if(window.scrollY > 520) {
                //     ScrollRef.current.childNodes[0].style.borderRadius = '32px';
                //     ScrollRef.current.childNodes[1].childNodes[0].style.borderRadius = '32px';
                // }
                // else {
                //     ScrollRef.current.childNodes[0].style.borderRadius = '7px';
                //     ScrollRef.current.childNodes[1].childNodes[0].style.borderRadius = '7px';
                // }
            }
            else {
                if(Medium && ScrollRef?.current) {
                    ScrollRef.current.style.position = 'fixed';
                    ScrollRef.current.style.top = '0';
                    ScrollRef.current.style.backgroundColor = '#fff';
                }
            }

        }, [Medium]);

        //* CALL: ADD AND REMOVE BACKGROUND 
        useEffect(() => {
            handleScroll()
        }, [Medium, handleScroll])

        //* CALL: MAKE SEARCH FILTER STICKY 
        useEffect(() => {
            window.addEventListener('scroll', handleScrollMobile)
        }, [Medium, handleScrollMobile])


        //* HIDE SCROLL BAR WHILE HEADER IMAGE IS STILL LOADING AT HOME PAGE
        useEffect(() => {
            if(!loaded) {
                document.body.style.overflow = 'hidden'
            } 
            return () => {
                document.body.style.overflow = 'auto'
            }
        }, [loaded])

        
    return (
        <>
            {loaded ? (
                <FilterContainer className={styles.HomeFilterBackground} backgroundImage={loaded}>
                    <FilterWrapper className="justify-center">
                        <Header>
                            <h1>Reserve Your Luxury Short Let</h1>
                            <p>Easy, Secure and Quick</p>
                        </Header>
                        <FilterSearchWrapper ref={ScrollRef}>
                        {/* <Form> */}
                            <Fiter>
                                <Destination  
                                    changeText={changeText} 
                                    DefaultText={DefaultText} 
                                    handleModal={handleModal} 
                                    openModal={openModal} 
                                    value={value} 
                                    myRef={myRef} 
                                    location={location} 
                                    handleOption={handleOption}
                                />
                                <CheckInOut setArrivalDeparture={setArrivalDeparture}/>
                                <AddGuest
                                    handleGuest={handleGuest} 
                                    guest={guest} 
                                    resetCount={resetCount} 
                                    openGuest={openGuest} 
                                    myRef={myRef}  
                                />
                            </Fiter>
                            <ButtonContainer className="mt-10">
                                <Button 
                                    title={text}
                                    type="submit" 
                                    background="var(--linear-primary)" 
                                    height="70px" 
                                    color="var(--color-white)" 
                                    padding="1rem"
                                    fontSize="1rem"
                                    className="flex"
                                    width="150px"
                                    hover="var(--color-primary)"
                                    hoverText="Search"
                                    MouseEnter={changeText} 
                                    MouseLeave={DefaultText}
                                    onClicks={SubmitForm}    
                                />
                            </ButtonContainer>
                            <MobileButton>
                                <Button  onClicks={SubmitForm}  icon={<FiSearch />}  width='100%' height='100%' padding='5px' borderRadius='21px' background='#fff'/>
                            </MobileButton> 
                            {/* </Form> */}
                        </FilterSearchWrapper>
                    </FilterWrapper>
                </FilterContainer>
            )
        
            : (
                <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Pulse  />
                </div>
            )}
        </>     
    )
}

export default React.memo(SearchFilter)
