import React, {useState, useEffect } from 'react';
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import Button from "../../../components/Button/Button"
import { UpdateBooking, GetPropertyInfoAdmin } from '../../../redux/actionCreators/actionCreators';
import { OpenNotificationWithIcon } from '../../../components/Notification/Notification';


import { useDispatch, useSelector } from 'react-redux';
// import { Clip } from "../../../components/Loader/Spinner";
// import Error from "../../../components/Error/Error"
// import { Error404Icon } from '../../../Svg/svg';
import { Input, InputSelect,  PhoneType } from "../../../utils/FormElement/Input"
import AdminCalender from "./AdminCalender/AdminCalender"
import { Pulse } from '../../../components/Loader/Spinner';


const Wrapper = styled.div `
    ${AdminContainer}

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

const apart = ['1', '2']
const plat = ['AirBnB', 'Hotelsng']

const UpdateBookings = () => {
    const dispatch = useDispatch()
    const data = JSON.parse(localStorage.getItem('admin'))
    const {status,  apartmentInfo: {price}, updateBooks, bookings} = useSelector(state => state.adminDashboard);
    const {checkInDate, checkOutDate} = useSelector(state => state.ComponentState)


    const [formdata, setFormData] = useState({amountPaid: '', firstname: '', lastname: '', email: '', referenceId: '', transactionId:''})
    const [dropdown, setDropdown] = useState({apartment: "", platform:''})
    const [phn, setPhone] = useState('')
    const [listNum, setlistNum] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)
    const totalPrice = formdata.amountPaid 
    let listDate = []
    

    const handleUpdateBookings = (e) => {
        e.preventDefault();
        if( formdata.firstname && formdata.lastname && formdata.email && phn &&formdata.referenceId && formdata.transactionId && dropdown.apartment && dropdown.platform && checkInDate && checkOutDate) {
            dispatch(UpdateBooking({formdata, dropdown, phn, checkInDate, checkOutDate, totalPrice }))
        } else {
            if(!formdata.firstname) {
                OpenNotificationWithIcon({
                    message: 'Enter customer first name',
                    type: 'warning'
                })
            }
            else if(!formdata.lastname) {
                OpenNotificationWithIcon({
                    message: 'Enter customer last name',
                    type: 'warning'
                })
            }
            else if(!formdata.email) {
                OpenNotificationWithIcon({
                    message: 'Enter customer email',
                    type: 'warning'
                })
            }
            else if(!phn) {
                OpenNotificationWithIcon({
                    message: 'Enter customer phone number',
                    type: 'warning'
                })
            }
            else if(!dropdown.apartment) {
                OpenNotificationWithIcon({
                    message: 'Enter customer apartment',
                    type: 'warning'
                })
            }
            else if(!dropdown.platform) {
                OpenNotificationWithIcon({
                    message: 'Enter customer booked platform',
                    type: 'warning'
                })
            }
            else if(!formdata.referenceId) {
                OpenNotificationWithIcon({
                    message: 'Enter customer reference Id',
                    type: 'warning'
                })
            }
            else if(!formdata.transactionId) {
                OpenNotificationWithIcon({
                    message: 'Enter customer reference Id',
                    type: 'warning'
                })
            }
            else if(!checkInDate) {
                OpenNotificationWithIcon({
                    message: 'Enter customer check-in date',
                    type: 'warning'
                })
            }
            else if(!checkOutDate) {
                OpenNotificationWithIcon({
                    message: 'Enter customer check-out date',
                    type: 'warning'
                })
            }
        }
    }

    useEffect(() => {
        if(dropdown.apartment) {
            dispatch(GetPropertyInfoAdmin({dropdown}))
        }
    }, [dispatch, dropdown])

    // useEffect(() => {
    //     const newPrice = status === 'succeeded' && price[0]?.price ? price[0]?.price : 0;
    //     setTotalPrice(parseInt(newPrice) * parseInt(listNum))
    // }, [listNum, price, status])

    useEffect(() => {
        if(bookings === 'succeeded' && updateBooks === 'Booking Successful') {
            OpenNotificationWithIcon({
                message: 'Booking Successful',
                type: 'success'
            })
            setFormData({amountPaid: '', firstname: '', lastname: '', email: '', referenceId: '', transactionId:''})
            setDropdown({apartment: "", platform:''})
            setPhone(null)
            // setTotalPrice(0)
        } else {
            if(bookings === 'failed') {
                OpenNotificationWithIcon({
                    message: 'Something went wrong',
                    type: 'error'
                })
            }
        }
    }, [bookings, updateBooks])

    return (
        <>
            <Wrapper>
                <H1>{data?.firstname && `Welcome ${data?.firstname}`}</H1>
                <form autoSave='On' onSubmit={handleUpdateBookings}>
                    <div>
                        <Input  className="marginInput" type="text" label="First Name" placeholder='First Name' name="customerName"  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <Input  className="marginInput" type="text" label="Last Name" placeholder='Last Name' name="customerName"  value={formdata.lastmname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <Input className="marginInput" type="email" label="Email" placeholder='customer@email.com' name="email"  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value})} />
                        <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
                        <InputSelect  className="marginInput" name="apartment"  style={{paddingLeft: '10px'}} value={dropdown.apartment} dropdown={dropdown} setDropdown={setDropdown} options={apart} label="Apartment" defaultV="Apartment A4" />
                        {dropdown.apartment && <div style={{margin: 'max(3vw, 1.2rem) 0'}}>
                            <AdminCalender setlistNum={setlistNum} calendars={2} listNum={listNum} disablebooked='true' status={status} listDate={listDate} />
                        </div>
                        }
                        <Input className="marginInput" type="number" label="Amount Paid" placeholder='' name="amountPaid"  value={formdata.amountPaid} formdata={formdata} handleChange={(e) => setFormData({...formdata, amountPaid: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <Input className="marginInput" type="text" label="Reference ID" placeholder='' name="referenceId"  value={formdata.referenceId} formdata={formdata} handleChange={(e) => setFormData({...formdata, referenceId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <Input className="marginInput" type="text" label="Transaction ID" placeholder='' name="transactionId"  value={formdata.transactionId} formdata={formdata} handleChange={(e) => setFormData({...formdata, transactionId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        <InputSelect className="marginInput" name="platform"  style={{paddingLeft: '10px'}} value={dropdown.platform} dropdown={dropdown} setDropdown={setDropdown} options={plat} label="Plaform"  />
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