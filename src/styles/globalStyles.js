import {css} from 'styled-components/macro'

//* PAGES STYLES
export const SectionStyle = css`
    width: 100%;
    height: 100vh;
`

export const SearchFilterLabel = css`
    font-weight: 600;
    cursor: pointer;
    display: block;
    box-shadow: ${({isActive}) => isActive && 'var(--shadow)'};
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius-xtra);
    flex: 1 0 0%;
    min-width: 0px;
    padding: 8px 16px;
    transition: .4s;

    :hover {
        box-shadow: var(--shadow);
        background: #fff;
    }

    /* span {
        font-size: var(--font-small-screen);
        font-weight: 400;
    } */

    @media screen and (max-width: 1024px) {
        padding: 7px 7px;
    }


    /* select {
        outline: 0;
        border: 0;
        background: transparent;
        mix-blend-mode: normal;
        font-size: var(--font-small-screen);
        line-height: var(----line-height);
        -webkit-appearance: none;
        cursor: pointer;
    }

    select::-ms-expand {
        display: none;
    } */

`

//* DISPLAY STYLES
export const FlexStyle = css`
    display: flex;
    align-items: center;
`

//* COMPONENTS STYLES
export const ModalStyle = css`
    position: absolute;
    left: ${({left}) => left};
    top: 70px;
    width: ${({width}) => width};
    border-radius: 7px;
    background: #fff;
    max-height: calc(100vh - 150px) !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;


`