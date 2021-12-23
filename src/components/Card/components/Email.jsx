import {Envelop} from "../../../Svg/svg"
import  "../../../styles/card.css"
import { Input, PhoneType } from "../../Input"

const Email = ({formdata, setFormData, phn, setPhone}) => {
    console.log(phn)
    return (
        <div className="form-container">
            <div>
                <Input type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} setFormData={setFormData}/>
            </div>
            <div>
                {/* <Input type="text" label="Phone Number" placeholder="+234 805 4124 7788" name="phone" Icon={Phone} value={formdata.phone} formdata={formdata} setFormData={setFormData}/> */}
                <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
            </div>
        </div>
    )
}

export default Email
