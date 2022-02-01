import React from 'react';
import styled from 'styled-components';


const TableWrapper = styled.div`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #1C7B93;
    border-radius: 10px;   
    padding: max(2vw, 1rem); 
    margin-top: max(4vw, 1.2rem);
    

    h4 {
        font-size: var(--font-xtra-small-screen);
    }
`


const Tables = styled.table`
    width: 100%;
    height: 100%;
    
`
const TableBod = styled.tbody`
    
    td {
        font-size: var(--font-xtraLarge-small);
    }

    tr:hover {
        background: var(--color-secondary);
        opacity: 0.9;
        border-top: 1px solid var(--color-primary);
        border-bottom: 1px solid var(--color-primary);
    }

    tr {
        cursor: pointer;
    }

    td {
        padding: max(2vw, 1rem) 0;
        color: var(--color-dark);
    }

`

const TableHea = styled.thead`

    th {
        font-size: var(--font-xtraLarge-small);
        color: rgba(159, 162, 180, 1);
        padding: 0.5rem 0;
        font-weight: 300;

    }
    
`


const TableData = ({title, children}) => {
    return (
        
        <TableWrapper>
            <h4>{title}</h4>
            <Tables style={{width: '100%', borderCollapse: 'collapse'}}>
                <TableHea>
                    <tr>
                        <th>Customer name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Amount</th>
                        <th>Reference</th>
                    </tr>
                </TableHea>
                <TableBod>
                    {children}
                </TableBod>
            </Tables>
        </TableWrapper>
        
    )
};

export default TableData;
