import styled from "styled-components"
import { RealShortlets } from "../data/data"
import {motion} from "framer-motion"
import { PaddingStyle } from "../../../styles/globalStyles"


const Container = styled.div `
    width: 100%;
`

const Wrapper = styled.div `
    ${({about}) => about ? '' : PaddingStyle };
    padding-top: 3rem;
    padding-bottom: 3rem;
    overflow: hidden;

    h2 {
        margin: 0;
        font-size: var(--font-medium);
        font-weight: 600;
        text-align: ${({about}) => about ? 'center' : ''};
    }

    @media (min-width: 769px) { 
        font-size: var(--font-small);
    }

`

const Content = styled.div `
    margin: 2rem 0 0 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media screen and (min-width: 489px) and (max-width: 989px) {
        grid-template-columns: repeat(2, 1fr);   
        gap: 3rem;
    }

    @media screen and (min-width: 990px) {
        gap: 2rem;
        grid-template-columns: repeat(4, 1fr);
    }
    
`

const IconDivs = styled.div `
    background: var(--color-light-gray);
    border-radius: 9.68824px;
    width:  100%;
    height: 190px;
    cursor: pointer;
    transition: 2s;
    color: var(--color-primary);

    /* :hover {
        background: linear-gradient(270deg, rgba(33, 147, 176, 0) 0%, #17677B 0%, #1C7B93 28.87%, #2193B0 100%);
        color: #fff; 
    } */

    p {
        margin: .5rem 0 0 0;
    }

    > div:first-child {
        height: 100%;
        padding: max(2vw, 1.2rem);
    }

    > div:first-child div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;


        svg {
            font-size: 2.5rem !important;
        }

    }

    @media screen and (min-width: 769px) {

        p {
            font-size: var(--font-small-screen)
        }

        svg {
            font-size: var(--font-big) !important;
        }
    }
`


const WhyRealShortlets = ({about}) => {
    
    return (
        <Container>
            <Wrapper  about={about} paddingleft='true' paddingRight='true'>
                <h2>Why RP Shortlets</h2>
                <Content  >
                    {RealShortlets.map((item) => (
                        <IconDivs key={item.id} as={motion.div}
                            // whileHover={{ scale: 1.06 }}
                            // whileTap={{ scale: 0.9 }} 
                        >
                            <div>
                                <div>
                                    {item.image} 
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </IconDivs>
                    ))}
                </Content>
            </Wrapper>
        </Container>
    )
}

export default WhyRealShortlets
