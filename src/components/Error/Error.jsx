import React from 'react';
import styled from "styled-components"
import Svg from "../../Svg/rafiki.svg"
import Button from "../../components/Button/Button"

const Section = styled.section `
    width: 100%;
    height: 100vh;
    margin-top: max(4vw, 2rem);

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .paragraph {
        margin-top: max(2vw, 1.5rem);
        p {
            margin: 0;
            font-size: var(--font-xtra-small);
        }
    }

    .btn-container {
        margin: max(4vw, 2rem) 0;
        width: 100%;
        text-align: center;
    }
`

const Error = ({title}) => {
    return (
        <Section>
            <div className="container">
                <div>
                    <img src={Svg} alt="" />
                </div>
                <div className='paragraph'>
                    <p>{title}</p>
                </div>
                <div className='btn-container'>
                    <Button  title="Go Back"  border="0" width="50%" padding="1rem" background="var(--linear-primary)" color="var(--color-white)"/>
                </div>
            </div>
        </Section>
    )
};

export default Error;
