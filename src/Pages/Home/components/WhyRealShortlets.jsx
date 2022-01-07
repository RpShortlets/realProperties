import styled from "styled-components"
import { RealShortlets } from "../data/data"
import { PaddingStyle } from "../../../styles/globalStyles"


const Container = styled.div `
    width: 100%;
`

const Wrapper = styled.div `
    ${PaddingStyle}
    padding-top: 3rem;
    padding-bottom: 3rem;
    overflow: hidden;

    h2 {
        margin: 0;
        font-size: var(--font-small);
        font-weight: 600;
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

    :hover {
        background: linear-gradient(270deg, rgba(33, 147, 176, 0) 0%, #17677B 0%, #1C7B93 28.87%, #2193B0 100%);
        color: #fff; 
    }

    p {
        /* color: var(--color-dark); */
        margin: .5rem 0 0 0;
        font-size: var(--font-small-screen)
    }

    > div:first-child {
        height: 100%;
        padding: 2rem;
    }

    > div:first-child div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;


        svg {
            font-size: var(--font-big);
            /* color: var(--color-primary); */
        }

    }
`


const WhyRealShortlets = () => {

    // const [isactive, setIsActive] = useState(false)

    // const handleClick = (id) => {
    //     // let newState = {...isactive}
    //     // newState[id] = !newState[id]

    // }


    
    return (
        <Container>
            <Wrapper>
                <h2>Why Real Shortlets</h2>
                <Content >
                    {RealShortlets.map((item) => (
                        <IconDivs key={item.id}>
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
