import {Person} from "../../../Svg/svg"
// import  "../../../styles/card.css"
import { Input } from "../../../utils/FormElement/Input"

const Names = ({formdata, setFormData,Focus, Blur, error}) => {

    return (
        <>
            <div>
                <Input type="text" label="First Name" placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value })} Focus={Focus} Blur={Blur} />
            </div>
            <div>
                <Input type="text" label="Last Name" marginTop="0px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value})} Focus={Focus} Blur={Blur}/>
            </div>
        </>
    )
}

export default Names
