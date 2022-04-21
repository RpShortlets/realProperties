import styled from "styled-components"
import React, { useRef } from "react"
import { RealShortlets } from "../data/data"
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

const Contains = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 200px;
    perspective: 600px;


    div:first-child {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .card {
        transition: transform 2s;
        transform-style: preserve-3d;
        cursor: pointer;
        background: var(--color-light-gray);
        border-radius: 9.68824px;
        color: var(--color-primary);
        border: none !important;


        :hover {
            background: linear-gradient(270deg, rgba(33, 147, 176, 0) 0%, #17677B 0%, #1C7B93 28.87%, #2193B0 100%);
            color: #fff; 
        }

        p {
            margin: .5rem 0 0 0;
        }

        svg {
            font-size: 2.5rem !important;
        }

        
        @media screen and (min-width: 769px) {
            p {
                font-size: var(--font-small-screen)
            }

            svg {
                font-size: var(--font-big) !important;
            }
        }

    
    .front, .back {
        backface-visibility: hidden;
        height: 100%;
        width: 100%;
    }

    
    .front {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background: url("http://placehold.it/250x250"); */
        padding: max(2vw, 1.2rem);
    }

    .back {
        /* background: url("http://placehold.it/100x100"); */
        padding: 10px;
        overflow-x: auto;
        transform: rotateY(180deg);
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




const WhyRealShortlets = ({about, whyShortlet, setWhyShortLet, handleWhyRealShortlets, whyRealShortletId}) => {
    const refs = useRef(RealShortlets.map(() => React.createRef()));


    //handleClick rotate card to 180deg
    const handleClick = (e) => {
        if(refs?.current[e]) {
            if (refs.current[e].current.className === "card" ) {
                refs.current[e].current.style.transform = "rotateY(180deg)";
                /* if(refs.current[e].current.style.transform === "rotateY(180deg)") { */
                }
            };      
    }


    //handleLeaveCard rotate card back to 0deg
    const handleLeaveCard = (e) => {
        if(refs?.current[e]) { 
            refs.current[e].current.style.transform = "rotateY(0deg)";
        }
    }

    return (
        <Container>
            <Wrapper  about={about} paddingleft='true' paddingRight='true'>
                <h2>Why RP Shortlets</h2>
                <Content>
                    {RealShortlets.map((item, i) => (
                        <Contains className="container" key={i} >
                            <div className="card"  onMouseLeave={() => handleLeaveCard(item.id)} onMouseEnter={() => handleClick(item.id)} ref={refs.current[item.id]}>
                                <div className="front">
                                    <div>
                                        {item.image} 
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                                <div className="back">
                                    <p style={{fontSize: '12px', textAlign: 'start'}}>{item?.content}</p>
                                    <p style={{fontSize: '12px',  textAlign: 'start'}}>{item?.content2}</p>
                                    <p style={{fontSize: '12px',  textAlign: 'start'}}>{item?.content3}</p>

                                </div>
                            </div>
                        </Contains>
                    ))}
                </Content>
            </Wrapper>
        </Container>
    )
}

export default WhyRealShortlets
