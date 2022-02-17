import { useSelector } from "react-redux"
import styled from "styled-components"
import  { FlexStyle } from "../../../styles/globalStyles"


const Head = styled.div `
    ${FlexStyle}
    justify-content: space-between;

    div:first-of-type {
        display: flex;

        p {
            color: var(--color-dark);
            margin: 0;
            font-size: var(--font-xtra-small-screen);
            font-weight: 600;
        }

        p span:first-of-type {
            color: var(--color-primary);
            margin: 0 4px;
            font-weight: 600;
        }


        > span:last-child {
            color: var(--color-dark-gray);
            font-size: var(--font-xtra-small-screen);
        }
    }

`

const Header = () => {
    const {propertyResult} = useSelector(state => state.propertyResult)

    return (
        <Head>
            <div>
                {/* //! Add to the search result */}
                {/* <span><RiDoubleQuotesL />{propertyResult?.searchlocation}<RiDoubleQuotesR/></span> */}
                <p>Search results</p>
                <span> {propertyResult?.searchResult ? `${propertyResult?.count[0]?.count}  ${propertyResult?.count[0].count > 1 ? 'properties found': 'property found'}` : ''}</span>
            </div>
            <div>
                Two
            </div>
        </Head>
    )
}

export default Header
