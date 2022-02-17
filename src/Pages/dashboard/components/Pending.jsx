import React, {useEffect} from 'react';
import TableData from './TableData';
import styled from "styled-components"
import { useSelector } from 'react-redux';
import { AdminPendingTransaction, ManualConfirmBookings } from '../../../redux/actionCreators/actionCreators';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div `
    padding: max(3vw, 1.3rem);
    height: 100%;

    h1 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-big);
    }

`

const Pending = () => {
    const dispatch = useDispatch();
    const {pending, pendingTransaction, profile} = useSelector(state => state.adminDashboard);
    // const {status} = useSelector(state => state.paymentState);


    const  handleCompleted = (id) => {
        if (window.confirm("You're about to confirm this booking. Press Yes to process or cancel") === true) {
            dispatch(ManualConfirmBookings({id}));
            window.location.reload()
        }
    }

    useEffect(() => {
        dispatch(AdminPendingTransaction())
    }, [dispatch])


    return <Wrapper>
        <h1>{profile?.firstname && `Welcome ${profile?.firstname}`}</h1>
        <TableData title="Pending">
            {pending === 'succeeded' && (
                <>
                
                {pendingTransaction?.map((item) => (
                    <tr key={item.id} onClick={() => handleCompleted(item?.pending_id)}>
                        <td>
                            {item?.guest_name}
                        </td>
                        <td>
                            {item?.email}
                        </td>
                        <td>
                            {item?.phone_no}
                        </td>
                        <td>
                            {item?.check_in}
                        </td>
                        <td>
                            {item?.check_out}
                        </td>
                        <td>
                            {item?.amount}
                        </td>
                        <td>
                            {item?.pymt_reference}
                        </td>
                        <td>
                            {item?.status}
                        </td>
                    </tr>
                ))}
                </>
            )}
        </TableData>
    </Wrapper>;
};

export default Pending;
