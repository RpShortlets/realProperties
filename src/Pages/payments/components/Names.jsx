import {Person} from "../../../Svg/svg"
// import  "../../../styles/card.css"
import { Input, InputSelect } from "../../../utils/FormElement/Input"

const Gent = [ 'Male', 'Female', 'Prefer not to say']
const Names = ({formdata, setFormData,Focus, FocusLastName, error, validatedLastName, dropdown,setDropdown, proceess}) => {

    return (
        <>
            <div>
                <Input disabled={proceess === 'failed'} type="text" label="First Name" error={!error} placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} Focus={Focus}  />
            </div>
            <div>
                <Input   disabled={proceess === 'failed'} type="text" label="Last Name" error={!validatedLastName} marginTop="0px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "")})} Focus={FocusLastName}/>
            </div>
            <div>
                <InputSelect  disabled={proceess === 'failed'} name="gender" style={{paddingLeft: '10px'}} value={dropdown.gender} dropdown={dropdown} setDropdown={setDropdown} options={Gent} label="Gender" defaultV="Choose Gender" />
            </div>
        </>
    )
}

export default Names
