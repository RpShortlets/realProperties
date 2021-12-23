import {Calander} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { InputSelect, DatePick } from "../../Input"

const Nationality = ({nationDate, setNationDate, dropdown, setDropdown, countryList}) => {
    return (
        <div className="form-container">
            <div>
                <DatePick label="Date of Birth" Icon={Calander} select={nationDate}  onChanges={setNationDate} startDate={nationDate} />
            </div>
            <div>
                <InputSelect name="nationality" style={{paddingLeft: '10px'}} value={dropdown.nationality} dropdown={dropdown} setDropdown={setDropdown} options={countryList} label="Nationality" />
            </div>
        </div>
    )
}

export default Nationality

