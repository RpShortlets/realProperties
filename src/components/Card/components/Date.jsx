import  "../../../styles/card.css"
import { DatePick, InputSelect } from "../../Input"

const Dates = ({setDropdown, dropdown, number, setArrivalDeparture}) => {
    return (
        <div className="form-container">
            <div>
                <DatePick  label="Arrival & Depature" setArrivalDeparture={setArrivalDeparture} />
            </div>
            <div>
                <InputSelect  style={{paddingLeft: '10px'}} name="adultno"  value={dropdown.adultno} dropdown={dropdown} setDropdown={setDropdown} options={number} label="No. of Adults" />
            </div>
        </div>
    )
}

export default Dates

