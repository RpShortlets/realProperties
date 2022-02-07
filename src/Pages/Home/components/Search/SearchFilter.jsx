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
import BG from "../../../../image/background.webp"
import { Pulse } from "../../../../components/Loader/Spinner";
import { checkScrollState } from '../../../../redux/actions/componentState';
import { useDispatch } from "react-redux";
import { motion, useAnimation } from 'framer-motion';


const FilterContainer = styled.div `
    background-image: url(${props => props.backgroundImage});
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
        position: absolute;
        right: 10%;
        top: 21px;

    @media screen and (min-width: 769px) {
        display: block;
        position: static;
    }

`

const FilterSearchWrapper = styled.div `
    display: flex;
    position: relative;
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


    @media screen and (max-width: 768px) {
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

const SearchFilter = ({SubmitForm, openModal, setOpenModal, handleModal, value, myRef, location, handleGuest, 
    guest, resetCount, openGuest, handleOption, homeDateValue, setHomeDateValue, setOpenGuest, isOpenCalender, setIsOpenCalender, setOpenDrawer}) => {
        const Medium = useMediaQuery("(max-width: 850px)")
        const Query = useMediaQuery("(min-width: 769px)")
        const dispatch = useDispatch();
        let controls = useAnimation()
        const ScrollRef = useRef()
        const loaded = useProgressiveImage(BG)

        //* ADD AND REMOVE BACKGROUND COLOR IF MOBILE AND REMOVE IF NOT MOBILE
        // const handleScroll = useCallback(() => {
        //     if (Medium && ScrollRef?.current) {
        //             ScrollRef.current.style.opacity = '1';
        //             ScrollRef.current.style.backgroundColor = '#fff';
                    
        //         } 
        //         else {
        //             if(ScrollRef?.current) {
        //                 ScrollRef.current.style.opacity = '1';
        //                 ScrollRef.current.style.backgroundColor = 'transparent';
        //             }
        //         }
            
        // }, [Medium]);

        //* MAKE SEARCH FILTER STICKY ON SCROLL AND FIXED ON MOBILE
        const handleScrollMobile = useCallback(() => {
            if(ScrollRef?.current) {
                if(window.scrollY > 362) {
                    dispatch(checkScrollState(true))
                    controls.start(i => ({
                        opacity: 0,
                        scale: .5,
                        transition: {duration: .1,
                            type: {type: 'spring'}
                        },
                        
                    }))
                    
                } else {
                    dispatch(checkScrollState(false))
                    controls.start(i => ({
                        opacity: 1,
                        scale: 1,
                        transition: {duration: .1,
                            type: {type: 'spring'}
                        }
                    }))
                }
            }
            // if (!Medium && ScrollRef?.current) {
            //     ScrollRef.current.style.position = 'sticky';
            //     ScrollRef.current.style.backgroundColor = 'transparent';
            //     ScrollRef.current.style.top = '0';
            //     //! Testing : Add background color to destination
            //     if(window.scrollY > 520 && Medium) {
            //         console.log(window.scrollY)
            //         ScrollRef.current.childNodes[0].style.borderRadius = '32px';
            //         ScrollRef.current.childNodes[1].childNodes[0].style.borderRadius = '32px';
            //     }
            //     else if(window.scrollY > 10 && !Medium) {
            //         ScrollRef.current.childNodes[0].style.borderRadius = '32px';
            //         ScrollRef.current.childNodes[1].childNodes[0].style.borderRadius = '32px';
            //     }else {
            //         ScrollRef.current.childNodes[0].style.borderRadius = '7px';
            //         ScrollRef.current.childNodes[1].childNodes[0].style.borderRadius = '7px';
            //     }
            // }
            // else {
            //     if(Medium && ScrollRef?.current) {
            //         ScrollRef.current.style.position = 'fixed';
            //         ScrollRef.current.style.top = '0';
            //         ScrollRef.current.style.backgroundColor = '#fff';
            //     }
            // }

        }, [dispatch, controls]);

        //* CALL: ADD AND REMOVE BACKGROUND 
        // useEffect(() => {
        //     handleScroll()
        // }, [Medium, handleScroll])

        // //* CALL: MAKE SEARCH FILTER STICKY 
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
                        <FilterSearchWrapper 
                            ref={ScrollRef} 
                            paddingleft='true' 
                            paddingRight='true'
                            as={motion.div}
                            animate={controls}
                        >
                        {/* <Form> */}
                            <Fiter>
                                <Destination  
                                    handleModal={handleModal} 
                                    openModal={openModal} 
                                    value={value} 
                                    myRef={myRef} 
                                    location={location} 
                                    handleOption={handleOption}
                                    setOpenModal={setOpenModal}
                                />
                                
                                {/* <HomeCalender /> */}
                                
                                <CheckInOut setIsOpenCalender={setIsOpenCalender} isOpenCalender={isOpenCalender} homeDateValue={homeDateValue} setHomeDateValue={setHomeDateValue}/>
                                <AddGuest
                                    handleGuest={handleGuest} 
                                    guest={guest} 
                                    resetCount={resetCount} 
                                    openGuest={openGuest} 
                                    setOpenGuest={setOpenGuest}
                                    myRef={myRef}  
                                />
                            </Fiter>
                            <ButtonContainer className="mt-10">
                                <Button 
                                    title={Query ? 'Find Shortlets' : ''}
                                    type="submit" 
                                    background={Query ? "var(--linear-primary)" : 'var(--color-white)'} 
                                    height={Query ? '70px' : '3rem'} 
                                    color={Query ? 'var(--color-white)' : 'var(--color-primary)'}
                                    padding="1rem"
                                    fontSize="1rem"
                                    className="flex"
                                    width={Query ? '150px' : '3rem'}
                                    hover={Query && "var(--color-primary)"}
                                    hoverText="Search"
                                    onClicks={Query ? SubmitForm: ()=> setOpenDrawer(prev => !prev)} 
                                    border= 'none' 
                                    borderRadius={Query ? '' : '57px'}
                                    icon={!Query && <FiSearch />} 
                                    display={!Query && 'flex'}
                                    alignT={!Query && 'center'}
                                    justify={!Query && 'center'}
                                />
                            </ButtonContainer>
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
