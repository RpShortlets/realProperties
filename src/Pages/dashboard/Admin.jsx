import React, { useState } from 'react';
import styled from 'styled-components';
import { CompanyLogo, PendingIcon, CompletedIcon } from '../../Svg/svg';
import { Link } from 'react-router-dom';
import { FlexStyle } from '../../styles/globalStyles';
import Pending from './components/Pending';
import Completed from './components/Completed';
import Deleted from './components/Deleted';
import { Logout } from '../../hooks/function/Logout';


const Section = styled.section `
    width: 100%;
    height: 100vh;
    overflow: hidden;
`
const Main = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    height: 100%;
    width: 100%;
`

const SideBar = styled.div `
    grid-column: 1 / 3;
    background: var(--color-white);
    height: 100%;
    mix-blend-mode: normal;
    /* padding: max(2vw, 1rem); */

    .adminLogo { 
        padding: max(2.5vw, 1rem) 0 0 max(2.5vw, 1rem) ;
    }

    .sideBarContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        width: 100%;
        margin: 1.2rem 0;
    }

    .sideBarBorder {
        border-left: 2px solid var(--color-primary);
        background: var(--color-secondary);
        opacity: .6;
    }

    .sideBarLink { 
        /* margin-top: max(8vw, 2rem); */

        a {
            color: var(--color-primary);
            ${FlexStyle}
            width: 100%;

            span:last-child {
                font-size: var(--font-small-screen);
                font-weight: 400;
                margin-left: max(.9vw, .5rem);
            }

            div {
                width: 100%;
            }
        }

        div {
            padding: max(2.5vw, 1rem);
        }

        div:hover {
            cursor: pointer;
        }
    }

    .adminLogout {
        a {
            display: flex;
            width: 100%;
            font-size: 1.2rem;
        }

        div {
            padding: 0 3rem;
            display: flex;
            align-items: center;
            width: 100%;
        }

        span {
            width: 100%;
        }
        
    }
`

const LeftBar = styled.div `
    background: var(--color-secondary);
    height: 100%;
    grid-column: 3 / 7;
`

const Admin = () => {

    const [pending, setPending] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [deleted, setDeleted] = useState(false);


    //* Render the pending or completed component
    const handlePending = () => {
        setPending(true);
        setCompleted(false);
        setDeleted(false);
        // dispatch(AdminPendingTransaction())
    }

    const handleCompleted = () => {
        setPending(false);
        setCompleted(true);
        setDeleted(false);
    }

    const handleDeleted = () => {
        setDeleted(true);
        setCompleted(false);
        setPending(false);
    }
    //* End of Render the pending or completed component


    return (
        <Section>
            <Main>
                <SideBar>
                    <div className='adminLogo'>
                        {CompanyLogo}
                    </div>
                    <div className='sideBarContainer'>
                        <div className='sideBarLink'>
                            <Link to='pending' onClick={handlePending} className={pending ? 'sideBarBorder' : undefined} >
                                <div style={{display: 'flex' , alignItems: 'center'}}>
                                    <span>{PendingIcon}</span>
                                    <span>Pending</span>
                                </div>
                            </Link>
                            <Link to='completed' onClick={handleCompleted} className={completed ? 'sideBarBorder' : undefined} >
                                <div style={{display: 'flex' , alignItems: 'center'}}>
                                    <span>{CompletedIcon}</span>
                                    <span>Completed</span>
                                </div>
                            </Link>
                            <Link to='deleted' onClick={handleDeleted} className={deleted ? 'sideBarBorder' : undefined} >
                                <div style={{display: 'flex' , alignItems: 'center'}}>
                                    <span>{CompletedIcon}</span>
                                    <span>Deleted</span>
                                </div>
                            </Link>
                        </div>
                        <div className="adminLogout">
                            <Link to='#' onClick={Logout} className={deleted ? 'sideBarBorder' : undefined} >
                                <div style={{display: 'flex' , alignItems: 'center'}}>
                                    
                                    <span>Logout</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SideBar>
                <LeftBar>
                    {pending ? (<Pending />) : completed ?
                        (<Completed />) 
                        : deleted && 
                        (<Deleted />)
                    }
                </LeftBar>
            </Main>
        </Section>
    )
};

export default Admin;
