import React from 'react'
import styled from "styled-components"
import {FlexStyle} from "../../styles/globalStyles"
import { IoBed } from "react-icons/io5"
import { Washer, Rooms, Baths } from "../../Svg/svg"
import Button from "../../components/Button/Button"





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
    display: block;
    /* margin: max(3vw, 1rem) 0;  */

    @media screen and (min-width: 769px) {
        display: grid;    
        gap: 2rem;
        grid-template-columns: repeat(5, 1fr);
        width: 100%; 
        height: 100%; 
    }
`

const PictureContainer = styled.div `
    grid-column: 1/3;
    border-radius: 10px 0px 0px 10px;
    height: ${({height}) => height ? 'auto' : '250px'};

    div {
        height: 100%;
        width: 100%;
    }
    
    img {
        border-radius: 10px 10px 0 0; 
        object-fit: cover;
    }

    @media screen and (min-width: 769px) {
        border-radius: 10px 0px 0px 10px; 
    }
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
        /* display: none; */
        background: var(--color-primary);
        border-radius: 32px;
        ${FlexStyle}
        color: #fff;
        width: 20px;
        height: 20px;
        justify-content: center;
        margin-right: 0.2rem;

        span {
            display: inline-flex;
        }
    }

    div:last-child {
        span {
            font-size: var(--font-xtra-small-screen);
        }
    }

    @media screen and (min-width: 769px) { 
        div:first-child {
        background: var(--color-primary);
        width: 20px;
        height: 20px;
        border-radius: 32px; 
        ${FlexStyle}
        justify-content: center;
        margin-right: 7px;

        svg {
            color: #fff;
            font-size: 12px;
            ${FlexStyle}
            }
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
    ${FlexStyle}
    justify-content: start;

    h3 {
        font-size: var(--font-small);
        color: ${({color}) => color ? '#ccc' : 'var(--color-primary-dark)' };
        font-weight: 600;
        margin: 0;
    }

    h3:first-child {
        text-decoration-line: ${({color})  => color ? 'line-through' : ''};
    }

    h3:nth-child(2) {
        color: var(--color-primary-dark);
    }
`


const PropertyCard = ({data, status, handleGetDetails, title, color, loading, btn }) => {
    
    
    return ( 
        <>
            <Card >    
                <CardContainer onClick={handleGetDetails}>
                    <PictureContainer height={status === 'succeeded' ? 'true' : 'false'}>
                        <div>
                            <picture>
                                <source
                                    data-srcset={data?.picture}
                                    media="(max-width: 559px)" />
                                <source
                                    data-srcset={data?.picture}
                                    media="(min-width: 560px)" />
                                
                                <img data-src={data?.picture} alt="" width="100%" height="100%" className="lazyload"/>
                            </picture>
                        </div>
                    </PictureContainer>
                    <ContentContainer>
                        <div>
                            <div>
                                <h2>{data?.apartment_name ? data?.apartment_name : ''}</h2>
                                <span>{data?.address ? data?.address : ''}</span>
                                <span>
                                    {data?.property_brief_description ? data?.property_brief_description :  data?.description ? data?.description : ''}
                                </span>
                            </div>
                            <IconDiv>
                                <IconContent>
                                        {data?.bed && (
                                            <IconCard>
                                                <div>
                                                    <span><IoBed/></span>
                                                </div>
                                                <div>
                                                    <span>{data?.bed ? data?.bed : ''}</span>
                                                    <span>Beds</span>
                                                </div>
                                            </IconCard>
                                        )}
                                        {data?.bath && (
                                            <IconCard>
                                                <div>
                                                    <span> {Baths}</span> 
                                                </div>
                                                <div>
                                                    <span>{data?.bath ? data?.bath : ''}</span>
                                                    <span>Bath</span>
                                                </div>
                                            </IconCard>
                                        )}
                                        {data?.washer && (
                                            <IconCard>
                                                <div>
                                                    <span>{Washer}</span> 
                                                </div>
                                                <div>
                                                    <span>{data?.washer && data?.washer}</span>   
                                                </div>                            
                                            </IconCard>
                                        )}
                                        {data?.room && (
                                            <IconCard>
                                                <div>
                                                    <span>{Rooms}</span>
                                                </div>
                                                <div>
                                                    <span>{data?.room} </span>
                                                    <span>Rooms</span>
                                                </div>
                                            </IconCard>
                                        )}
                                </IconContent>
                            </IconDiv>
                        </div>
                        <Apartment>
                            <div>
                                <span>{data?.room && 'Apartment'}</span>
                            </div>
                            <div>
                                <span>{data?.room && '6 Max Guests'}</span>
                            </div>
                            <div>
                                <span>{data?.seaview}</span>
                            </div>
                        </Apartment>
                        <Price color={color} >
                            <div>
                                <h3>&#8358; {data?.price && data?.price.toLocaleString()}</h3>
                                {data?.discounted_price && <h3>&#8358; {data?.discounted_price && data?.discounted_price.toLocaleString()}</h3>}
                            </div>
                            <div style={{marginLeft: btn ? 'max(8vw, 1rem)' : "max(8vw, 2.5rem)", flex: '1'}}>
                                <Button 
                                    color={"var(--color-white)"} 
                                    padding=".6rem" 
                                    border="0" 
                                    title={title} 
                                    background="var(--linear-primary)" 
                                    fontSize="var(--font-xtra-small-screen)" 
                                    width={btn && "90%"}
                                    />
                            </div>
                        </Price>
                    </ContentContainer>
                </CardContainer>
            </Card>
            
        </>
    )
}

export default PropertyCard