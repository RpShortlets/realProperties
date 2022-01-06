import styled from "styled-components"
import Company from "./components/Company"
import CopyRight from "./components/CopyRight"



const FooterContainer = styled.footer `
    background-color: var(--color-dark);
    color: var(--color-white);
    width: 100%;
`

const Footer = () => {

    return (
        <FooterContainer>
            <Company />
            <CopyRight />
        </FooterContainer>
    )
}

export default Footer
