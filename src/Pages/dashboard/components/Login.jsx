import React, {useState} from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router';
import Button from '../../../components/Button/Button';
import { HandleSignIn } from '../../../redux/actionCreators/actionCreators';
import { Person } from '../../../Svg/svg';
import { Input } from '../../../utils/FormElement/Input';
import { OpenNotificationWithIcon } from '../../../components/Notification/Notification';
import { Pulse } from '../../../components/Loader/Spinner';
import { getAdminProfile } from '../../../redux/actions/adminDashboard';
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

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formdata, setFormData] = useState({email: '', password: ''})
    const [loading, setloading] = useState(false)


    //! TO BE FIXED
    // error={!error}


    const handleLogin = (e) => {
        e.preventDefault();
        setloading(true)
        HandleSignIn(formdata).then((res) => {
            if(res?.msg) {
                localStorage.setItem('admin', JSON.stringify(res));
                dispatch(getAdminProfile(res))
                setloading(false);
                navigate('/admin/live/pending')

            }else{
                OpenNotificationWithIcon({
                    type: 'error',
                    message: 'Something went wrong. Please try again'
                })
                setloading(false); 
            }
        })
    }


    return (
        <Section>
            <Main>
                <div className="loginCard"> 
                    <h1>Login</h1>
                    <div>
                        <form onSubmit={handleLogin}>
                            <Input  type="email" label="Email"  placeholder="Email" name="email" Icon={Person}  value={formdata.email} formdata={formdata} handleChange={(e) => setFormData({...formdata, email: e.target.value })}   />
                            <Input  type="password" label="Password" placeholder="Password" name="password" Icon={Person}  value={formdata.password} formdata={formdata} handleChange={(e) => setFormData({...formdata, password: e.target.value })} />
                            <Button   background='var(--linear-primary)' title={loading  ?  <Pulse color="#fff"  size="10px"  loading={loading}/>  : 'Login'} disabledBG="var(--linear-primary)" border="0"  color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                        </form>
                    </div>
                </div>
            </Main>
        </Section>
    )
};

export default Login;
