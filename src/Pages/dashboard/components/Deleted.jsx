import React from 'react';
import TableData from './TableData';
import styled from "styled-components"
import { useSelector } from 'react-redux';

const Wrapper = styled.div `
    padding: max(3vw, 1.3rem);
    /* height: 100%; */

    h1 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-big);
    }

`

const Deleted = () => {
    const {cancelled, cancelledTransaction} = useSelector(state => state.adminDashboard);

    return <Wrapper>
            <h1>Dashboard Kit</h1>
        <TableData title="Deleted">
        {cancelled === 'succeeded' && (
            <>    
                {cancelledTransaction?.map((item) => (
                    <tr key={item.id}>
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

export default Deleted;
