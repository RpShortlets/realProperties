import {Envelop} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, PhoneType } from "../../../utils/FormElement/Input"


const Email = ({formdata, setFormData, phn, setPhone, checkEmail, validator, checkMobile, error}) => {
    return (
        <div className=""  style={{marginTop: 'max(2vw, .1rem)'}}>
            <Input error={error} type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
            
            <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
            
        </div>
    )
}

export default Email
