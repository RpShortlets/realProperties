import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from "../../components/Modal/Modal"
import {PendingIcon, CompletedIcon, DeletedIcon, UpdateIcon, ComplaintIcon } from '../../Svg/svg';
import Tooltip from "../../components/Tooltip"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FlexStyle } from '../../styles/globalStyles';
import { Logout } from '../../hooks/function/Logout';
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery"
import { ManualConfirmBookings } from '../../redux/actionCreators/actionCreators';
import { Input } from "../../utils/FormElement/Input"
import Button from "../../components/Button/Button"
import { OpenNotificationWithIcon } from '../../components/Notification/Notification';

//Components
import { Deleted, Complaint, Completed, Pending, UpdateBooking} from "./components/index"


const Section = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Main = styled.div `
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: ${({height}) => height};
    width: 100%;
`

const SideBar = styled.div `
    grid-column: 1 / 2;
    display: none;
    background: var(--color-white);
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
    }
`

const LeftBar = styled.div `
    background: var(--color-secondary);
    height: 100%;
    grid-column: 1/ 8;

    @media screen and (min-width: 769px) {
        grid-column: 2 / 8;
    }
`

const Admin = () => {
    const Query = useMediaQuery("(min-width: 669px)")
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const [pending, setPending] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [complains, setComplains] = useState(false);
    const [bookings, setBookings] =  useState(false)
    const [formdata, setFormData] = useState({transactionId: ''})
    const [penId, setPenId] = useState()


    //* Render the pending or completed component
    const handlePending = () => {
        setPending(true);
        setCompleted(false);
        setDeleted(false);
        setComplains(false)
        setBookings(false)
    }

    const handleCompleted = () => {
        setPending(false);
        setCompleted(true);
        setDeleted(false);
        setComplains(false)
        setBookings(false)
    }

    const handleDeleted = () => {
        setDeleted(true);
        setCompleted(false);
        setPending(false);
        setComplains(false)
        setBookings(false)
    }

    const handleComplains = () => {
        setComplains(true)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
        setBookings(false)
    }

    const handleBooking = () => {
        setBookings(true)
        setComplains(false)
        setDeleted(false);
        setCompleted(false);
        setPending(false);
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
            window.location.reload()
        } else {
            OpenNotificationWithIcon({
                type: 'warning',
                message: 'Please enter transaction Id'
            })
        }
    }


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
                <Main height={ pending || deleted || completed || complains ? '100vh' : '100%'}>
                    <SideBar>
                        {/* <div className='adminLogo'>
                            {CompanyLogo}
                        </div> */}
                        <div className='sideBarContainer'>
                            <div className='sideBarLink'>
                                <Tooltip title="Pending Booking">
                                    <Link to='pending' onClick={handlePending} className={pending ? 'sideBarBorder' : undefined} >
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{color: pending && '#fff' }}>{PendingIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Completed Booking">
                                    <Link to='completed' onClick={handleCompleted} className={completed ? 'sideBarBorder' : undefined} >
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{color: completed && '#fff' }}>{CompletedIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Deleted Booking">
                                    <Link to='deleted' onClick={handleDeleted} className={deleted ? 'sideBarBorder' : undefined} >
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{color: deleted && '#fff !important' }}>{DeletedIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Update booking dates">
                                    <Link to='update-booking' onClick={handleBooking} className={bookings ? 'sideBarBorder' : undefined}>
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{background: bookings && 'red !important' }}>{UpdateIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Read Complains">
                                    <Link to='complains' onClick={handleComplains} className={complains ? 'sideBarBorder' : undefined} >
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <span style={{color: deleted && '#fff !important' }}>{ComplaintIcon}</span>
                                        </div>
                                    </Link>
                                </Tooltip>

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
                    <LeftBar>
                        {pending ? (<Pending handleCompletedBooking={handleCompletedBooking} />) : completed ?
                            (<Completed />) 
                            : deleted ? 
                            (<Deleted />)
                            : bookings ? 
                            (<UpdateBooking />) 
                            : complains &&
                            (<Complaint />)
                        }
                    </LeftBar>
                </Main>
            </Section>
        </>
    )
};

export default Admin;
