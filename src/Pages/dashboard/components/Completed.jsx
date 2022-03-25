import React, { useEffect} from 'react';
import Table from "../../../components/Table/Tab"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { AdminCompletedTransaction } from '../../../redux/actionCreators/actionCreators';
import { Clip } from '../../../components/Loader/Spinner';
import { Error404Icon } from '../../../Svg/svg';
import Error from '../../../components/Error/Error';
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"


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
        id: 'Name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'Ref',
        numeric: true,
        disablePadding: false,
        label: 'Ref',
    },
    {
        id: 'In',
        numeric: true,
        disablePadding: false,
        label: 'In',
    },
    {
        id: 'Out',
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
        id: 'ApartmentName',
        numeric: true,
        disablePadding: false,
        label: 'Property',
    },
    {
        id: 'Number',
        numeric: true,
        disablePadding: false,
        label: 'Number',
    },
    {
        id: 'Payment Method',
        numeric: true,
        disablePadding: false,
        label: 'Payment Method',
    },
    {
        id: 'Platform',
        numeric: true,
        disablePadding: false,
        label: 'Platform',
    },
    {
        id: 'Time',
        numeric: true,
        disablePadding: false,
        label: 'Time',
    },
    {
        id: 'User',
        numeric: true,
        disablePadding: false,
        label: 'User',
    },
    {
        id: 'Trans ID',
        numeric: true,
        disablePadding: false,
        label: 'Trans ID',
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


const Completed = ({data, timeOfDay}) => {
    const dispatch = useDispatch();
    const {completed, completedTransaction} = useSelector(state => state.adminDashboard);

    
    useEffect(() => {
        dispatch(AdminCompletedTransaction())
    }, [dispatch])

    if(completed === 'failed') {
        return (
            <>
                <Error  title="Something went wrong in fetching records." Icon={Error404Icon}/>
            </>
        )
    }

    return <Wrapper>
        {completed === 'loading' ? (
            <div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                <Clip type='TailSpin' />
            </div>
        ) :
            <>
                <H1>Completed Bookings</H1>
                {completed === 'succeeded' && (<Table  title="Bookings" headData={headcells} records={completedTransaction}/>)}
            </>
        }
    </Wrapper>;
};

export default Completed;
