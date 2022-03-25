import {Identity} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, InputSelect } from "../../../utils/FormElement/Input"


const Identification = ({formdata, setFormData, dropdown, setDropdown, id, FocusID, error, proceess}) => {

    return (
        <>
            <div style={{marginTop: 'max(2vw, 1.5rem)'}}>
                <InputSelect style={{paddingLeft: '10px'}} name="identification"  disabled={proceess === 'failed'}  value={dropdown.identification} dropdown={dropdown} setDropdown={setDropdown} options={id} label="Mode of Identifcation" defaultV="Choose Indentification" />
            </div>
            <div style={{marginTop: 'max(2vw, 1.5rem)'}}>
                <Input disabled={proceess === 'failed'} type="text" label="ID Number" Focus={FocusID} error={!error}  name="idnumber" Icon={Identity} value={formdata.idnumber} formdata={formdata} handleChange={(e) => setFormData({...formdata, idnumber: e.target.value.replace(/[^\w\s]/gi, "")})} min={0}/>
            </div>  
        </>
    )
}

export default Identification

