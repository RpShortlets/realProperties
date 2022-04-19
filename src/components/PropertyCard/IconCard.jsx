import React from 'react'
import styled from "styled-components"
import { FlexStyle } from "../../styles/globalStyles"


const BodyIconCard = styled.div `
    ${FlexStyle}

    div {
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: 32px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 14px;
        }

        span {
            ${FlexStyle}
        }

    }

    > span:last-child {
        color: var(--color-dark);
        font-size: var( --font-small-screen);
        margin-left: max(0.5vw,0.3rem);
    } 

`

const IconCard = ({data, title, Icon, style}) => {
    return (
        <BodyIconCard style={style}>
            <div>
                <span>{Icon}</span>
            </div>
            <span>{`${data} ${title}`}</span> 
        </BodyIconCard>
    )
}

export default IconCard