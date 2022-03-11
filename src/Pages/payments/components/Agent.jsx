import {Person} from "../../../Svg/svg"
// import  "../../../styles/card.css"
import { Input, PhoneType } from "../../../utils/FormElement/Input"

const Agent = ({formdata, setFormData, Focus,agentPhn, setAgentPhn, error, proceess}) => {

    return (
        <>
            <div>
                <Input disabled={proceess === 'failed'} type="text" label="Agent Name" placeholder="Agent Name" name="agentName" Icon={Person}  value={formdata.agentName} formdata={formdata} handleChange={(e) => setFormData({...formdata, agentName: e.target.value.replace(/[^\w\s]/gi, "") })}   />
            </div>
            <div style={{marginBottom: 'max(2vw, 1.5rem)'}}>
                <PhoneType phn={agentPhn} setPhone={setAgentPhn} label="Agent Contact Number"/>
            </div>
        </>
    )
}

export default Agent
