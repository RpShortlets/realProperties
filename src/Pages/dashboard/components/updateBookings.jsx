import React, {useState } from 'react';
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import Button from "../../../components/Button/Button"
import { UpdateBooking } from '../../../redux/actionCreators/actionCreators';
// import { useSelector } from 'react-redux';
// import { AdminPendingTransaction } from '../../../redux/actionCreators/actionCreators';
import { useDispatch } from 'react-redux';
// import { Clip } from "../../../components/Loader/Spinner";
// import Error from "../../../components/Error/Error"
// import { Error404Icon } from '../../../Svg/svg';
import { Input, InputSelect,  PhoneType } from "../../../utils/FormElement/Input"
import StaticYearPicker from "../../../components/Calender/StaticYearPicker"


const Wrapper = styled.div `
    ${AdminContainer}

    div > div {
        margin: 1rem 0;
    }

    div > div:nth-child(3) {
        margin: 0;
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
    const [formdata, setFormData] = useState({amountPaid: '', customerName: '', email: '', referenceId: '', transactionId:''})
    const [dropdown, setDropdown] = useState({apartment: "", platform:''})
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [phn, setPhone] = useState('')

    console.log(formdata, dropdown, phn)

    const handleUpdateBookings = (e) => {
        e.preventDefault();
        dispatch(UpdateBooking({formdata, dropdown, phn, value, value2}))
    }
    return (
        <Wrapper>
            <H1>{data?.firstname && `Welcome ${data?.firstname}`}</H1>
            <form autoSave='On' onSubmit={handleUpdateBookings}>
                <div>
                    <Input type="text" label="Name" placeholder='Enter name of customer' name="customerName"  value={formdata.customerName} formdata={formdata} handleChange={(e) => setFormData({...formdata, customerName: e.target.value.replace(/[^\w\s]/gi, "") })} />
                    <Input type="email" label="Email" placeholder='customer@email.com' name="email"  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value})} />
                    <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
                
                    <InputSelect name="apartment"  style={{paddingLeft: '10px'}} value={dropdown.apartment} dropdown={dropdown} setDropdown={setDropdown} options={apart} label="Apartment" defaultV="Apartment A4" />
                    <StaticYearPicker value={value} setValue={setValue} label="Check-In Date" />
                    <StaticYearPicker value={value2} setValue={setValue2} label="Check-Out Date" />
                    <Input type="number" label="Amount Paid" placeholder='' name="amountPaid"  value={formdata.amountPaid} formdata={formdata} handleChange={(e) => setFormData({...formdata, amountPaid: e.target.value.replace(/[^\w\s]/gi, "") })} />
                    <Input type="text" label="Reference ID" placeholder='' name="referenceId"  value={formdata.referenceId} formdata={formdata} handleChange={(e) => setFormData({...formdata, referenceId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                    <Input type="text" label="Transaction ID" placeholder='' name="transactionId"  value={formdata.transactionId} formdata={formdata} handleChange={(e) => setFormData({...formdata, transactionId: e.target.value.replace(/[^\w\s]/gi, "") })} />
                    <InputSelect name="platform"  style={{paddingLeft: '10px'}} value={dropdown.platform} dropdown={dropdown} setDropdown={setDropdown} options={plat} label="Plaform"  />
                    <div>
                        <Button  background='var(--linear-primary)'  disabledBG="var(--linear-primary)" title='Confirm Booking' border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                    </div>
                </div>
            </form>
        </Wrapper>
    )
}

export default UpdateBookings