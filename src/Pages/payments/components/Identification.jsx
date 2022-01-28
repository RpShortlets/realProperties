import {Identity} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, InputSelect } from "../../../utils/FormElement/Input"


const Identification = ({formdata, setFormData, dropdown, setDropdown, id, FocusID, error, proceess}) => {
    return (
        <>
            <div style={{marginTop: 'max(2vw, .1rem)'}}>
                <InputSelect name="identification"  disabled={proceess === 'failed'}  Icon={Identity} value={dropdown.identification} dropdown={dropdown} setDropdown={setDropdown} options={id} label="Mode of Identifcation" defaultV="Choose Indentification" />
            </div>
            <div style={{marginTop: 'max(2vw, .1rem)'}}>
                <Input disabled={proceess === 'failed'} type="number" label="ID Number" Focus={FocusID} error={!error} placeholder="1254 5577 7844 5987" name="idnumber" Icon={Identity} value={formdata.idnumber} formdata={formdata} handleChange={(e) => setFormData({...formdata, idnumber: e.target.value})}/>
            </div>  
        </>
    )
}

export default Identification
