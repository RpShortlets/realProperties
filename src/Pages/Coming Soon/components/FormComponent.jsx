import React from 'react'
import { Input, PhoneType } from '../../../utils/FormElement/Input'
import { Envelop, Person } from '../../../Svg/svg'
import Button from '../../../components/Button/Button'



const FormComponent = ({refs, proceess, setPhone, phn, formdata, emailerror, setFormData, checkEmail}) => {
    
    console.log({
        proceess, 
        refs
    })
    return (
        <FormComponent id="comingForm" ref={refs}>
            <div>
                <h3>Make A Reservation</h3>
                <form>
                    <Input placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} label="First Name" />
                    <Input type="text" label="Last Name"  marginTop="0px" placeholder="Last Name" name="lastname" Icon={Person} value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "")})} />
                    <Input disabled={proceess === 'failed'} error={emailerror} type="email" label="Email" placeholder="Name@Example.com" name="email" Icon={Envelop} value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
                    <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
                    <div style={{marginTop: "2rem"}}>
                        <Button 
                            title="Submit Reservation" 
                            border="0" 
                            color="var(--color-white)" 
                            background="var(--linear-primary)"
                            width={"100%"}
                            padding=".8rem"
                        />
                    </div>
                </form>
            </div>
        </FormComponent>
    )
}

export default FormComponent