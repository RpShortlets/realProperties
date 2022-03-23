import React, {useEffect } from 'react';
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import { useSelector } from 'react-redux';
import { AdminPendingTransaction } from '../../../redux/actionCreators/actionCreators';
import { useDispatch } from 'react-redux';
import Table from "../../../components/Table/Tab"
import { Clip } from "../../../components/Loader/Spinner";
import Error from "../../../components/Error/Error"
import { Error404Icon } from '../../../Svg/svg';

const Wrapper = styled.div `
    ${AdminContainer}
    height: auto !important;
    margin: 0 !important;
`

const H1 = styled.h1 `
    ${AdminHeader}
`

const headcells = [
    {
        id: 'Customer name',
        numeric: false,
        disablePadding: true,
        label: 'Customer name',
    },
    {
        id: 'Reference',
        numeric: true,
        disablePadding: false,
        label: 'Reference',
    },
    {
        id: 'Check-in',
        numeric: true,
        disablePadding: false,
        label: 'In',
    },
    {
        id: 'Check-out',
        numeric: true,
        disablePadding: false,
        label: 'Out',
    },
    {
        id: 'Amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
    },
    {
        id: 'Phone number',
        numeric: true,
        disablePadding: false,
        label: 'Phone No',
    },
    {
        id: 'Email',
        numeric: true,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'Status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    
];

const Pending = ({handleCompletedBooking, data, timeOfDay}) => {
    const dispatch = useDispatch();
    const {pending, pendingTransaction} = useSelector(state => state.adminDashboard);


    useEffect(() => {
        dispatch(AdminPendingTransaction())
    }, [dispatch])

    if(pending === 'failed') {
        return (
            <>
                <Error  title="Something went wrong in fetching records." Icon={Error404Icon}/>
            </>
        )
    }



    return <Wrapper>
        {pending === 'loading' ? (
            <div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                <Clip type='TailSpin' />
            </div>
        ) :
            <>
                <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                {pending === 'succeeded' && (<Table  onClicks={data?.role === 'admin1' ? handleCompletedBooking : () => alert('You\'re not autorise to carry out this action')} showColor title="Pending Bookings" headData={headcells} records={pendingTransaction}/>)}
            </>
        }
    </Wrapper>;
};

export default Pending;
