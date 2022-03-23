import * as React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { MenuIcon } from '../../Svg/svg.js';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { Link } from 'react-router-dom';



const DrawerButton = styled.button`
    outline: none;
    border: none;
    background: ${({theme}) => theme === 'dark' ? 'transparent' : 'var(--color-secondary);'};
    color: var(--color-primary);
    font-size: 2rem;
    cursor: pointer;
`
const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    li a {
        color: var(--color-primary);
    }
`

export default function Mobile({theme,handleCompleted,handlePending,handleDeleted, handleComplains, handleBooking, toggleDrawer, state, setState  }) {
    const matched = useMediaQuery('(min-width:769px)'); //* true | false based on media query



    React.useEffect(() => {
        //* Close drawer is open and screen is not small device of max-width of 768px
        if(matched) {
            setState(false);
        }
    }, [matched, setState])

    return (
        <div>
            <React.Fragment>
                {/* //* Drawer Icon */}
                {!matched && (
                    <DrawerButton onClick={toggleDrawer(true)} theme={theme}>
                        {MenuIcon}
                    </DrawerButton>
                )}
                {/* //*DRAWER */}
                <SwipeableDrawer
                    anchor="right"
                    open={state}
                    transitionDuration={500}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {/* //* MAIN CONTENT OF THE DRAWER */}
                    <Wrapper>
                        <ul>
                            <li onClick={handlePending}>
                                <Link to="#">Pending</Link>
                            </li>
                            <li onClick={handleCompleted}>
                                <Link to="#">Bookings</Link>
                            </li>
                            <li onClick={handleDeleted}>
                                <Link to="#">Deleted Bookings</Link>    
                            </li>
                            <li onClick={handleBooking}> 
                                <Link to="#">New Booking</Link>
                            </li>
                            <li onClick={handleComplains}>
                                <Link to="#">Complains</Link>    
                            </li>
                        </ul>
                        <div>
                            <p>Logout</p>
                        </div>
                    </Wrapper>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}