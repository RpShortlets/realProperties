import { DatePicker } from 'antd';
import styled from "styled-components/macro"
import moment from 'moment';
import "../../../styles/propertyDetails.css"


const { RangePicker } = DatePicker;


const Calender = styled.div `
    margin: max(3vw,2rem) 0;
    position: relative;
    height: 400px;
    width: 100%;


    input {
        display: none;
    }

    > div:last-child > div:first-child {
        /* display: none; */
    }

    h2 {
        font-size: var(--font-small-screen);
        font-weight: 600;
        margin: 0;
        margin-bottom: 5px;
    }

    p {
        font-size: var(--font-xtra-small-screen);
        color: rgba(109, 109, 109, 1);
        margin: 0;
    }

`

const PropertyCalender = ({setArrivalDeparture}) => {
    
    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }

    return (
        <Calender>
            <div>
                <h2>Select check-in date</h2>
                <p>Select your check-in date for exact pricing</p>
            </div>
            <div id='PropertyDetails'>
                <RangePicker 
                    dropdownClassName='AntDesign'
                    className="AntD"
                    open={true}
                    disabledDate={disabledDate}  
                    onChange={(date, dateString) => setArrivalDeparture(dateString)}
                />
            </div>
        </Calender>
    )
}

export default PropertyCalender
