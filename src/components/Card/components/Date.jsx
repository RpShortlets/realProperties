import {Calander} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { DatePick } from "../../Input"

const Dates = ({startDate, setStartDate, endDate, setEndDate}) => {
    return (
        <div className="form-container">
            <div>
                {/* <Input type="date" name="dateArrival" label="Date of Arrival"  Icon={Calander} value={formdata.dateArrival} formdata={formdata} setFormData={setFormData}/> */}
                <DatePick select={startDate} label="Date of Arrival" Icon={Calander} onChanges={setStartDate} startDate={startDate} endDate={endDate} />
            </div>
            <div>
                <DatePick label="Date of Departure" select={endDate} Icon={Calander} onChanges={setEndDate} startDate={startDate} endDate={endDate} />
            </div>
        </div>
    )
}

export default Dates

