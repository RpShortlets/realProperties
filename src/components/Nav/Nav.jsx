import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import { CompanyLogo, FilterIcon, HomeIcon } from '../../Svg/svg';
// import NavVas from './components/NavVas';
// import MiniSearch from './components/MiniSearch';
import { setOpenDrawer } from '../../redux/actions/componentState';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { AiOutlineMinus } from 'react-icons/ai'


import {MainNav} from "./Dropdown/MainNav"


// const svgs = [
//     {
//         id: 1,
//         icon: TaxiIcon
//     }, {
//         id: 2,
//         icon: ChefIcon
//     }
// ]

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

    /* .navModal, .mobileHomeIcon {
        svg {
            width: max(3.5vw, 3rem);
            height: max(3.5vw, 3rem);
        }
    } */

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
        margin-bottom: -6px;
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
            /* font-weight: 600; */
        }

        p:nth-child(2) { 
            /* margin: 0 .7rem !important; */
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


// const NavDropdown = styled.div `
//     flex: 1;
//     -webkit-flex: 1;
//     -moz-flex: 1;
//     -ms-flex: 1;
//     -o-flex: 1;
//     display: flex;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -moz-flex;
//     display: -ms-flex;
//     display: -o-flex;
//     justify-content: end;
//     -webkit-justify-content: end !important;
//     -moz-justify-content: end !important;
//     -ms-justify-content: end !important;
//     -o-justify-content: end !important;


//     a {
//         font-size: 2rem;
//     }


//     @media screen and (min-width: 769px) { 
//         a {
//             font-size: var(--font-medium);
//         }
//     }


// `

// const Modal =  styled.div`
//     position: absolute;
//     background: #fff;
//     border-radius: 3px;
//     top: 61px;
//     right: 85px;
//     height: 100px;
//     width: 200px;

// `

const Nav = () => {
    const dispatch = useDispatch();


    const {checkScroll} = useSelector(state =>  state.ComponentState)
    const {searchValue, useCheckOutDate, useCheckInDate} = useSelector(state => state.ComponentState)

    // const [openNavMini, setOpenNavMini] = useState(false)
 


    const URL = window.location.href;
    const newURL = URL.includes('location', 's')
    const Query = useMediaQuery("(min-width: 769px)")
    const checKIn = useCheckInDate?.split(",")[1]
    const checkOut = useCheckOutDate?.split(",")[1]

    // const handleOption = (id) => {
    //     if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
    //         const value = myRef.current.childNodes[id].childNodes[1]?.value
    //         dispatch(saveSearchValue(value))
    //         setOpenNavMini(false)
    //     }
    // }

    // const SubmitForm = async(e) => {
    //     e.preventDefault();
    //     dispatch(searchShortlets({searchValue, checkInDate, checkOutDate, adultcount, childrencount}))
    //     navigate(`/s/location=${searchValue}&adults=${adultcount}&children=${childrencount}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    // }

    const handleDrawer = () => {
        dispatch(setOpenDrawer(true))
    }


    return (
        <NavBar paddingleft="true" paddingRight="true">
            <NavItems>
                {Query ? (
                    <div className='navModal'>
                        <Link to='/'>
                            {CompanyLogo}
                            <span aria-label='Real Property'>Real Property Shortlets</span>
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
                                    {/* <span aria-label='Real Property'>Real Property</span> */}
                                </Link>
                            </div>
                        )}
                    </>
                )}

                {Query ? (
                    <>
                        {checkScroll && window.location.pathname === '/' ? (""
                            // <MiniSearch 
                            //     myRef={myRef} 
                            //     setOpenNavMini={setOpenNavMini} 
                            //     openNavMini={openNavMini} 
                            //     handleOption={handleOption} 
                            //     SubmitForm={SubmitForm}
                            // />
                        ) : (""
                            // <NavVas  Icons={svgs} />
                        )}
                    </>
                ) : (
                    <>
                        {newURL && ( 
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
                        )}
                    </>
                )}
                
                {Query ? (
                    <MainNav />
                ) : (
                    <>
                        {newURL ? (
                            <Link to='#' className="filterLink" onClick={handleDrawer}>
                                {FilterIcon}
                            </Link>
                        ) : (
                            <MainNav />   
                        )}
                    </>
                )}                
            </NavItems>
        </NavBar>
    )
};

export default Nav;
