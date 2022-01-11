import {useState, useRef} from "react"
import { useSelector } from "react-redux"
import styled, { css } from "styled-components/macro"
import { PaddingStyle, FlexStyle, ModalStyle } from "../../styles/globalStyles"
import Button from "../../components/Button/Button"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare, FiChevronDown, FiChevronUp } from "react-icons/fi"
import { IoBed } from "react-icons/io5"
import { Rooms, Baths } from "../../Svg/svg"
import { AmenitiesOne, AmenitiesTwo } from "./data"
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"

const Section  = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Main = styled.div `
    ${PaddingStyle}

    @media screen and (min-width: 769px) {
        padding-top: 2rem;
    }
`

const Header = styled.div `
    position: relative; 

`

const HeaderContents = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: end;

        > div:last-child {
            display: flex;
        }

        h1, p {
            margin: 0;
        }

        h1 {
            font-size: var(--font-medium);
            color: var(--color-dark);
        }

        p {
            font-size: var(--font-small-screen);
            color: var(--color-darker-gray);
        }

    }

    
`

const ImageContainer = styled.div `
    margin: max(3vw, 2rem) 0;
    img {
        object-fit: cover;
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    > div:first-of-type {
        div:first-child {
            position: relative;
        }

        > div:nth-child(2),
        > div:nth-child(3),
        > div:nth-child(4),
        > div:nth-child(5),
        > div:nth-child(6),
        > div:nth-child(7),
        > div:last-child {
            display: none;
        }
    }


    @media screen and (min-width: 769px) {

        > div:first-of-type {
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-template-rows: 1fr 1fr;
            gap: 2rem;


            div:nth-child(2),
            div:nth-child(3),
            div:nth-child(4),
            div:nth-child(5),
            div:nth-child(6),
            div:nth-child(7),
            div:last-child {
                display: block;
            }

            div:first-child {
                grid-column: 1/4;
                grid-row: 1/3;
                width: 100%;
                height: auto;
            }

            div:nth-child(2) {
                grid-column: 4/6;
            }

            div:nth-child(3) {
                grid-column: 4/6;
                position: relative;
            }

        }
    }

`

const BodyContainer = styled.div `
    margin-bottom: max(1vw, 1rem);    

`

const BodyContent = styled.div `
    

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2rem;
    }
`

const BodyHeader = styled.div `
    grid-column: 1/5;

    h2,p {
        margin: 0;
    }

    h2 {
        font-size: var( --font-xtra-small);
        font-weight: 600;
    }

`

const BodyHeaderIcon = styled.div `
    display: flex;
    margin: max(1vw, 1.2rem) 0;
`

const BodyIconCard = styled.div `
    ${FlexStyle}

    div {
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: 32px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 14px;
        }

        span {
            ${FlexStyle}
        }

    }

    > span:last-child {
        color: var(--color-dark);
        font-size: var( --font-small-screen);
        margin-left: max(0.5vw,0.3rem);
    } 

`

const BorderStyle = css`
    border-top:  1.80872px solid #000000;
    border-bottom:  1.80872px solid #000000;
    padding: max(1vw, 1rem) 0;
    margin-top: max(2vw, 1rem);

    @media screen and (min-width: 769px) {
        border: 1.80872px solid #000000;
        box-sizing: border-box;
        border-radius: 9.04362px;
        padding: max(1vw, 1rem);
    }
`

const H2 = css`
    font-size: var(--font-small-screen);
    font-weight: 600;
    margin: 0;
`
const Description = styled.div `
    grid-column: 1/4;

    div {
        ${BorderStyle}
    }


    h2 {
        ${H2}
    }

    p {
        font-size: var(--font-xtra-small-screen);
        margin: 0;
        justify-content: justify;
        color: var(--color-dark);
    }

`

const Amenities = styled.div `
    grid-column: 1/4;

    h2 {
        ${H2}
    }
