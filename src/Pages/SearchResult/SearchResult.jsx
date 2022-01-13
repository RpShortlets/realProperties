import { useSelector } from "react-redux"
import styled from "styled-components"
import  { PaddingStyle } from "../../styles/globalStyles"
// import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { WaitLoading } from "../../components/Loader/Spinner"
import Result from "./components/Result"
// import { ShortletDetails } from "../../redux/actionCreators/actionCreators"

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

const Results = styled.div `
    margin: max(4vw,1rem) 0;

`



const SearchResult = () => {
    const {status, propertyResult: {searchResult}}= useSelector(state => state.propertyResult)


    if(status === 'loading') return <WaitLoading />

    return (
        <Section>
            <Container>
                <Filter>
                    Filters
                </Filter>
                <Main>

                    {status === 'succeeded' ? (
                        <>
                            {/* <Header /> */}
                            <Results>
                                {searchResult?.map((property) => (
                                    <Result data={property} />
                                ))}
                            </Results>
                        </>
                    ) : ('')
                }                   
                </Main>
            </Container>
        </Section>
    )
}

export default SearchResult
