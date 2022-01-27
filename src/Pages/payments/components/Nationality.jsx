import  "../../../styles/card.css"
import { InputSelect } from "../../../utils/FormElement/Input"
import StaticYearPicker from "../../../components/Calender/StaticYearPicker"

const Nationality = ({dropdown, setDropdown, countryList, value, setValue}) => {
    return (
        <>
            <div style={{marginTop: 'max(2vw, .1rem)'}}>
                <StaticYearPicker value={value} setValue={setValue} label="Date of Birth" />
            </div>
            <div style={{marginTop: 'max(2vw, .1rem)'}}>
                <InputSelect name="nationality"  style={{paddingLeft: '10px'}} value={dropdown.nationality} dropdown={dropdown} setDropdown={setDropdown} options={countryList} label="Nationality" defaultV="Choose Nationality" />
            </div>
        </>
    )
}

export default Nationality