`

const AmenitiesHeader = styled.div `

    > div:nth-child(2) {
        display: block;
        margin-top: max(2vw, 1rem);
    }

    > div:first-child > div:last-child {
        display: none; 
    }

    @media screen and (min-width: 769px) {
        
        ${BorderStyle}

        > div:first-child {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        > div:first-child > div:last-child {
            display: block; 
        }

        > div:nth-child(2) {
            display: none;
        }
    }


`

const Reservations = styled.div `
    grid-column: 5/7;
    grid-row: 1/4;
    position: relative;
    
`

const ReservationBody = styled.div `
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 1rem;

`

const ReservationContent = styled.div `

    > div:nth-child(2) {
        border: 1px solid rgba(33, 8, 8, 0.5);
        box-sizing: border-box;
        border-radius: 5px;
        margin: max(2vw,1rem) 0 0.7rem;
        /* padding: 10px; */

        > div:first-child {
            ${FlexStyle}
            border-bottom: 1px solid rgba(33, 8, 8, 0.5);

            > div {
                flex: 1;
                padding: 10px 10px 5px 10px;
            }

            > div:first-child {
                border-right: 1px solid rgba(33, 8, 8, 0.5);
            }

            span {
                text-transform: uppercase;
            }
            span:first-child {
                display: block;
                font-size: var(--font-xtra-small-screen);
                font-weight: 600;
            }

            span:nth-child(2) {
                font-size: 11px;
                font-weight: 500;
            }
        }

        > div:nth-child(2) {
            padding: 7px 10px 0px;
            position: relative;
            cursor: pointer;

            > div:first-child {
                ${FlexStyle}
                justify-content: space-between;
            }

            h4 {
                font-size: var(--font-xtra-small-screen);
                font-weight: 600;
                text-transform: uppercase;
                margin: 0;
            }
        }
    }

`

const ValueAdded = styled.div `
    border: 1px solid rgba(33, 8, 8, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;

    h4 {
        font-size: var(--font-xtra-small-screen);
        font-weight: 500;
        margin: 0;
    }

    > div {
        padding: 10px;
    }

`

const ModalDiv = styled.div `
    ${ModalStyle}
    height: 300px;
    z-index: 1;
`

const SvgStyle = css`
    font-size: 14px;
`

const SavedIcon = styled(AiOutlineHeart)`
    ${SvgStyle}
`

const LikeIcon = styled(FiShare) `
    ${SvgStyle}
`

const MobileIcons = styled.div `
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;


    span:first-child {
        margin-right: 0.7rem;
    }

    @media screen and (min-width: 769px) {
        display: none !important;
    }

`

const IconCard = styled.span `
    background: rgb(255, 255, 255);
    width: 24px;
    height: 24px;
    ${FlexStyle}
    justify-content: center;
    border-radius: var(--border-radius-xtra);
    color: var(--color-primary-dark);
    opacity: .9;
    cursor: pointer;

    :hover {
        opacity: 1;
    }

    @media screen and (min-width: 500px) {
        width: 40px;
        height: 40px;
    }
`

const SeePhotos = styled.div `
    position: absolute;
    right: 15px;
    bottom: 20px;

    @media screen and (min-width: 769px) {
        display: none !important;
    }
`



const PropertyDetails = () => {
    const {propertyDetail} = useSelector(state => state.propertyDetails)
    const [openGuest, setOpenGuest] = useState(false)
    const [openService, setOpenService] = useState(false)
    const modalRef = useRef()


    useClickOutside(modalRef, () => {
        if (openGuest || openService) {
            setOpenGuest(false)
            setOpenService(false)
        }
            // If user clicks outside of modal, close it.
    })

    

    return (
        <Section>
            <Main>
                {propertyDetail?.data.map((data) => (
                    <Header>
                        <HeaderContents>
                            <div>
                                <h1>{data?.name}</h1>
                                <p>{data?.street}</p>
                            </div>
                            <div>
                                <div style={{marginRight: '20px'}}>
                                    <Button fontWeight='600' icon={<SavedIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Save" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />
                                </div>
                                <div>
                                    <Button fontWeight='600' icon={<LikeIcon />} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Share" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)" color="var(--color-primary-dark)" />
                                </div>
                            </div>
                        </HeaderContents>
                        <ImageContainer>
                            <div>
                                <div>
                                    <img src={data.picOne} alt=""  width='100%' height='100%' />
                                    <MobileIcons>
                                        <IconCard><SavedIcon/></IconCard>
                                        <IconCard><LikeIcon /></IconCard>
                                    </MobileIcons>
                                    <SeePhotos>
                                        <Button fontWeight='500' display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="See all 12 photos" borderRadius="5px" padding="5px" background="#fff" border="1px solid rgba(28, 123, 147, 1)" color="var(--color-dark-gray)" />
                                    </SeePhotos>
                                </div>
                                <div><img src={data.picTwo} alt="" width='100%' height='100%'/></div>
                                <div>
                                    <img src={data.picThree} alt="" width='100%' height='100%' />
                                    <div style={{position: 'absolute', right: '15px', bottom: '20px'}}>
                                        <Button fontWeight='500' display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="See all 12 photos" borderRadius="10px" padding="8px" background="#fff" border="1px solid rgba(28, 123, 147, 1)" color="var(--color-dark-gray)" />
                                    </div>
                                </div>
                                <div><img src={data.picFour} alt="" width='100%' height='100%' /></div>
                                <div><img src={data.picFive} alt="" width='100%' height='100%' /></div>
                                <div><img src={data.picSix} alt="" width='100%' height='100%' /></div>
                                <div><img src={data.picFive} alt="" width='100%' height='100%' /></div>
                                <div><img src={data.picSix} alt="" width='100%' height='100%' /></div>
                            </div>
                        </ImageContainer>
                        <BodyContainer>
                            <BodyContent>
                                <BodyHeader>
                                    <h2>{data?.name}</h2>
                                    <BodyHeaderIcon>
                                        <BodyIconCard>
                                            <div>
                                                <span><IoBed/></span>
                                            </div>
                                            <span>{data?.bed} Beds</span>
                                        </BodyIconCard>
                                        <BodyIconCard style={{margin: '0 max(5vw, 1rem)'}}> 
                                            <div>
                                                <span>{Baths}</span>
                                            </div>
                                            <span>{data?.bath} Baths</span>
                                        </BodyIconCard>
                                        <BodyIconCard>
                                            <div>
                                                <span>{Rooms}</span>
                                            </div>
                                            <span>{data?.rooms} Rooms</span>
                                        </BodyIconCard>
                                    </BodyHeaderIcon>
                                </BodyHeader>
                                <Description>
                                    <h2>Description</h2>
                                    <div>
                                        <p>{data?.description}</p>
                                        <p style={{marginTop: '.8rem'}}>{data?.descriptionTwo}</p>
                                    </div>
                                </Description>
                                <Reservations>
                                    <ReservationBody>
                                        <ReservationContent>
                                            <div>
                                                <span>&#36;{data?.price}/night</span>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <span>Check-in</span>
                                                        <span>DD/MM/YYYY</span>
                                                    </div>
                                                    <div>
                                                        <span>Check-out</span>
                                                        <span>DD/MM/YYYY</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div onClick={() => setOpenGuest(!openGuest)}> 
                                                        <div>
                                                            <h4>Guests</h4>
                                                            <span>No</span>
                                                        </div>
                                                        <div>
                                                            {openGuest ? (<FiChevronUp />) : (<FiChevronDown />)}
                                                        </div>
                                                    </div>
                                                    {openGuest && (
                                                        <ModalDiv ref={modalRef} top="48px" width= "100%" left='0'   border="1px solid rgba(33, 8, 8, 0.22)">
                                                            Modal
                                                        </ModalDiv>
                                                    )}
                                                </div>
                                            </div>
                                            <ValueAdded>
                                                <div onClick={() => setOpenService(!openService)}> 
                                                    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
                                                        <div>
                                                            <h4>Additional Services</h4>
                                                        </div>
                                                        {openService ? (<FiChevronUp />) : (<FiChevronDown />)}
                                                    </div>
                                                    {openService && (
                                                        <ModalDiv  top="36px" ref={modalRef} width= "100%" left='0'  border="1px solid rgba(33, 8, 8, 0.22)">
                                                            Modal
                                                        </ModalDiv>
                                                    )}
                                                </div>
                                            </ValueAdded>
                                            <div style={{margin: '15px 0'}}>
                                                <Button title="Reserve" border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.7rem' fontSize='var(--font-xtra-small-screen)' />
                                            </div>
                                        </ReservationContent>
                                    </ReservationBody>
                                </Reservations>
                                <Amenities>
                                    <h2>Amenities</h2>
                                    <AmenitiesHeader>
                                        <div>
                                            <AmenitiesOne />
                                            <AmenitiesTwo />
                                        </div>
                                        <div>
                                            <Button  color='var(--color-dark)' padding='12px' fontWeight='600' fontSize="var(--font-xtraLarge-small)" background='transparent' title="Show all 23 ameninities" border="1.78224px solid #000000" borderRadius= '8.91119px' />
                                        </div>
                                    </AmenitiesHeader>
                                </Amenities>

                            </BodyContent>
                        </BodyContainer>
                    </Header>
                ))}
                
                
            </Main>
        </Section>
    )
}

export default PropertyDetails
