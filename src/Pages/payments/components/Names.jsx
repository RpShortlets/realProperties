import {Person} from "../../../Svg/svg"
// import  "../../../styles/card.css"
import { Input } from "../../../utils/FormElement/Input"

const Names = ({formdata, setFormData}) => {
    return (
        <div className="form-container">
            <Input type="text" label="Name" placeholder="First Name" name="firstname" Icon={Person} value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value })}/>
            <Input type="text" label="" marginTop="30px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value})}/>
        </div>
    )
}

export default Names
