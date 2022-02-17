import React from 'react';
import styled from 'styled-components';
import {PaddingStyle} from "..//styles/globalStyles"
import { Input } from '../utils/FormElement/Input';
import Button from "../components/Button/Button";   

const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: #fff;
    ${PaddingStyle}

`

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2rem;

    .LoginContainer { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-column: 1/4;

        h1 {
            margin: 0;
            font-size: var(--font-xtra-small);
            font-weight: 600;
        }

        .LoginHeader {
            margin-bottom: max(1.5vw, .7rem);
        }

        .LoginBtn {
            margin-top: max(1rem, env(safe-area-inset-top));
        }
    }

    .ImageContainer {
        grid-column: 4/8;
    }
`

const Login = () => {
    return (
        <Section paddingleft="true" paddingRight="true">
            <Main>
                <div className='LoginContainer'>
                    <div className='LoginHeader'>
                        <h1>Sign in or create account</h1>
                    </div>
                    <div>
                        <form>
                            <Input type="email" label='Email address' asterik="true"/>
                            <div className='LoginBtn'>
                                <Button height="52px" width="100%" type="submit" title="Continue with email" border="0" fontSize="var(--font-small-screen)" background="var(--linear-primary)" color="var(--color-white)" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='ImageContainer'>
                    Image
                </div>
            </Main>
        </Section>
    )
};

export default Login;
