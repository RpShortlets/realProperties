import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import { CompanyLogo, ChefIcon, TaxiIcon, HamburgerIcon } from '../../Svg/svg';
import {motion, AnimatePresence} from "framer-motion"
import NavVas from './components/NavVas';
import MiniSearch from './components/MiniSearch';
import { saveSearchValue } from '../../redux/actions/componentState';
import { searchShortlets } from '../../redux/actionCreators/actionCreators';


const svgs = [
    {
        id: 1,
        icon: TaxiIcon
    }, {
        id: 2,
        icon: ChefIcon
    }
]

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
    justify-content: space-around;
    margin: 7px 0;

    > div:first-child,
    > div:nth-child(2),
    > div:last-child  {
        flex: 1;
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
    }

    .navModal { 
        ${FlexStyle};
        span {
            margin-left: -15px;
            margin-bottom: -3px;
            font-weight: 600;
        }
    }

`


const NavDropdown = styled.div `
    display: flex;
    justify-content: end;

    a {
        font-size: var(--font-medium);
    }


`

const Modal =  styled.div`
    position: absolute;
    background: #fff;
    border-radius: 3px;
    top: 61px;
    right: 85px;
    height: 100px;
    width: 200px;

`

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {checkScroll} = useSelector(state =>  state.ComponentState)
    const {adultcount, childrencount, checkInDate, checkOutDate, searchValue} = useSelector(state => state.ComponentState)


    const [show, setShow] = useState(false)
    const [openNavMini, setOpenNavMini] = useState(false)
    const myRef = useRef(null)

    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value
            dispatch(saveSearchValue(value))
            setOpenNavMini(false)
        }
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        dispatch(searchShortlets({searchValue, checkInDate, checkOutDate, adultcount, childrencount}))
        navigate(`/s/location=${searchValue}&adults=${adultcount}&children=${childrencount}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }


    return (
        <NavBar paddingleft="true" paddingRight="true">
            <NavItems>
                <div className='navModal'>
                    <Link to='/'>
                        {CompanyLogo}
                        <span aria-label='Real Property'>Real Property</span>
                    </Link>
                </div>
                {checkScroll && window.location.pathname === '/' ? (
                    <MiniSearch 
                        myRef={myRef} 
                        setOpenNavMini={setOpenNavMini} 
                        openNavMini={openNavMini} 
                        handleOption={handleOption} 
                        SubmitForm={SubmitForm}
                    />
                ) : (
                    <NavVas  Icons={svgs} />
                )}
                <NavDropdown>
                    <Link to='#' onClick={() => setShow(prev => !prev)}>
                        {HamburgerIcon}
                    </Link>
                    {show && (
                        <AnimatePresence>
                            <Modal
                                as={motion.div}
                                initial={{y: -5}}
                                animate={{ y: [0, 5, 0], opacity: 1}}
                                transition={{ ease: "easeOut", duration: 0.7 }}
                                exit={{opacity: 0, y: [0, 10, 0]}}
                            >
                                Hello
                            </Modal>
                        </AnimatePresence>
                    )}
                </NavDropdown>
            </NavItems>
        </NavBar>
    )
};

export default Nav;
