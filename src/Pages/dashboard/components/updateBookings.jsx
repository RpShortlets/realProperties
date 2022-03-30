import React, {useState, useEffect } from 'react';
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import Button from "../../../components/Button/Button"
import { UpdateBooking, GetPropertyInfoAdmin, } from '../../../redux/actionCreators/actionCreators';
import { OpenNotificationWithIcon } from '../../../components/Notification/Notification';
import Names from "../../../Pages/payments/components/Names"

import { useDispatch, useSelector } from 'react-redux';
import { Input, InputSelect,  PhoneType } from "../../../utils/FormElement/Input"
import AdminCalender from "./AdminCalender/AdminCalender"
import { Pulse } from '../../../components/Loader/Spinner';
import { useValidate, useValidateLast } from '../../../hooks/useValidate/useValidate';
import { ClearUpdateBooking } from '../../../redux/actions/adminDashboard';


const Wrapper = styled.div `
    ${AdminContainer}

    .EmailStyle {
        margin: 0 0 2rem 0;
    }

    div > .marginInput {
        margin: max(3vw, 1.2rem) 0;
    }

    .pili div > div {
        margin: 0 !important;
    }


    div.selected-flag {
        margin: 0 !important;
    }
`

const H1 = styled.h1 `
    ${AdminHeader}
`

const apart = [
    {
        id: 1,
        value: 1,
        label: 'Apartment A4'
    },
    {
        id: 2,
        value: 2,
        label: 'Apartment C4'
    }
]
const plat = ['AirBnB', 'Hotelsng', 'Bookings', 'Agency', 'Referral', 'Others']

const UpdateBookings = ({data, timeOfDay, theme}) => {
    const dispatch = useDispatch()
    const {status,  bookings, updateBooks} = useSelector(state => state.adminDashboard);
    const {checkInDate, checkOutDate} = useSelector(state => state.ComponentState)


    const [formdata, setFormData] = useState({amountPaid: '', firstname: '', lastname: '', email: '', referenceId: '', transactionId:''})
    const [dropdown, setDropdown] = useState({apartment: "", platform:'', title: ''})
    const [phn, setPhone] = useState('')
    const [listNum, setlistNum] = useState(0)
    const [focus, setFocus] = useState(false)
    const [focusLast, setFocusLast] = useState(false)

    const totalPrice = formdata.amountPaid 
    let listDate = []
    const name = formdata.firstname 
    const lastname = formdata.lastname;
    const aFirstName= data?.firstname
    const aLastName= data?.lastname
    const agentConcat = `${aFirstName} ${aLastName}`


    const {validatedName} = useValidate({name, focus})
    const {validatedLastName} =  useValidateLast({lastname, focusLast})
    

    
    const Focus = (e) => {
        if(e.target.name) {
            setFocus(true)
        }
    }

    const FocusLastName = (e) => {
        if(e.target.name) {
            setFocusLast(true)
        }
    }


    const handleUpdateBookings = (e) => {
        e.preventDefault();
        if(dropdown.title && formdata.firstname && formdata.lastname && formdata.email && phn  && dropdown.apartment && checkInDate && checkOutDate ) {
            dispatch(UpdateBooking({formdata, dropdown, phn, checkInDate, checkOutDate, totalPrice, agentConcat }))
        } 
        else {
            OpenNotificationWithIcon({
                type: 'error',
                message: "Please fill all the fields",
            })

        }
    }

    useEffect(() => {
        if(dropdown.apartment) {
            dispatch(GetPropertyInfoAdmin({dropdown}))
        }
    }, [dispatch, dropdown])


    useEffect(() => {
        if(bookings === 'succeeded' && updateBooks?.title === 'Booking Successfully Held') {
            OpenNotificationWithIcon({
                message: 'Booking Successful',
                type: 'success'
            })
            setFormData({amountPaid: '', firstname: '', lastname: '', email: '', referenceId: '', transactionId:'', agentName: '', agentContact: ''})
            setDropdown({apartment: "", platform:'', title: ''})
            setPhone(null)
            return () => {
                dispatch(ClearUpdateBooking())
            }
        } else {
            if(bookings === 'failed') {
                OpenNotificationWithIcon({
                    message: 'Something went wrong',
                    type: 'error'
                })
            }
        }
    }, [bookings, updateBooks, dispatch])

    return (
        <>
            <Wrapper>
                <H1>New Booking</H1>
                <form autoSave='On' onSubmit={handleUpdateBookings}>
                    <div>
                        <Names data={data} theme={theme} formdata={formdata} Focus={Focus} dropdown={dropdown} setDropdown={setDropdown} setFormData={setFormData} error={validatedName} validatedLastName={validatedLastName} FocusLastName={FocusLastName}  />
                        <Input  theme={theme} className="EmailStyle" type="email" label="Email" placeholder='customer@email.com' name="email"  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value})} /> 
                        <PhoneType theme={theme} phn={phn} setPhone={setPhone} label="Phone Number"/>
                        <InputSelect theme={theme} className="marginInput" name="apartment"  style={{paddingLeft: '10px'}} value={dropdown.apartment} dropdown={dropdown} setDropdown={setDropdown} options={apart} label="Apartment" defaultV="Choose an apartment" />
                        {dropdown.apartment && <div style={{margin: 'max(3vw, 1.2rem) 0'}}>
                            <AdminCalender setlistNum={setlistNum} calendars={2} listNum={listNum} disablebooked='true' status={status} listDate={listDate} />
                        </div>
                        }
                        <Input theme={theme} className="marginInput" type="number" label="Amount Paid" placeholder='' name="amountPaid"  value={formdata.amountPaid} formdata={formdata} handleChange={(e) => setFormData({...formdata, amountPaid: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <Input  asterik theme={theme} className="marginInput" type="text" label="Reference ID" placeholder='' name="referenceId"  value={formdata.referenceId} formdata={formdata} handleChange={(e) => setFormData({...formdata, referenceId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        {data?.role !== 'agent' && (
                            <>
                                <Input asterik theme={theme} className="marginInput" type="text" label="Transaction ID" placeholder='' name="transactionId"  value={formdata.transactionId} formdata={formdata} handleChange={(e) => setFormData({...formdata, transactionId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                                <InputSelect theme={theme} className="marginInput" name="platform"  style={{paddingLeft: '10px'}} value={dropdown.platform} dropdown={dropdown} setDropdown={setDropdown} options={plat} label="Platform"  />
                            </>
                        )}
                        {/* {dropdown.platform === 'Agency' && (
                            <div>
                                <Agent  setAgentPhn={setAgentPhn} agentPhn={agentPhn} formdata={formdata} setFormData={setFormData} />
                            </div>
                        )} */}
                        <div>
                            <Button disabled={bookings === 'loading'} background='var(--linear-primary)'  disabledBG="var(--linear-primary)" title={bookings === 'loading' ?  <Pulse color="#fff"  size="10px"  loading={bookings==="loading"}/> : 'Confirm booking'} border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                        </div>
                    </div>
                </form>
            </Wrapper>
        </>
    )
}

export default UpdateBookings