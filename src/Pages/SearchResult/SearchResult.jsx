import { useSelector } from "react-redux"
import styled from "styled-components"
import  { PaddingStyle } from "../../styles/globalStyles"
// import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { Pulse } from "../../components/Loader/Spinner"
import Result from "./components/Result"
import Header from "./components/Header"

const Section = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Container = styled.div `
    ${PaddingStyle}
    background: var(--color-white);
    width: 100%;
`
const Filter = styled.div ``

const Main = styled.div `
    margin: max(3vh, 1rem) 0;
`

// const ResultWrapper = styled.div `
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 1rem;


//     @media screen and (min-width: 489px) and (max-width: 989px) {
//         grid-template-columns: repeat(2, 1fr); 
//         gap: 1rem;  
//     }

//     @media screen and (min-width: 990px) {
//         gap: 2rem;
//         grid-template-columns: repeat(3, 1fr);
//     }
// `

const SearchResult = () => {
    const {pending, error} = useSelector(state => state.propertyResult)
    
    return (
        <Section>
            <Container>
                <Filter>
                    Filters
                </Filter>
                <Main>
                    {pending ? (
                            <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Pulse />
                            </div>
                        )
                        
                        : error ? ( <div>Error</div>)
                        : (
                    <>
                        <Header />
                        <Result />
                    </>
                    )}
                </Main>
            </Container>
        </Section>
    )
}

export default SearchResult
