import {Identity} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, InputSelect } from "../../Input"

const Identification = ({formdata, setFormData, dropdown, setDropdown, id}) => {
    return (
        <div className="form-container">
            <div>
                <InputSelect name="identification"  Icon={Identity} value={dropdown.identification} dropdown={dropdown} setDropdown={setDropdown} options={id} label="Mode of Identifcation" />
            </div>
            <div>
                <Input type="text" label="ID Number" placeholder="1254 5577 7844 5987" name="idnumber" Icon={Identity} value={formdata.idnumber} formdata={formdata} setFormData={setFormData}/>
            </div>
        </div>
    )
}

export default Identification

