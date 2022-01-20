import {Identity} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, InputSelect } from "../../../utils/FormElement/Input"


const Identification = ({formdata, setFormData, dropdown, setDropdown, id}) => {
    return (
        <div className="form-container" style={{marginTop: '2rem'}}>
            <div>
                <InputSelect name="identification"  Icon={Identity} value={dropdown.identification} dropdown={dropdown} setDropdown={setDropdown} options={id} label="Mode of Identifcation" defaultV="Choose Indentification" />
            </div>
            <div>
                <Input type="text" label="ID Number" placeholder="1254 5577 7844 5987" name="idnumber" Icon={Identity} value={formdata.idnumber} formdata={formdata} handleChange={(e) => setFormData({...formdata, idnumber: e.target.value})}/>
            </div>
        </div>
    )
}

export default Identification

