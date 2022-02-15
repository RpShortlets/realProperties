import styled from "styled-components"
import RealProperties from "./RealProperties"
import Companies from "./Companies"
import Support from "./Support"
// import Terms from "./Terms"
import { PaddingStyle } from "../../../styles/globalStyles"


const GridWrapper = styled.div `
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    ${PaddingStyle}
    padding-top: 2rem;
    padding-bottom: 2rem;

    
    div:nth-child(2),
    div:nth-child(3),
    div:last-child {

        h3 {
            color: #F7F7F7;
            font-size: var(--font-medium);
            margin: 0;
        }

        div > div {
            margin: 0;
        }

        a {
            color: var(--color-light-gray);
            font-size: var(--font-small-screen);
            opacity: .8;
        }

        a:hover {
            opacity: 1 !important;
        }
    }
    
    
    @media screen and (min-width: 786px) {
        div:last-child {
            h3 {
                font-size: var(--font-small) !important;
            }

            a {
                font-size: var( --font-xtraLarge-small);
            }
        }
    }

    @media screen and (min-width: 990px) {
        grid-template-columns: repeat(4, 1fr);

    }


`



const Company = () => {
    return (
        <GridWrapper paddingleft='true' paddingRight='true'>
            <RealProperties />
            <Companies />
            <Support />
            {/* <Terms /> */}
        </GridWrapper>
    )
}

export default Company
