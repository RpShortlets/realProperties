import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from 'react-redux';
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import { CompanyLogo, ChefIcon, TaxiIcon, HamburgerIcon } from '../../Svg/svg';
import {motion, AnimatePresence} from "framer-motion"
import NavVas from './components/NavVas';
import MiniSearch from './components/MiniSearch';


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
    height: 60px;
    ${FlexStyle}
    ${PaddingStyle}
`

const NavItems =  styled.div `
    ${FlexStyle}
    width: 100%;
    justify-content: space-around;

    > div:first-child,
    > div:nth-child(2),
    > div:last-child  {
        flex: 1;
    }

    a {
        color: var(--color-primary);
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
    const {checkScroll} = useSelector(state =>  state.ComponentState)
    const [show, setShow] = useState(false)
    return (
        <NavBar paddingleft="true" paddingRight="true">
            <NavItems>
                <div>
                    <Link to='/'>
                        {CompanyLogo}
                    </Link>
                </div>
                {checkScroll ? (
                    <MiniSearch />
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
