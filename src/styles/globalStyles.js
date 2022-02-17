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
    padding-left: ${props => props.Icon ? "max(4vw, 2rem)" : ""};
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