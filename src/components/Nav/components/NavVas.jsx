import React from 'react';
import styled from "styled-components"
import { FlexStyle } from '../../../styles/globalStyles';


const NavSocialIcons = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        ${FlexStyle}

        span {
            font-size: var(--font-small-screen);
            color: var(--color-primary);
            text-shadow: 0 0 1px;
            font-weight: 500px;
        }

        svg {
            color: var(--color-primary);
            margin: 0 max(1.5vw, 1rem);
            display: flex;
            align-items: center;
        }

    }
`
const NavVas = ({Icons}) => {
    return (
        <NavSocialIcons className='nav'>
            <div>
                <span>Want a:</span>
            </div>
            {Icons.map((icon, i) =>
                <div key={i}>
                    {icon.icon}
                </div>
            )}
        </NavSocialIcons>
    )
};

export default NavVas;
