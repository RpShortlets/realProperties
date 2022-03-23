import React, { useEffect} from 'react';
import Table from "../../../components/Table/Tab"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { AdminDeletedTransaction } from '../../../redux/actionCreators/actionCreators';
import { Clip } from '../../../components/Loader/Spinner';
import { Error404Icon } from '../../../Svg/svg';
import Error from '../../../components/Error/Error';
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"


const Wrapper = styled.div `
    ${AdminContainer}
    overflow-y: hidden;
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
        id: 'Number',
        numeric: true,
        disablePadding: false,
        label: 'Number',
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

const Deleted = ({data, timeOfDay}) => {
    const dispatch = useDispatch();
    const {cancelled, cancelledTransaction} = useSelector(state => state.adminDashboard);

    useEffect(() => {
        dispatch(AdminDeletedTransaction())
    }, [dispatch])

    if(cancelled === 'failed') {
        return (
            <>
                <Error  title="Something went wrong in fetching records." Icon={Error404Icon}/>
            </>
        )
    }

    return <Wrapper>
        {cancelled === 'loading' ? (
            <div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                <Clip type='TailSpin' />
            </div>
        ) :
            <>
                <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                {cancelled === 'succeeded' && (<Table  title="Deleted Bookings" headData={headcells} records={cancelledTransaction}/>)}
            </>
        }
    </Wrapper>;
};

export default Deleted;
