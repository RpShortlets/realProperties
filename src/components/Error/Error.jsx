import React from 'react';
import styled from "styled-components"
// import Svg from "../../Svg/rafiki.svg"
// import Button from "../../components/Button/Button"

const Section = styled.div `
    width: 100%;
    height: ${({height}) => height ? height : '100vh'};
    margin: ${({margin}) => margin && 'max(4vw, 2rem) 0'};

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

const Error = ({title, Icon, error, height}) => {
    return (
        <Section margin={error} height={height}>
            <div className="container">
                <div>
                    {Icon}
                </div>
                <div className='paragraph'>
                    <p>{title}</p>
                </div>
            </div>
        </Section>
    )
};

export default Error;
