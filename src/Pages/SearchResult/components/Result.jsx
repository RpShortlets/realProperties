import  { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { IoBed } from "react-icons/io5"
import { Washer, Rooms, Baths } from "../../../Svg/svg"
import {Row, Col} from "react-bootstrap"
import { ShortletDetails } from "../../../redux/actionCreators/actionCreators"
import useProgressiveImage from "../../../hooks/useProgressiveImage/useProgressiveImage"


const Results = styled.div `
    margin: max(4vw,1rem) 0;
`

const Card = styled.div `
    width: 100%;
    /* height: 325px; */
    background: var(--color-secondary);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;



    a {
        color: var(--color-dark);
        text-decoration: none !important;
    }

    a: {
        text-decoration: none !important;
    }


    /* h3 {
        color: var(--color-primary-dark);
        font-size: var(--font-small-screen);
        font-weight: 600;
    }

    @media screen and (min-width: 850px) {
        /* max-width: 350px; */
        width: 100%;
    } */
`

const CardContainer = styled.div `
    display: grid;    
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
    width: 100%; 
    height: 100%; 
    margin: max(3vw, 1rem) 0; */

    /* > div:nth-child(2) {
        margin: max(.6vw, .4rem) 0;
        h3 {
            margin: 0;
        }

        span {
            color: var(--color-darker-gray);
            font-size: var(--font-xtra-small-screen);
        }
    } */

`

const PictureContainer = styled.div `
    grid-column: 1/3;
    border-radius: 10px 0px 0px 10px;
`

const ContentContainer = styled.div `
    grid-column: 3/6;
    padding: max(1.5vw, 1.2rem) 0;
    h2 {
        font-size: var(--font-small);
        color: var(--color-primary-dark);
        font-weight: 600;
        margin: 0;
    }

    > div div span {
        display: inline-block;
    }

    > div div span:first-of-type {
        color: var(--color-darker-gray);
        font-size: var( --font-small-screen);
        font-weight: 500;
        margin: max(1.2vw, 0.7rem) 0;
    }


    > div div span:last-child {
        font-size: var( --font-xtra-small-screen);
        color: var(--color-dark);
    }

`


const IconDiv = styled.div `
    

`

const IconContent = styled.div `
    display: flex;
    align-items: center;

`

const IconCard = styled.div `

    display: flex;
    align-items: baseline;

    /* div:first-child {
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
    margin: max(.6vw, .4rem) 0;


    span {
        font-weight: 500;
        font-size: var(--font-xtra-small-screen);
    }

    div:first-child {
        margin-right: max(.7vw, 1rem); 
    } */

`

const Result = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {propertyResult: {searchResult}, propertyResult} = useSelector(state => state.propertyResult)

    
    
    const handleGetDetails = async() => {        
        dispatch(ShortletDetails()) 
        navigate('/property-details')
    }



    console.log(propertyResult?.searchResult)

    return (
        <Results>
            {propertyResult?.searchResult?.map((property) => (
                <Card onClick={handleGetDetails}>
                    <CardContainer>
                        <PictureContainer>
                            <div style={{width: '100%', height: '100%'}}>
                                <picture>
                                    <source
                                        data-srcset={property.picture}
                                        media="(max-width: 559px)" />
                                    <source
                                        data-srcset={property.picture}
                                        media="(min-width: 560px)" />
                                    
                                    <img data-src={property.picture} alt="" width="100%" height="100%" style={{borderRadius: '10px 0px 0px 10px', objectFit: 'cover'}} className="lazyload"/>
                                </picture>
                            </div>
                        </PictureContainer>
                        <ContentContainer>
                            <div>
                                <div>
                                    <h2>{property?.apartment_name}</h2>
                                    <span>{property?.address}</span>
                                    <span>Consectetur adipiscing elit duis tristique 
                                        sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                                    </span>
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
                            </div>
                        </ContentContainer>
                    </CardContainer>
                </Card>
            ))}
        </Results>
    )
}

export default Result

{/* <Row>
                {propertyResult?.searchResult?.map(property => (
                    console.log(property.apartment_id), 
                    <Col sm={6} md={6} lg={4} xl={4} style={{paddingTop: '10px', paddingBottom: '10px'}} key={property.apartment_id} >
                        <Card key={property.propertyId}>
                            <Link to='/property-details' onClick={handleGetDetails}>
                                <CardContainer>
                                    <div style={{width: '100%', height: '170px'}}>
                                        <picture>
                                            <source
                                                data-srcset={property.picture}
                                                media="(max-width: 559px)" />
                                            <source
                                                data-srcset={property.picture}
                                                media="(min-width: 560px)" />
                                            
                                            <img data-src={property.picture} alt="" width="100%" height="100%" style={{borderRadius: '10px', objectFit: 'cover'}} className="lazyload"/>
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
                                        {/* <div>
                                            <span>{property.propertyType}</span>
                                        </div> */}
                                        <div>
                                            {/* <span>{property.allowed_guest} Guests</span> */}
                                        </div>
                    //                 </Apartment>
                    //                 <div>
                    //                     <h3>&#36;{property.price.toLocaleString()}</h3>
                    //                 </div>
                    //             </CardContainer>
                    //         </Link>
                    //     </Card>
                    // </Col>
                    
            //     ))}
            // </Row> */}
