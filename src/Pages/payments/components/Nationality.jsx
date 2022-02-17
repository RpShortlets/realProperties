import  "../../../styles/card.css"
import { InputSelect } from "../../../utils/FormElement/Input"
import StaticYearPicker from "../../../components/Calender/StaticYearPicker"

const Nationality = ({dropdown, setDropdown, countryList, value, setValue, proceess}) => {
    return (
        <>
            <div style={{marginTop: 'max(2vw, 1.5rem)'}}>
                <StaticYearPicker value={value} setValue={setValue} label="Date of Birth" disabled={proceess === 'failed'} />
            </div>
            <div style={{marginTop: 'max(2vw, 1.5rem)'}}>
                <InputSelect  disabled={proceess === 'failed'} name="nationality"  style={{paddingLeft: '10px'}} value={dropdown.nationality} dropdown={dropdown} setDropdown={setDropdown} options={countryList} label="Nationality" defaultV="Choose Nationality" />
            </div>
        </>
    )
}

export default Nationality

