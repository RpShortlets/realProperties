import React from 'react'
import styled from "styled-components"

const ScrollContainer =  styled.div `
    
    .media-scroller {
        --spacer: 1rem;
        display: grid;
        gap: var(--spacer);
        grid-auto-flow: column;
        padding: 0 var(--spacer) var(--spacer);
        
        overflow-x: auto;
        overscroll-behavior-inline: contain;
    }

    .media-element {

        display: grid;
        grid-template-rows: min-content; 
        gap: var(--spacer);
        padding: var(--spacer);
        background: var(--color-light-gray);
        border-radius: 1rem;
        box-shadow: var(--shadow-2);
    }

    .media-element > img {
        inline-size: fit-content;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .snaps-inline  {
        scroll-snap-type:  both mandatory;
        /* scroll-padding-inline: var(--spacer); */
    }

    .snaps-inline > * {
        scroll-snap-align: start;
    }
`

const H3 = styled.h3 `
    font-size: var( --font-small);
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.2rem;
`


const Scrollable = ({data, title}) => {
    return (
        <ScrollContainer>
            <H3>{title}</H3>
            <div className="media-scroller with-overscroll snaps-inline snaps--individual">
                {data?.map((item) => (
                    <div className="media-element">
                        <img src={item?.image} alt="" />
                        <p className="title">{item?.title}</p>
                    </div>
                ))}
            </div>
        </ScrollContainer>
    )
}

export default Scrollable