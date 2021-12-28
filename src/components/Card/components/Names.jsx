import {Person} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input } from "../../Input"

const Names = ({formdata, setFormData}) => {
    return (
        <div className="form-container">
            <div>
                <Input type="text" label="First Name" placeholder="First Name" name="firstname" Icon={Person} value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value })}/>
            </div>
            <div>
                <Input type="text" label="Last Name" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value})}/>
            </div>
        </div>
    )
}

export default Names
