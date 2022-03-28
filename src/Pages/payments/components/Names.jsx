import {Person} from "../../../Svg/svg"
// import  "../../../styles/card.css"
import { Input, InputSelect } from "../../../utils/FormElement/Input"

const Gent = [ 'Male', 'Female', 'Prefer not to say']
const title = ['Mr', 'Mrs', 'Miss', 'Others']
const Names = ({formdata, setFormData,Focus, theme, data, FocusLastName, error, validatedLastName, dropdown,setDropdown, proceess}) => {

    return (
        <>
            <div style={{marginBottom: 'max(2vw, 1.5rem)'}}>
                <InputSelect theme={theme} disabled={proceess === 'failed'} name="title" style={{paddingLeft: '10px'}} value={dropdown.title} dropdown={dropdown} setDropdown={setDropdown} options={title} label="Title" defaultV="Choose a title" />
            </div>
            <div>
                <Input theme={theme} disabled={proceess === 'failed'} type="text" label="First Name" error={!error} placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} Focus={Focus}  />
            </div>
            <div>
                <Input theme={theme} disabled={proceess === 'failed'} type="text" label="Last Name" error={!validatedLastName} marginTop="0px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "")})} Focus={FocusLastName}/>
            </div>
            {!data && (
                <div>
                    <InputSelect theme={theme} disabled={proceess === 'failed'} name="gender" style={{paddingLeft: '10px'}} value={dropdown.gender} dropdown={dropdown} setDropdown={setDropdown} options={Gent} label="Gender" defaultV="Choose Gender" />
                </div>
            )}
        </>
    )
}

export default Names
