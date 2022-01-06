import { DatePick } from '../../../../../components/Input';
import styled from 'styled-components';
import { SearchFilterLabel } from '../../../../../styles/globalStyles';

const Label = styled.div `
    ${SearchFilterLabel}
`

const DateContainer = styled.div `
    display: none;

    @media screen and (min-width: 600px) {
        display: block;
        flex: 1;
        margin: 0 10px;
    }


`


const CheckInOut = ({setArrivalDeparture}) => {
    return (
        <DateContainer >
            <Label>
                <DatePick  placeholder={['Check in',  'Check out']} setArrivalDeparture={setArrivalDeparture}/>
                {/* <span>Add Dates</span> */}
            </Label>
        </DateContainer>
    )
}

export default CheckInOut
