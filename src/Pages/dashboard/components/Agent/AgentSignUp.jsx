import {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../../components/Button/Button'
import { Input, PhoneType, InputSelect } from '../../../../utils/FormElement/Input'
import { Person } from '../../../../Svg/svg';
import { HandleAgentSiginIn } from '../../../../redux/actionCreators/actionCreators'
import { OpenNotificationWithIcon } from '../../../../components/Notification/Notification'
import { AdminContainer, AdminHeader } from '../../../../styles/globalStyles'


const Section = styled.section`
    /* height: 100vh; */
    ${AdminContainer}
    /* background: var(--color-white);
    margin: 6rem 0; */
`

const Main = styled.div `
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* height: auto; */

    p {
        margin: max(1vw, 1rem) 0 !important;
    }

    @media screen and (min-width: 700px) {
        /* height: 100%; */
    }
`

const Container = styled.div `
    width: 100%;


    @media screen and (min-width: 768px) {
        width: 50%;
    }
`
const H1 = styled.h1 `
    ${AdminHeader}
`

const userType = ['Agent', 'Super Admin', 'Admin', 'User']

const AgentSignUp = ({data, timeOfDay}) => {
    // const [signup, setSignup] = useState(false)
    const [formdata, setFormData] = useState({email: '', password: '', confirmpassword: '', bname: '', firstname: '', lastname: '',})
    const [phn, setPhone] = useState('')
    const [dropdown, setDropdown] = useState({user: ''})


    const handleFormSubmit = (e) => { 
        e.preventDefault()
        if(formdata.firstname && formdata.lastname && formdata.email && phn && formdata.password === formdata.confirmpassword) {     
            console.log(formdata, phn)
        } 
    }
    // const handleFormSubmit = (e) => {
    //     e.preventDefault()
    //         if(formdata.firstname && formdata.lastname && formdata.email && phn && formdata.password === formdata.confirmpassword) { 
                
    //             console.log(formdata, phn)
    //         } else {
    //             if(!formdata.firstname) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'First name is required'
    //                 })
    //             }
    //             else if(!formdata.lastname) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Last name is required'
    //                 })
    //             }
    //             else if(!formdata.email) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Email is required'
    //                 })
    //             } 
    //             else if(!phn) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Phone number is required'
    //                 })
    //             }
    //             else if(!formdata.password) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Password is required'
    //                 })
    //             } 
    //             else if(!formdata.confirmpassword) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Confirm password is required'
    //                 })
    //             } else if(formdata.password !== formdata.confirmpassword) {
    //                 OpenNotificationWithIcon({
    //                     type: 'error',
    //                     message: 'Password does not match'
    //                 })
    //             }
    //         }
    //     } 
    //     // else {
    //     //     if(formdata.email && formdata.password ) {
    //     //         HandleAgentSiginIn(formdata).then((res) => {
    //     //             if(res?.msg) {
    //     //                 localStorage.setItem('user', JSON.stringify(res));
    //     //                 setSignup(true)
    //     //             } else {
    //     //                 OpenNotificationWithIcon({
    //     //                     type: 'error',
    //     //                     message: 'Invalid email/password'
    //     //                 })
    //     //             }
    //     //         })
    //     //     }
    //     // }

    // }


    return (
        <Section>
            {/* {signup ?  */}
                <Main>
                    <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                    <Container>
                        <form onSubmit={handleFormSubmit}>
                            <Input type="text" label="First Name"  placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value })}/>
                            <Input type="text" label="Last Name"  placeholder="Last Name" name="lastname" Icon={Person}  value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value })}/>
                            <Input type="email" label="Email"  placeholder="Email" name="email" Icon={Person}  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value })}/>
                            <PhoneType phn={phn} setPhone={setPhone} label="Phone Number"/>
                            <div style={{margin: 'max(2vw, 1.5rem) 0'}}>
                                <InputSelect   name="user"  style={{paddingLeft: '10px'}} value={dropdown.user} dropdown={dropdown} setDropdown={setDropdown} options={userType} label="Uuser Type" defaultV="Select user" />
                            </div>
                            <Input  type="password" label="Password" placeholder="Password" name="password" value={formdata.password} formdata={formdata} handleChange={(e) => setFormData({...formdata, password: e.target.value })}/>
                            {/* <div style={{margin: 'max(2vw, 1.5rem) 0'}}>
                                <Input type="password" label="Confirm Password" placeholder="Confirm Password" name="confirmpassword" value={formdata.confirmpassword} formdata={formdata} handleChange={(e) => setFormData({...formdata, confirmpassword: e.target.value })}/>
                            </div> */}
                            <div style={{marginTop: 'max(1vw, .6rem)'}}>
                                <Button type={"submit"} border={"0"} height="55px" width={"100%"} padding={".9rem"} color="var(--color-white)" background='var(--linear-primary)' title={"Sign Up"}/>
                            </div>
                        </form>
                    </Container>
                    {/* <p>Already have an account? <Link to="#" onClick={() => setSignup((prev) => !prev)}>Sign In</Link></p> */}
                </Main> :
                {/* <Main>
                    <h1>Sign In</h1>
                    <Container>
                        <form onSubmit={handleFormSubmit}>
                            <Input type="email" label="Email"  placeholder="Email" name="email" Icon={Person}  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value })}/>
                            <Input type="password" label="Password" placeholder="Password" name="password" Icon={Person}  value={formdata.password} formdata={formdata} handleChange={(e) => setFormData({...formdata, password: e.target.value })}/>
                            <div style={{marginTop: 'max(1vw, .6rem)'}}>
                                <Button border={"0"} height="55px" width={"100%"} padding={".9rem"} color="var(--color-white)" background='var(--linear-primary)' title={"Sign In"}/>
                            </div>
                        </form>
                    </Container>
                    <p>No account yet? <Link to="#" onClick={() => setSignup((prev) => !prev)}>Sign Up</Link></p>
                </Main>
            } */}
        </Section>
    )
}

export default AgentSignUp