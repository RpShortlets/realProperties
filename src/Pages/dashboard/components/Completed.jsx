import React from 'react';
import TableData from './TableData';
import styled from "styled-components"

const Wrapper = styled.div `
    padding: max(3vw, 1.3rem);
    /* height: 100%; */

    h1 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-big);
    }

`

const Completed = () => {
    return <Wrapper>
            <h1>Dashboard Kit</h1>
        <TableData title="Completed">
            <>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
                <tr>
                    <td>
                        Tofunmi Yinka-Balogun
                    </td>
                    <td>Customer@gmail.com</td>
                    <td>08123456789</td>
                    <td>Feb 14, 2022</td>
                    <td>Feb 19, 2022</td>
                    <td>172,000 </td>
                    <td>21548954</td>
                </tr>
            </>
        </TableData>
        </Wrapper>;
};

export default Completed;
