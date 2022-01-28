import {Envelop} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, PhoneType } from "../../../utils/FormElement/Input"


const Email = ({formdata, phn, setPhone, checkEmail, validator, checkMobile, error, proceess}) => {
    return (
        <div style={{marginTop: 'max(2vw, .1rem)'}}>
            <Input disabled={proceess === 'failed'} error={error} type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
            
            <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
            
        </div>
    )
}

export default Email
