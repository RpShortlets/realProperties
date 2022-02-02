import  { useNavigate } from "react-router-dom"
import {useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { IoBed } from "react-icons/io5"
import { Washer, Rooms, Baths } from "../../../Svg/svg"
import { ShortletDetails } from "../../../redux/actionCreators/actionCreators"
// import Tooltips from "../../../components/Tooltip"



const Card = styled.div `
    width: 100%;
    background: var(--color-secondary);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer; 
    margin-bottom: max(2vw, 1.2rem);   
`

const CardContainer = styled.div `
    position: relative;
    display: grid;    
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
    width: 100%; 
    height: 100%; 
    /* margin: max(3vw, 1rem) 0;  */
`

const PictureContainer = styled.div `
    grid-column: 1/3;
    border-radius: 10px 0px 0px 10px;
`

const ContentContainer = styled.div `
    grid-column: 3/6;
    padding: max(1.5vw, 1.2rem) max(.7vw, .5rem) ;
    h2 {
        font-size: var(--font-small);
        color: var(--color-primary-dark);
        font-weight: 600;
        line-height: 2;
        margin: 0;
    }

    > div div span {
        display: inline-block;
    }

    > div > div > span:first-of-type {
        color: var(--color-darker-gray);
        font-size: var( --font-small-screen);
        font-weight: 500;
        margin: max(1.2vw, 0.7rem) 0;
    }


    > div > div > span:last-child {
        font-size: var( --font-xtra-small-screen);
        color: var(--color-dark);
        line-height: 2;
    }

`

const IconDiv = styled.div `
    margin: max(1.2vw, 0.7rem) 0;
    margin-bottom: 0;
    border-top: 1px solid rgba(112, 180, 198, 1);
    padding-top: max(1vw, .8rem);
`

const IconContent = styled.div `
    display: flex;
    align-items: center;

`

const IconCard = styled.div `
    display: flex;
    align-items: center;
    flex: 1;

    div:first-child {
        background: var(--color-primary);
        width: 20px;
        height: 20px;
        border-radius: 32px; 
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 7px;

        svg {
            color: #fff;
            font-size: 12px;
            display: flex;
            align-items: center;
        }
    }

    div:last-child {
        span {
            font-size: var(--font-xtra-small-screen);
        }
    }

`

const Apartment = styled.div `
    display: flex;
    align-items: center;
    margin: max(.6vw, .4rem) 0;

    div {
        flex: 1;
    }

    span {
        font-weight: 500;
        font-size: var(--font-xtra-small-screen);
    }

    div:first-child {
        margin-right: max(.7vw, 1rem); 
    } */

`

const Price = styled.div `
    h3 {
        font-size: var(--font-small);
        color: var(--color-primary-dark);
        font-weight: 600;
        margin: 0;
    }
`



const Result = ({data: {property_brief_description, address, apartment_name, bath, bed, picture, room, price, washer, allowed_guest, apartment_id}, data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {checkInDate, checkOutDate, } = useSelector(state => state.ComponentState)


    const handleGetDetails = async(Id) => {        
        // dispatch(ShortletDetails({checkInDate,checkOutDate,apartment_id}))
        //checkIn=${checkInDate}&checkOut=${checkOutDate 
        navigate(`/apartment/${apartment_id}&checkIn=${checkInDate}&checkOut=${checkOutDate}`)
    }


    return (
        
        <Card >
            <CardContainer onClick={handleGetDetails}>
                <PictureContainer>
                    <div style={{width: '100%', height: '100%'}}>
                        <picture>
                            <source
                                data-srcset={picture}
                                media="(max-width: 559px)" />
                            <source
                                data-srcset={picture}
                                media="(min-width: 560px)" />
                            
                            <img data-src={picture} alt="" width="100%" height="100%" style={{borderRadius: '10px 0px 0px 10px', objectFit: 'cover'}} className="lazyload"/>
                        </picture>
                    </div>
                </PictureContainer>
                <ContentContainer>
                    <div>
                        <div>
                            <h2>{apartment_name}</h2>
                            <span>{address}</span>
                            <span>
                                {property_brief_description}
                            </span>
                        </div>
                        <IconDiv>
                            <IconContent>
                                    <IconCard>
                                        <div>
                                            <span><IoBed/></span>
                                        </div>
                                        <div>
                                            <span>{bed}</span>
                                            <span>Beds</span>
                                        </div>
                                    </IconCard>
                                    <IconCard>
                                        <div>
                                            <span> {Baths}</span> 
                                        </div>
                                        <div>
                                            <span>{bath}</span>
                                            <span>Bathroom</span>
                                        </div>
                                    </IconCard>
                                    <IconCard>
                                        <div>
                                            <span>{Washer}</span> 
                                        </div>
                                        <div>
                                            <span>{washer}</span>   
                                        </div>                            
                                    </IconCard>
                                    <IconCard>
                                        <div>
                                            <span>{Rooms}</span>
                                        </div>
                                        <div>
                                            <span>{room} </span>
                                            <span>Rooms</span>
                                        </div>
                                    </IconCard>
                            </IconContent>
                        </IconDiv>
                    </div>
                    <Apartment>
                        <div>
                            <span>Apartment</span>
                        </div>
                        <div>
                            <span>{allowed_guest} Guests</span>
                        </div>
                        <div>
                            <span>Seaview</span>
                        </div>
                    </Apartment>
                    <Price>
                        <h3>&#8358; {price.toLocaleString()}</h3>
                    </Price>
                </ContentContainer>
            </CardContainer>
        </Card>
    )
}

export default Result


