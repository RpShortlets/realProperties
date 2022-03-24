import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button/Button'
import { Input, PhoneType, InputSelect } from '../../../../utils/FormElement/Input'
import { Person } from '../../../../Svg/svg';
import { AdminUserRegistration } from '../../../../redux/actionCreators/actionCreators'
import { OpenNotificationWithIcon } from '../../../../components/Notification/Notification'
import { AdminContainer, AdminHeader } from '../../../../styles/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { clearRegistration } from '../../../../redux/actions/adminDashboard';


const Section = styled.section`
    ${AdminContainer}
`

const Main = styled.div `
    p {
        margin: max(1vw, 1rem) 0 !important;
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


const roles = [
    {
        value: 'agent',
        label: 'Agent',
    },
    {
        value: 'admin',
        label: 'Admin',
    },
    {
        value: 'manager',
        label: 'Super Admin',
    },
    {
        value: 'user',
        label: 'User',
    },
]

const AgentSignUp = ({data, timeOfDay, theme}) => {
    const dispatch = useDispatch()
    const { status, userRegistration} = useSelector(state => state.adminDashboard)
    const [formdata, setFormData] = useState({email: '', firstname: '', lastname: '',})
    const [phn, setPhone] = useState('')
    const [dropdown, setDropdown] = useState({user: ''})


    const handleFormSubmit = (e) => { 
        e.preventDefault()
        if(formdata.firstname && formdata.lastname && formdata.email && phn && dropdown.user) {     
            dispatch(AdminUserRegistration({formdata, phn, dropdown}))
        }  else {
            OpenNotificationWithIcon({
                type: 'warning',
                message: 'Please fill all the fields',
            })
        }
    }

    useEffect(() => {
        if(userRegistration === 'Record Created') {
            setFormData({email: '', firstname: '', lastname: '',})
            setPhone('')
            setDropdown({user: ''})
            OpenNotificationWithIcon({
                type: 'success',
                message: 'User Registration Successful',
            })
            dispatch(clearRegistration())
        } else if (userRegistration === 'Record with this Email already exists') {
            OpenNotificationWithIcon({
                type: 'error',
                message: 'User already exists',
            })
            dispatch(clearRegistration())
        } 
    }, [userRegistration, dispatch])


    //! TODO
    // useEffect(() => {
    //     if(status === 'failed') {
    //         OpenNotificationWithIcon({
    //             type: 'error',
    //             message: 'Something went wrong',
    //         })
    //         dispatch(clearRegistration())
    //     }
    // }, [status, dispatch])


    return (
        <Section>
            <Main>
                <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                <Container>
                    <form onSubmit={handleFormSubmit}>
                        <Input theme={theme} type="text" label="First Name"  placeholder="First Name" name="firstname" Icon={Person}  value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value })}/>
                        <Input theme={theme} type="text" label="Last Name"  placeholder="Last Name" name="lastname" Icon={Person}  value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value })}/>
                        <Input theme={theme} type="email" label="Email"  placeholder="Email" name="email" Icon={Person}  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value })}/>
                        <PhoneType theme={theme} phn={phn} setPhone={setPhone} label="Phone Number"/>
                        <div style={{margin: 'max(2vw, 1.5rem) 0'}}>
                            <InputSelect theme={theme}  name="user"  style={{paddingLeft: '10px'}} value={dropdown.user} dropdown={dropdown} setDropdown={setDropdown} options={roles} label="User Type" defaultV="Select user" />
                        </div>
                        <div style={{marginTop: 'max(1vw, .6rem)'}}>
                            <Button disabled={status === "loading"} type={"submit"} border={"0"} height="55px" width={"100%"} padding={".9rem"} color="var(--color-white)" background='var(--linear-primary)' title={status === "loading" ? "Sending Request, Please wait." :  "Register a user"}/>
                        </div>
                    </form>
                </Container>
            </Main> 
        </Section>
    )
}

export default AgentSignUp