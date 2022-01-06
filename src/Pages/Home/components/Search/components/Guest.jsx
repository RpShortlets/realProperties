import { CancelIcon } from "../../../../../Svg/svg"
import styled from "styled-components"
import { SearchFilterLabel } from '../../../../../styles/globalStyles';


const Label = styled.label `
    ${SearchFilterLabel}

    div:first-child span {
        font-weight: 400 !important;
    }

    div:last-child {
        margin-right: 10px;
    }

    p {
        font-size: var(--font-xtra-small-screen);
        font-weight: 600;
    }

    span {
        font-size: var(--font-xtraLarge-small);
        font-weight: 400;
    }

    @media (min-width: 600px) {
    
    }

`

const CancelSpan = styled.span `
    background:#ccc; 
    padding: 6px; 
    display: flex; 
    border-radius: 33px;
    opacity: .7;
    font-size: var(--font-small-screen);

    :hover {
        opacity: 1;
    }

`

const Guest = ({resetCount, openGuest, guest}) => {

    return (
        <Label style={{paddingLeft: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} isActive={openGuest}>
            <div>
                <p style={{margin: '0'}}>Guest</p>
                <span>{guest ? `${guest} ${guest > 1 ? 'guests' : 'guest'}` : 'Add Guests'}</span>
            </div>
            <div>
                {guest > 0 && <CancelSpan onClick={resetCount}>{CancelIcon}</CancelSpan>}
            </div>
        </Label>
    )
}

export default Guest
