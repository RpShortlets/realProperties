import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from "../../components/Modal/Modal"
import {PendingIcon, CompletedIcon, DeletedIcon, UpdateIcon, ComplaintIcon, HomeIcon, Person } from '../../Svg/svg';
import Tooltip from "../../components/Tooltip"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FlexStyle } from '../../styles/globalStyles';
import { Logout } from '../../hooks/function/Logout';
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import { ManualConfirmBookings } from '../../redux/actionCreators/actionCreators';
import { Input } from "../../utils/FormElement/Input"
import Button from "../../components/Button/Button"
import { OpenNotificationWithIcon } from '../../components/Notification/Notification';
import useLocalStorage from 'use-local-storage'

//Components
import { Deleted, Complaint, Completed, Pending, UpdateBooking, AgencyHome, AgentSignUp} from "./components/index"
import Mobile from '../../components/Drawer/Mobile';
import { useGetHour } from '../../hooks/useGetHour/useGetHour';
import { resetPaymentState } from '../../redux/actions/payment';



const Section = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Main = styled.div `
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: ${({height}) => height};
    width: 100%;
`

const SideBar = styled.div `
    grid-column: 1 / 2;
    display: none;
    background: ${({theme}) => theme === 'dark' ? '#1f1f1f' : '#fff'};
    height: 100%;
    mix-blend-mode: normal;

    .adminLogo { 
        padding: max(2.5vw, 1rem) 0 0 max(2.5vw, 1rem) ;
    }

    .sideBarContainer {
        ${FlexStyle}
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: 1.2rem 0;
        justify-content: space-around;
    }

    .sideBarBorder {
        background: var(--color-primary-dark);
    }

    .sideBarLink { 
        width: 100%;

        a {
            color: var(--color-primary);
            ${FlexStyle}
            width: 100%;
            margin: .5rem 0;
            padding: 0.6rem 0;

            span:last-child {
                font-size: var(--font-small-screen);
                font-weight: 400;
                ${FlexStyle}
                flex: 1;
                width: 100%;
                justify-content: center;
            }

            div {
                width: 100%;
            }
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

    .adminIconsColor {
        color: '#fff'
    }

    @media screen and (min-width: 769px) {
        display: block;
        grid-column:1 / 2;
        position: fixed;
    }
`

const LeftBar = styled.div `
    background: ${({theme}) => theme === 'dark' ? '#1f1f1f' : 'var(--color-secondary);'};
    height: 100%;
    grid-column: 1/ 9;

    @media screen and (min-width: 769px) {
        grid-column: 2 / 9;
    }
`

