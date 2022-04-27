import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import { CompanyLogo, FilterIcon, HomeIcon } from '../../Svg/svg';
import Button from "../../components/Button/Button"
import { setOpenDrawer, setShowMobileReserveModal } from '../../redux/actions/componentState';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { AiOutlineMinus } from 'react-icons/ai'
import {MainNav} from "./Dropdown/MainNav"
import { motion, AnimatePresence } from "framer-motion"

const ItemIds = [ 
    {
        id: 0,
        title: 'About Us',
        path: '/about'
    },
    {
        id: 1,
        title: 'Gallery',
        path: '/gallery'
    },
    {
        id: 2,
        title: 'Hot Deals',
        path: '/coming-soon'
    },
    {
        id: 3,
        title: 'Customer Support',
        path: '/customer-support'
    }
];

const NavBar = styled.nav `
    position: sticky;
    top: 0;
    z-index: 12;
    width: 100%;
    background: var(--color-white);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
    ${FlexStyle}
    ${PaddingStyle}
`

const NavItems =  styled.div `
    ${FlexStyle}
    width: 100%;
    justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between !important;
    -ms-justify-content: space-between !important;
    -o-justify-content: space-between !important;

    margin: 7px 0;

    > div:first-child,
    > div:nth-child(2),
    > div:last-child  {
        -moz-flex: 1;
        -ms-flex: 1;
        -o-flex: 1;
        flex:1; 
        -webkit-box-flex:1; 
        -webkit-flex:1;
    }

    a {
        color: var(--color-primary);
        display: flex;
        align-items: center;
    }

    span {
        font-size: var(--font-xtra-small);
        color: var(--color-primary);
        margin-left: -10px !important;
        margin-bottom: -9px !important;
        font-weight: 600;
        word-spacing: -2px;

    }

    .navModal { 
        ${FlexStyle};
        span {
            margin-left: -15px;
            margin-bottom: -3px;
            font-weight: 600;
        }
    }

    .mobileMiniSearch {
        width: 100%;
        height: 45px;
        background: var(--color-light-gray);
        flex: 20;
        -webkit-box-flex: 20 !important;
        -webkit-flex: 20 !important;
        margin: 0 0.5rem;
        border-radius: 26px;
        width: 100%;
        padding: min(1rem, .3rem);
        cursor: pointer;

        div {
            ${FlexStyle};
            justify-content: center;
            height: 100%;
        }

        p {
            margin: 0;
            font-size: var( --font-small);
        }

        p:first-child { 
        
        }

        p:nth-child(2) { 
        }

        div:last-child { 
            margin: 0 0 0 0.6rem;
        }

        svg {
            ${FlexStyle};
            font-size: 12px;
            margin: 0 0.2rem;
        }
    }

    .mobileHomeIcon {
        ${FlexStyle}

        svg {
            font-size: 1.2rem;
            color: var(--color-primary);
        }
    }

    @media screen and (max-width: 768px) { 
        justify-content: space-around !important;
        -webkit-justify-content: space-around !important;
        -moz-justify-content: space-around  !important;
        -ms-justify-content: space-around !important;
        -o-justify-content: space-around !important;
    }

    .filterLink {
        font-size: 2rem;
    }

    @media screen and (max-width: 320px) {
        .mobileMiniSearch {
            display: none;
        }
    }

`


const Nav = () => {
    const dispatch = useDispatch();
    const {searchValue, useCheckOutDate, useCheckInDate, showMobileReserveButton, checkScroll} = useSelector(state => state.ComponentState)


    const URL = window.location.href;
    const newURL = URL.includes('location', 's')
    const ApartmentUrl = URL.includes('apartment')
    const Query = useMediaQuery("(min-width: 769px)")
    const checKIn = useCheckInDate?.split(",")[1]
    const checkOut = useCheckOutDate?.split(",")[1]


    const handleDrawer = () => {
        dispatch(setOpenDrawer(true))
    }

    const showReserveModal = () => {
        dispatch(setShowMobileReserveModal(true))
    }


    return (
        <NavBar paddingleft="true" paddingRight="true">
            <NavItems>
                {Query ? (
                    <div className='navModal'>
                        <Link to='/'>
                            {CompanyLogo}
                        </Link>
                    </div>
                ) : (
                    <>
                        {newURL ? (<div className='mobileHomeIcon'>
                            <Link to='/'>
                                {HomeIcon}
                            </Link>
                        </div>) : (
                            <div className='navModal'>
                                <Link to='/'>
                                    {CompanyLogo}
                                </Link>
                            </div>
                        )}
                    </>
                )}

                {Query ? (
                    <>
                        {checkScroll && window.location.pathname === '/' ? (""
                        ) : ("")}
                    </>
                ) : (
                    <>
                        {newURL ? ( 
                            <div className="mobileMiniSearch">
                                <div>
                                    <p>{searchValue}</p>
                                    <div>
                                        <p>{checKIn}</p>
                                        {checKIn && checkOut ? <AiOutlineMinus /> : null}
                                        <p>{checkOut}</p>
                                    </div>
                                </div>
                            </div>
                        ) : ApartmentUrl && (
                            <>
                                <AnimatePresence initial={false}>
                                    {showMobileReserveButton && (
                                        <motion.div 
                                            className="" 
                                            style={{display: 'flex', flex: '3', marginLeft: '1rem'}}
                                            initial={{opacity: 0, y: 70, scale: 0.5}}
                                            animate={{opacity: 1, y: 0, scale: 1 }}
                                            exit={{opacity: 0, y: 70, scale: 0.5}}
                                            transition={{ 
                                                duration: 0.3,
                                                type: {
                                                    type: 'spring'
                                                }
                                            }}
                                        >
                                            <Button 
                                                title="Reserve"
                                                disabledBG="var(--linear-primary)" 
                                                onClicks={showReserveModal} 
                                                border='none' 
                                                background='var(--linear-primary)'
                                                color='var(--color-white)' 
                                                width='100%' 
                                                padding='.7rem' 
                                                fontSize='var(--font-xtra-small-screen)'
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </>
                )}
                
                {Query ? (<MainNav ItemIds={ItemIds} top={'50px'} />) 
                    : newURL ? (
                        <Link to='#' className="filterLink" onClick={handleDrawer}>
                            {FilterIcon}
                        </Link>) 
                    :  showMobileReserveButton && ApartmentUrl ? ("")
                    : (<MainNav ItemIds={ItemIds} top="50px" />)
                }                
            </NavItems>
        </NavBar>
    )
};

export default Nav;
