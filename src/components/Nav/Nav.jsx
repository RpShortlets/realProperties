import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import { CompanyLogo, ChefIcon, TaxiIcon, HamburgerIcon } from '../../Svg/svg';
import {motion, AnimatePresence} from "framer-motion"


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

const NavSocialIcons = styled.div `
    ${FlexStyle}

    span {
        font-size: var(--font-small-screen);
        color: var(--color-primary);
        text-shadow: 0 0 1px;
        font-weight: 500px;
    }

    svg {
        color: var(--color-primary);
        margin: 0 max(2.5vw, 1.5rem);
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
    right: 12px;
    height: 100px;
    width: 200px;

`

const Nav = () => {
    const [show, setShow] = useState(false)
    return (
        <NavBar paddingleft="true" paddingRight="true">
            <NavItems>
                <div>
                    <Link to='/'>
                        {CompanyLogo}
                    </Link>
                </div>
                <NavSocialIcons className='nav'>
                    <div>
                        <span>Want a:</span>
                    </div>
                    <div>
                        {TaxiIcon}
                        {ChefIcon}
                    </div>
                </NavSocialIcons>
                <NavDropdown>
                    <Link to='#' onClick={() => setShow(prev => !prev)}>
                        {HamburgerIcon}
                    </Link>
                    {show && (
                        <AnimatePresence>
                            <Modal
                                as={motion.div}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5, type: {
                                    type: 'spring'
                                }}}
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
