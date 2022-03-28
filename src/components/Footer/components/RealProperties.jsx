import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa"
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
        white-space: pre-wrap;
        word-spacing: 0px;
        word-break: break-all;
    }

    div > div {
        margin-top: .7rem;
    }

    a {
        color: var(--color-white);
        opacity: .7;
    }

    a:nth-child(2),
    a:last-child {
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
                    RP Shortlets is a subsidiary of Real Property Assets and Technologies Limited, a boutique real estate and facilities management company
                    founded in 2012. With our unique contemporary style and passion for connecting people
                    with property, we aspire to provide the ultimate real estate experience for today’s modern
                    consumer.
                </p>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100078048180424" target="_blank" rel="noopener noreferrer"><FaFacebookSquare fontSize={16} /></a>
                    <a  href="https://www.instagram.com/rpshortlets" target="_blank" rel="noopener noreferrer"><BsInstagram  fontSize={16} /></a>
                    <a  href="https://twitter.com/rpshortlets/status/1490687071119454210?t=daQAvp1wfYXmnt0WxzAehg&s=19" target="_blank" rel="noopener noreferrer"><FaTwitter  fontSize={16} /></a>
                    <a  href="https://www.linkedin.com/in/real-property-assets-and-technologies-limited-868b89231" target="_blank" rel="noopener noreferrer"><BsLinkedin  fontSize={16} /></a>
                </div>
            </div>
        </Container>
    )
}

export default RealProperties
