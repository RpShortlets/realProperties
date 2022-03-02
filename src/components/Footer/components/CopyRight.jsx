import styled from "styled-components"
import { PaddingStyle } from "../../../styles/globalStyles"


const CopyRight = styled.div `
    border-top: 1px solid;

    > div div:last-child {
        display: flex;

        p {
            margin: 0 5px;
            cursor: pointer;
        }

    }


    p {
        margin: 0;
        font-size: var(--font-xtraLarge-small);
        font-weight: 300;
        opacity: .7;
    }

    p:hover {
        opacity: 1;
    }

    @media screen and (max-width: 630px) {
        > div {
            display: grid;
        }

        > div div:last-child {
            p {
                margin: 0;
            }

            p:nth-child(2) { 
                margin: 0 10px;
            }

        }
    }
`

const CopyRightContent = styled.div `
    display: flex;
    justify-content: space-between;
    ${PaddingStyle}
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const CopyRights = () => {


    return (
        <CopyRight>
            <CopyRightContent paddingleft='true' paddingRight='true'>
                <div>
                    <p>@2022 Real Property Assets and Technologies Limited.</p>
                </div>
                {/* <div >
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p> 
                </div> */}
            </CopyRightContent>
        </CopyRight>
    )
}

export default CopyRights
