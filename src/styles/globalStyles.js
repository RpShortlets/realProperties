import {css} from 'styled-components/macro'

//* PAGES STYLES
export const SectionStyle = css`
    width: 100%;
    /* height: 100vh; */
`

export const PaddingStyle = css`
    padding-left: ${({paddingleft}) => paddingleft && 'max(7vw, 1rem)'}; 
    padding-right: ${({paddingRight}) => paddingRight && 'max(7vw, 1rem)'};
`

export const SearchFilterLabel = css`
    cursor: pointer;
    display: block;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius-xtra);
    flex: 1 0 0%;
    min-width: 0px;
    padding: 6px 5px;
    transition: .4s;

    
    /* span {
        font-size: var(--font-small-screen);
        font-weight: 400;
    } */

    @media screen and (min-width: 880px) {
        box-shadow: ${({isActive}) => isActive && 'var(--shadow)'};
        padding: 7px 7px;

        :hover {
            box-shadow: var(--shadow);
            background: #fff;
        }

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
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -o-flex;
    align-items: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -moz-align-items: center;
    -o-align-items: center;
`

//* COMPONENTS STYLES
export const ModalStyle = css`
    position: absolute;
    left: ${({left}) => left};
    top: ${({top}) => top ? top : '67px'};
    width: ${({width}) => width};
    border-radius: 7px;
    background: #fff;
    max-height: calc(100vh - 150px) !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    border: ${({border}) => border};
    z-index: 11;
    box-shadow: var(--shadow);
    color: ${({color}) => color};

`

export const InputStyle = css`
    background: #FFFFFF;
    border: 1px solid ${({error}) => error ? 'red' : '#2193B0'};
    color: var(--color-primary);
    font-size: var(--font-small);
    outline: 0;
    padding: 10px;
    padding-left: ${props => props.Icon ? "max(3vw, 2rem)" : ""};
    border-radius: 4px;
    width: 100%;
    height: 45px;
    margin-top: ${({marginTop}) => marginTop ? marginTop : '7px'};
    transition: all .2s;
    

    :focus-within {
        border: 2px solid ${({error}) => error ? 'red' : '#2193B0'};
    }

    :focus {
        border: 2px solid ${({error}) => error ? 'red' : '#2193B0'};
    }

    ::placeholder {
        color: var(--color-primary);
    }

    :-internal-autofill-selected {
        appearance: menulist-button;
        background-image: none !important;
        background-color: -internal-light-dark(white) !important;
        color: -internal-light-dark(black, white) !important;
    }

    :disabled {
        background-color: #ccc;
    }

    @media screen and (min-width: 769px) { 
        font-size: var(--font-xtra-small-screen);
    }
`

//* ADMIN DASHBOARD STYLES
export const AdminContainer = css`
    padding: max(3vw, 1.3rem);
    height: 100%;
    overflow-y: auto;
    height: 100%;
    margin-top: 0;

    @media screen and (min-width: 769px) { 
        margin-top: 2rem;
    }

`

export const AdminHeader = css`
    color: var(--color-primary);
    font-weight: 600;
    font-size: var(--font-big);
    margin-bottom: 2rem;
`

//* HORIZONTAL SCROLL
export const MediaScroller = css`
    --spacer: 1rem;
    display: grid;
    gap: var(--spacer);
    grid-auto-flow: column;
    padding: 0 var(--spacer) var(--spacer);
    
    overflow-x: auto;
    overscroll-behavior-inline: contain;
`
export const MediaElement = css`
    display: grid;
    grid-template-rows: min-content; 
    gap: var(--spacer);
    padding: var(--spacer);
    /* background: var(--color-light-gray);
    border-radius: 1rem;
    box-shadow: var(--shadow-2); */
`

// export const mediaElement > img {
//     inline-size: fit-content;
//     aspect-ratio: 16 / 9;
//     object-fit: cover;
// }

export const SnapsInline = css`
    scroll-snap-type:  both mandatory;
    /* scroll-padding-inline: var(--spacer); */
`

// .snaps-inline > * {
//     scroll-snap-align: start;
// }

//* GALLERY CARD
export const CardGallery = css`
    background: #fff;
    box-shadow: var(--shadow);
    cursor: pointer;
    height: fit-content;
    width: 100%;
    ${MediaElement}
    padding: 0 !important;
    border-radius: 12.6733px;


`