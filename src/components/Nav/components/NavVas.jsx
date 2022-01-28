import React from 'react';
import styled from "styled-components"
import { FlexStyle } from '../../../styles/globalStyles';


const NavSocialIcons = styled.div `
    ${FlexStyle}

    span {
        font-size: var(--font-small-screen);
        color: var(--color-primary);
        text-shadow: 0 0 1px;
        font-weight: 500px;
    }

    svg {
        color: var(--color-primary);
        margin: 0 max(2.5vw, 1.5rem);
    }
`
const NavVas = ({Icons}) => {
    return (
        <NavSocialIcons className='nav'>
            <div>
                <span>Want a:</span>
            </div>
            <div>
                {Icons.map((icon) => icon.icon)}
            </div>
        </NavSocialIcons>
    )
};

export default NavVas;
