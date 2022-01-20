import {Envelop} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, PhoneType } from "../../../utils/FormElement/Input"


const Email = ({formdata, setFormData, phn, setPhone, checkEmail, validator, checkMobile, error}) => {
    return (
        <div className="form-container">
           
                <Input error={error} type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
                {/* <p className="error">{validator && 'Please enter a valid email'}</p> */}
            
            {/* <div> */}
                {/* <Input type="text" label="Phone Number" placeholder="+234 805 4124 7788" name="phone" Icon={Phone} value={formdata.phone} formdata={formdata} setFormData={setFormData}/> */}
                <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
            {/* </div> */}
        </div>
    )
}

export default Email
