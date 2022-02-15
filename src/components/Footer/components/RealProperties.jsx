import { BsYoutube, BsInstagram } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div `

    h2 {
        color: var(--color-white);
        font-size: var(--font-medium);
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    p {
        color: var(--color-light-gray);
        font-size: var(--font-small-screen);
        font-weight: 300;
        text-align: justify;
        line-height: 1.5;
        margin: 0;
    }

    div > div {
        margin-top: .7rem;
    }

    a {
        color: var(--color-white);
        opacity: .7;
    }

    a:nth-child(2) {
        margin: 0 10px;
    }

    a:hover {
        opacity: 1 !important;
    }

    @media screen and (min-width: 786px) { 
        h2 {
            font-size: var(--font-small) !important;
            font-weight: 600;
        }

        p {
            font-size: var( --font-xtraLarge-small);

        }
    }

    @media screen and (min-width:630px) and (max-width: 989px) {
        grid-column: 1/4;
    }

    @media screen and (min-width: 990px) {
        grid-column: 1/3;
    }
    
`

const RealProperties = () => {
    return (
        <Container>
            <div>
                <div>
                    <h2>Real Property</h2>
                </div>
                <p>
                    Real Property Nigeria Ltd is a boutique real estate and facilities management company
                    founded in 2012. With our unique contemporary style and passion for connecting people
                    with property, we aspire to provide the ultimate real estate experience for today’s modern
                    consumer.
                </p>
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare fontSize={16} /></a>
                    <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsInstagram  fontSize={16} /></a>
                    <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsYoutube  fontSize={16} /></a>
                </div>
            </div>
        </Container>
    )
}

export default RealProperties
