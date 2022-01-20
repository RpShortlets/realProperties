import  "../../../styles/card.css"
import { InputSelect } from "../../../utils/FormElement/Input"
import StaticYearPicker from "../../../components/Calender/StaticYearPicker"

const Nationality = ({formdata, setFormData, dropdown, setDropdown, countryList, value, setValue}) => {
    return (
        <div className="form-container">
            <StaticYearPicker value={value} setValue={setValue} />
            <InputSelect name="nationality"  style={{paddingLeft: '10px'}} value={dropdown.nationality} dropdown={dropdown} setDropdown={setDropdown} options={countryList} label="Nationality" defaultV="Choose Nationality" />
        </div>
    )
}

export default Nationality

