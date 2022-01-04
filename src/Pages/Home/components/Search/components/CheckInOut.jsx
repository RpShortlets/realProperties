import { DatePick } from '../../../../../components/Input';
import styled from 'styled-components';
import { SearchFilterLabel } from '../../../../../styles/globalStyles';

const Label = styled.div `
    ${SearchFilterLabel}
`

const CheckInOut = ({setArrivalDeparture}) => {
    return (
        <div style={{flex: '1', margin: '0 10px'}}>
            <Label>
                <DatePick  placeholder={['Check in',  'Check out']} setArrivalDeparture={setArrivalDeparture}/>
                {/* <span>Add Dates</span> */}
            </Label>
        </div>
    )
}

export default CheckInOut
