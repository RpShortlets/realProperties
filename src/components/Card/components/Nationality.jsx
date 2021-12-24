import  "../../../styles/card.css"
import { InputSelect, DateBirth } from "../../Input"

const Nationality = ({setDateofBirth, dropdown, setDropdown, countryList}) => {
    return (
        <div className="form-container">
            <div>
                <DateBirth label="Date of Birth" placeholder="DD/MM/YYYY"  setDateofBirth={setDateofBirth} />
            </div>
            <div>
                <InputSelect name="nationality"  style={{paddingLeft: '10px'}} value={dropdown.nationality} dropdown={dropdown} setDropdown={setDropdown} options={countryList} label="Nationality" />
            </div>
        </div>
    )
}

export default Nationality

