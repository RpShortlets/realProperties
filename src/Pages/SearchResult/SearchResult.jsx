import { useSelector } from "react-redux"
import {Row, Col} from "react-bootstrap"
import styled from "styled-components"
import  { PaddingStyle, FlexStyle } from "../../styles/globalStyles"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { IoBed } from "react-icons/io5"
import { Washer, Rooms, Baths } from "../../Svg/svg"
import { Pulse } from "../../components/Loader/Spinner"

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

const Header = styled.div `
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

const Results = styled.div `
    margin: max(3vh, 1rem) 0 0;
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

const Card = styled.div `
    width: 100%;
    height: 325px;
    background: var(--color-secondary);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;


    :hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    a {
        color: var(--color-dark);
        text-decoration: none !important;
    }

    a: {
        text-decoration: none !important;
    }


    h3 {
        color: var(--color-primary-dark);
        font-size: var(--font-small-screen);
        font-weight: 500;
    }

    @media screen and (min-width: 850px) {
        /* max-width: 350px; */
        width: 100%;
    }
`

const CardContainer = styled.div `
    width: 100%; 
    height: 100%; 
    padding: max(.8vw, .6rem);

    > div:nth-child(2) {
        margin: max(.6vw, .4rem) 0;
        h3 {
            margin: 0;
        }

        span {
            color: var(--color-darker-gray);
            font-size: var(--font-xtra-small-screen);
        }
    }

`

const IconDiv = styled.div `
    
    > div {
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        svg{
            color: var(--color-white);
        }
    }
`

const IconContent = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`

const IconCard = styled.div `

    display: flex;
    align-items: baseline;

    div:first-child {
        background: var(--color-primary);
        width: 20px;
        height: 20px;
        border-radius: 32px; 
    }

    div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;

        

        @media screen and (max-width: 500px) {
            span:first-child {
                margin-left: max(.9vw, .5rem)
            }

            span:last-child {
                display: none;
            }
        }
    }

    span {
        font-size: var(--font-xtraLarge-small);
    }

    @media screen and (min-width: 500px) { 
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
`

const Apartment = styled.div `
    display: flex;
    align-items: center;
    margin-top: max(.6vw, .4rem);


    span {
        font-weight: 500;
    }

    div:first-child {
        margin-right: max(.7vw, 1rem); 
    }

`

const SearchResult = () => {
    const {propertyResult, pending, error} = useSelector(state => state.propertyResult)

    console.log(pending)

    
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
                    <Header>
                        <div>
                            <p>Search results <span><RiDoubleQuotesL />{propertyResult?.searchlocation}<RiDoubleQuotesR/></span></p>
                            <span>{propertyResult?.searchResult ? `${propertyResult?.count[0]?.count}  ${propertyResult?.count[0].count > 1 ? 'properties found': 'property found'}` : ''}</span>
                        </div>
                        <div>
                            Two
                        </div>
                    </Header>
                    <Results>
                        
                                <Row>
                                {propertyResult?.searchResult?.map(property => (
                                    <Col sm={6} md={4} xl={4} style={{paddingTop: '10px', paddingBottom: '10px'}} key={property.apartment_id} >
                                        <Card key={property.propertyId}>
                                            <a href="/propertydetails">
                                                <CardContainer>
                                                    <div style={{width: '100%', height: '170px'}}>
                                                        <picture>
                                                            <source media="(max-width: 559px)" srcSet={property.picture}/>
                                                            <source media="(min-width: 560px)" srcSet={property.picture} />
                                                            <img src="elva-800w.jpg" alt="" width="100%" height="100%" style={{borderRadius: '10px', objectFit: 'cover'}}/>
                                                        </picture>
                                                    </div>
                                                    <div>
                                                        <h3>{property?.apartment_name}</h3>
                                                        <span>{property?.address}</span>
                                                    </div>
                                                    <IconDiv>
                                                        <IconContent>
                                                            <IconCard>
                                                                <div>
                                                                    <span><IoBed/></span>
                                                                </div>
                                                                <div>
                                                                    <span>{property.bed}</span>
                                                                    <span>Beds</span>
                                                                </div>
                                                            </IconCard>
                                                            <IconCard>
                                                                <div>
                                                                    <span> {Baths}</span> 
                                                                </div>
                                                                <div>
                                                                    <span>{property.bath}</span>
                                                                    <span>Baths</span>
                                                                </div>
                                                            </IconCard>
                                                            <IconCard>
                                                                <div>
                                                                    <span>{Washer}</span> 
                                                                </div>
                                                                <div>
                                                                    <span>{property.washer}</span>   
                                                                </div>                            
                                                            </IconCard>
                                                            <IconCard>
                                                                <div>
                                                                    <span>{Rooms}</span>
                                                                </div>
                                                                <div>
                                                                    <span>{property.room} </span>
                                                                    <span>Rooms</span>
                                                                </div>
                                                            </IconCard>
                                                        </IconContent>
                                                    </IconDiv>
                                                    <Apartment>
                                                        <div>
                                                            <span>{property.propertyType}</span>
                                                        </div>
                                                        <div>
                                                            <span>{property.allowed_guest} Guests</span>
                                                        </div>
                                                    </Apartment>
                                                    <div>
                                                        <h3>&#36;{property.price}</h3>
                                                    </div>
                                                </CardContainer>
                                            </a>
                                        </Card>
                                    </Col>
                                    
                                ))}
                            </Row>
                         
                        
                    </Results>
                       </>
                    )}
                </Main>
            </Container>
        </Section>
    )
}

export default SearchResult