const Admin = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const Query = useMediaQuery("(min-width: 669px)")
    const timeOfDay = useGetHour()
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.paymentState)

    const [agentHome, setAgentHome] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [pending, setPending] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [complains, setComplains] = useState(false);
    const [bookings, setBookings] =  useState(false)
    const [registerAgent, setRegisterAgent] = useState(false)
    const [formdata, setFormData] = useState({transactionId: ''})
    const [penId, setPenId] = useState()
    const [state, setState] = React.useState(false);
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const SwitchTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };



    const toggleDrawer = (type) => (event) => { //* Close the drawer when the user clicks outside of it, and toggle the state of the drawer.
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }

        setState((type) => !type);
    };



    //* Render the pending or completed component
    const handlePending = () => {
        setPending(true);
        setCompleted(false);
        setDeleted(false);
        setComplains(false)
        setBookings(false)
        setState(false);
        setAgentHome(false)
        setRegisterAgent(false)
    }

    const handleCompleted = () => {
        setPending(false);
        setCompleted(true);
        setDeleted(false);
        setComplains(false)
        setBookings(false)
        setState(false);
        setAgentHome(false)
        setRegisterAgent(false)
    }

    const handleDeleted = () => {
        setDeleted(true);
        setCompleted(false);
        setPending(false);
        setComplains(false)
        setBookings(false)
        setState(false);
        setAgentHome(false)
        setRegisterAgent(false)
    }

    const handleComplains = () => {
        setComplains(true)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
        setBookings(false)
        setState(false);
        setAgentHome(false)
        setRegisterAgent(false)

    }

    const handleBooking = () => {
        setBookings(true)
        setComplains(false)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
        setState(false);
        setAgentHome(false)
        setRegisterAgent(false)

    }

    const handleHome = () => {
        setAgentHome(true)
        setBookings(false)
        setComplains(false)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
        setState(false);
        setRegisterAgent(false)
    }

    const handleRegisterUser = () => {
        setRegisterAgent(true)
        setAgentHome(false)
        setBookings(false)
        setComplains(false)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
        setState(false);
    }
    //* End of Render the pending or completed component

    const  handleCompletedBooking = (id) => {
        setPenId(id)
        setOpenModal((prev) => !prev)
    }

    const submitReference = () => {
        const time = new Date()?.toLocaleString()
        if(formdata.transactionId) {
            dispatch(ManualConfirmBookings({penId, formdata, time}));
            setOpenModal(false)
        } else {
            OpenNotificationWithIcon({
                type: 'warning',
                message: 'Please enter transaction Id'
            })
        }
    }

    useEffect(() => {
        if(status === "succeeded") {
            console.log('Yes')
            OpenNotificationWithIcon({
                type: 'success',
                message: 'Booking confirmed successfully. Page will refresh in 2 seconds'
            }) 
            dispatch(resetPaymentState())
            setTimeout(() => {
                window.location.reload()
            }
            , 2000)

        } else if (status === "failed") {
            OpenNotificationWithIcon({
                type: 'error',
                message: 'fail to confirm booking. Please try again'
            })
            dispatch(resetPaymentState())
        } else {
            console.log('No')
        }

    }, [status, dispatch])



    return (
        <>
            <Modal show={openModal} top='.6vh' height= "35%" transition={{duration: 0.5, type:{type:'spring'}}} background="#fff" initial={{scale: 0.5, opacity: 0}} exit={{scale: 0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} btn setShow={setOpenModal} theme="rgba(0,0,0,.4)" right={Query ? "30%": "5%"} width={Query ? "40%" : '90%'} >
                <p>To confirm this booking. Kindly enter the booking Transaction ID</p>
                <div style={{width: '100%'}}>
                    <Input type="text" name="transactionId"  value={formdata?.transactionId} formdata={formdata} handleChange={(e) => setFormData({...formdata, transactionId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                    <div style={{display: 'flex', margin: '1rem 0'}}>
                        <div style={{flex: 1}}>
                            <Button 
                                title="Confirm"
                                border="0"
                                borderRadius="8px"    
                                background='var(--linear-primary)' 
                                color='var(--color-white)' 
                                padding='.4rem'
                                width="70%"
                                height="50px"
                                fontSize='var(--font-xtra-small-screen)' 
                                onClicks={submitReference}

                            />
                        </div>
                        <div style={{flex: 1}}>
                            <Button
                                title="Cancel"
                                border="1px solid red"
                                color='red' 
                                padding='.4rem'
                                width="70%"
                                height="50px"
                                fontSize='var(--font-xtra-small-screen)' 
                                background="transparent"
                                onClicks={() => setOpenModal(false)}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
            <Section>
                <div style={{background: theme === 'dark' ? "#1f1f1f" : 'var(--color-secondary)', paddingLeft: '1rem'}}>
                    <Mobile  
                        handleHome={handleHome}
                        handleRegisterUser={handleRegisterUser}
                        handlePending={handlePending}
                        handleCompleted={handleCompleted}
                        handleDeleted={handleDeleted}
                        handleComplains={handleComplains}
                        handleBooking={handleBooking}
                        state={state}
                        toggleDrawer={toggleDrawer}
                        setState={setState}
                        theme={theme}
                        user={user}
                        Logout={Logout}
                    />
                </div>
                <Main height={ complains ? '100vh' : '100%'}>
                    <SideBar theme={theme}>
                        <div className='sideBarContainer'>
                            <div className='sideBarLink'>
                                <Tooltip title="Home">
                                    <Link to='pending' onClick={handleHome} className={agentHome ? 'sideBarBorder' : undefined} >
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{color: agentHome && '#fff' }}>{HomeIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>
                                {user?.role === 'admin1' ? (
                                    <Tooltip title="Pending Booking">
                                        <Link to='pending' onClick={handlePending} className={pending ? 'sideBarBorder' : undefined} >
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{color: pending && '#fff' }}>{PendingIcon}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ): ''}
                                {user?.role === 'admin1' ? (
                                    <Tooltip title="Completed Booking">
                                        <Link to='completed' onClick={handleCompleted} className={completed ? 'sideBarBorder' : undefined} >
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{color: completed && '#fff' }}>{CompletedIcon}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ): ''}
                                {user?.role === 'admin2' ? (
                                    <Tooltip title="Deleted Booking">
                                        <Link to='deleted' onClick={handleDeleted} className={deleted ? 'sideBarBorder' : undefined} >
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{color: deleted && '#fff !important' }}>{DeletedIcon}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ): ''}
                                {user?.role === 'admin1' || user?.role === "agent" ? (
                                    <Tooltip title="Update booking dates">
                                        <Link to='update-booking' onClick={handleBooking} className={bookings ? 'sideBarBorder' : undefined}>
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{background: bookings && 'red !important' }}>{UpdateIcon}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ): ''}
                                {user?.role !== 'agent' && (
                                    <Tooltip title="Read Complains">
                                        <Link to='complains' onClick={handleComplains} className={complains ? 'sideBarBorder' : undefined} >
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{color: deleted && '#fff !important' }}>{ComplaintIcon}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>   
                                )}
                                
                                {user?.role === 'admin1' ? (
                                    <Tooltip title="Register user">
                                        <Link to='register-user' onClick={handleRegisterUser} className={registerAgent ? 'sideBarBorder' : undefined} >
                                            <div style={{display: 'flex' , alignItems: 'center'}}>
                                                <span style={{color: registerAgent && '#fff !important' }}>{Person}</span>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                ) : ("")}
                                

                            </div>
                            <div className="adminLogout">
                                <Link to='#' onClick={Logout} >
                                    <div style={{display: 'flex' , alignItems: 'center'}}>
                                        <span>Logout</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SideBar>
                    <LeftBar theme={theme}>
                        {status === "loading" && <div>Please wait why we fetch your request</div>}
                        {   
                            agentHome ? (
                                <AgencyHome 
                                    timeOfDay={timeOfDay}
                                    data={user} 
                                    SwitchTheme={SwitchTheme}
                                    theme={theme}
                                />
                            ) :
                            user?.role === "admin1" && pending ? 
                            (
                                <Pending 
                                    handleCompletedBooking={handleCompletedBooking} 
                                    timeOfDay={timeOfDay}
                                    data={user}
                                />
                            ) : 
                            

                            user?.role === "admin1" && completed ?
                                (<Completed  
                                    timeOfDay={timeOfDay}
                                    data={user}  
                                />) 
                            : user?.role === 'admin2' && deleted ? 
                                (
                                    <Deleted 
                                        timeOfDay={timeOfDay}
                                        data={user} 
                                    />
                                )
                            :  (user?.role === 'admin1' || user?.role === "agent") && bookings ? 
                                (
                                    <UpdateBooking 
                                        timeOfDay={timeOfDay}
                                        data={user} 
                                        theme={theme}
                                    />
                                ) 
                            :  user?.role !== 'agent' && complains ?
                                (<Complaint 
                                    timeOfDay={timeOfDay}
                                    data={user} 
                                />)
                            : user?.role === 'admin1' && registerAgent ? ( 
                                    <AgentSignUp 
                                        timeOfDay={timeOfDay}
                                        data={user}
                                        theme={theme} 
                                    /> 
                                )
                            : (<AgencyHome 
                                timeOfDay={timeOfDay}
                                data={user}
                            />)
                        }
                    </LeftBar>
                </Main>
            </Section>
        </>
    )
};

export default Admin;
