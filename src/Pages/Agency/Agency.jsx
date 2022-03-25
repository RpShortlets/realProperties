import React, {useState} from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import { HandleAgentSiginIn } from '../../redux/actionCreators/actionCreators';
import { Person } from '../../Svg/svg';
import { Input } from '../../utils/FormElement/Input';
import { OpenNotificationWithIcon } from '../../components/Notification/Notification';
import { Pulse } from '../../components/Loader/Spinner';
import { getAdminProfile } from '../../redux/actions/adminDashboard';
import { useDispatch } from 'react-redux';

const Section = styled.section`
    background: var(--color-white);
    height: 100vh;
`

const Main = styled.div `
    height: 100%;
    .loginCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

`

const Agency = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formdata, setFormData] = useState({email: '', password: ''})
    const [loading, setloading] = useState(false)

    const handleAgentSignIn = (e) => {
        e.preventDefault();
        setloading(true)
        HandleAgentSiginIn(formdata).then((res) => {
            if(res?.token) {
                localStorage.setItem('user', JSON.stringify(res));

                dispatch(getAdminProfile(res))
                setloading(false);
                navigate('/admin/live/home')
            } else if(res === 'Email or Password is wrong'){
                setloading(false);
                OpenNotificationWithIcon({
                    type: 'error',
                    message: 'Invalid email/password'
                })
            }
            else{
                setloading(false);
                OpenNotificationWithIcon({
                    type: 'error',
                    message: 'Something went wrong. Please try again'
                })
            }
        })
        
    }
    return (
        <Section>
                <Main>
                    <div className="loginCard">
                        <h1>Agent Sign In</h1>
                        <form onSubmit={handleAgentSignIn}>
                            <Input type="email" label="Email"  placeholder="Email" name="email" Icon={Person}  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value })}/>
                            <Input type="password" label="Password" placeholder="Password" name="password" Icon={Person}  value={formdata.password} formdata={formdata} handleChange={(e) => setFormData({...formdata, password: e.target.value })}/>
                            <div style={{marginTop: 'max(1vw, .6rem)'}}>
                                <Button  border={"0"} height="55px" width={"100%"} padding={".9rem"} color="var(--color-white)" background='var(--linear-primary)'  title={loading  ?  <Pulse color="#fff"  size="10px"  loading={loading}/>: 'Sign In'}/>
                            </div>
                        </form>
                    </div>
                </Main>
        </Section>
    )
}

export default Agency