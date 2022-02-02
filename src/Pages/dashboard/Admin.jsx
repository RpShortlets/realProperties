import React, { useState } from 'react';
import styled from 'styled-components';
import { CompanyLogo, PendingIcon, CompletedIcon } from '../../Svg/svg';
import { Link } from 'react-router-dom';
import { FlexStyle } from '../../styles/globalStyles';
import Pending from './components/Pending';
import Completed from './components/Completed';

const Section = styled.section `
    width: 100%;
    height: 100vh;
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

    .sideBarBorder {
        border-left: 2px solid var(--color-primary);
        background: var(--color-secondary);
        opacity: .6;
    }

    .sideBarLink { 
        margin-top: max(8vw, 2rem);

        a {
            color: var(--color-primary);
            ${FlexStyle}

            span:last-child {
                font-size: var(--font-small-screen);
                font-weight: 400;
                margin-left: max(.9vw, .5rem);
            }
        }

        div {
            padding: max(2.5vw, 1rem);
        }

        div:hover {
            cursor: pointer;
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


    //* Render the pending or completed component
    const handlePending = () => {
        setPending(true);
        setCompleted(false);
    }

    const handleCompleted = () => {
        setPending(false);
        setCompleted(true);
    }

    //* End of Render the pending or completed component


    return (
        <Section>
            <Main>
                <SideBar>
                    <div className='adminLogo'>
                        {CompanyLogo}
                    </div>
                    <div className='sideBarLink'>
                        <div className={pending ? 'sideBarBorder' : undefined} onClick={handlePending}>
                            <Link to='pending'>
                                <span>{PendingIcon}</span>
                                <span>Pending</span>
                            </Link>
                        </div>
                        <div onClick={handleCompleted} className={completed ? 'sideBarBorder' : undefined}>
                            <Link to='completed'>
                                <span>{CompletedIcon}</span>
                                <span>Completed</span>
                            </Link>
                        </div>
                    </div>
                </SideBar>
                <LeftBar>
                    {pending ? (
                        <Pending />
                        ) : 
                        (
                        <Completed />
                    )}
                </LeftBar>
            </Main>
        </Section>
    )
};

export default Admin;
