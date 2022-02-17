import React, {useState} from 'react';
import styled from 'styled-components';
import { PaddingStyle, FlexStyle } from '../../styles/globalStyles';
import Intro from "../../image/faq.webp"
import useProgressiveImage from '../../hooks/useProgressiveImage/useProgressiveImage';
import Button from "../../components/Button/Button"
import {motion, AnimatePresence} from 'framer-motion'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import { MapPinIcon, Phone, Envelop, WhatsAppIcon } from '../../Svg/svg'

import {FaqData} from './Data/data'

const Section =  styled.section`
    background: #fff;
    height: 100%;
    width: 100%;
`

const Main = styled.main`
    /* ${PaddingStyle} */
`

const Header = styled.header`
    width: 100%;
    min-height: calc(100vh - 15rem);
    ${FlexStyle}
    justify-content: center;
    background: rgba(0, 0, 0, .08) !important;


    div:first-child {
        ${FlexStyle}
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    h2 {
        font-size: var(--font-Xtrabig);
        font-weight: 600;
        color: var(--color-white);
        margin: 0;
        text-rendering: optimizespeed;
        text-shadow: 4px 3px black;
        margin-bottom: max(1.5rem ,1rem);
    }

`

const Container = styled.div`
    ${PaddingStyle} 
    margin: max(5vw, 1.5rem) 0;
`

const FAQ = styled.div`

    h2 {
        color: var(--color-primary-dark);
        font-weight: 600;
        font-size: var(--font-medium);
        margin: 0;
    }

    .FaqHeader {
        ${FlexStyle}
        justify-content: center;
    }

    .FaqContent {
        margin-top: max(4vw, 1.5rem);
        border-bottom: 1px solid rgba(128, 128, 128, 0.7);
        padding-bottom: max(2vw, 1rem);

        h3 {
            font-size: var(--font-small);
            font-weight: 500;
            color: var(--color-primary-dark);
            margin: 0;
        }

        .FaqContentHeader { 
            ${FlexStyle}
            justify-content: space-between;
            cursor: pointer;
        }

        .FaqContentBody {
            margin-top: max(1vw, 1rem);

            p {
                margin: 0;
                color: var(--color-dark-gray);
                font-size: var(--font-small-screen);
                line-height: 2;
            }
        }
    }

`

const Contact = styled.div`
    background: #F3F3F3;
    ${PaddingStyle} 

    .contactWrapper {
        padding: max(4vw, 2rem) 0;
        display: flex;
        flex-wrap: wrap;
    }

    .contactWrapperBody {
        ${FlexStyle}
        margin-bottom: max(3vw, 1.5rem);

        address, p {
            margin: 0;
        }

        > div:first-child {
            width: max(3vw, 2rem);
            height: max(3vw, 2rem);

            span {
                background: var(--color-primary);
                color: var(--color-white);
                width: 100%;
                border-radius: 32px;
                height: 100%;
                ${FlexStyle}
                justify-content: center;
            }

            svg {
                font-size: var(--font-small);
            }
        }

        > div:last-child {
            margin-left: max(1vw, 0.7rem); 

            h5 {
                font-size: var(--font-small-screen);
                font-weight: 600;
                margin: 0;
            }
        }
    }

    @media screen and (max-width: 468px) {
        .contactAddress {
            > div:first-child {width: 2.6rem !important;}
        }
    }
    @media screen and (min-width: 660px) {
        .contactWrapper {
            justify-content: space-around;
        }

    }

`

const CustomerSupport = () => {
    const loadedImg = useProgressiveImage(Intro)
    const [open, setOpen] = useState({id: Number, open: false})

    const handleFaq = (id) => {
        setOpen({
            id: id,
            open: !open.open
        })
    }

console.log(open)
    return (
        <Section>
            {/* {loadedImg && ( */}
                <Main>
                    <ParallaxBanner
                        layers={[
                            { image: loadedImg, speed: -20 },
                        ]}
                        className="aspect-[2/1]"
                    >
                        <Parallax 
                            translateY={['100px', '-80px']}
                            easing="easeInQuad"
                            scale={[0.75, 1]}
                        >
                            <Header>
                                <div>
                                    <h2>Hello, how can we help you?</h2>
                                    <Button 
                                        title="Log a complaint"
                                        background="var(--linear-primary)"
                                        border="none"
                                        color="var(--color-white)"
                                        borderRadius="32px"
                                        padding="1rem 3rem"
                                    />
                                </div>
                            </Header>
                        </Parallax>
                    </ParallaxBanner>
                    <Contact paddingRight="true" paddingleft="true">
                        <div className="contactWrapper">
                            <div>
                                <div className="contactWrapperBody contactAddress">
                                    <div>
                                        <span>{MapPinIcon}</span>
                                    </div>
                                    <div>
                                        <h5>Address</h5>
                                        <address>No 7, Sumbo Jibowu street, Off Ribadu street, Ikoyi.</address>
                                    </div>
                                </div>
                                <div className="contactWrapperBody">
                                    <div>
                                        <span>{Phone}</span>
                                    </div>
                                    <div>
                                        <h5>Call</h5>
                                        <p>09044777700</p>
                                    </div>
                                </div>
                                <div className="contactWrapperBody">
                                    <div>
                                        <span>{Envelop}</span>
                                    </div>
                                    <div>
                                        <h5>Email</h5>
                                        <p>info@realpropertyasset.com</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="contactWrapperBody">
                                        <div>
                                            <span>{WhatsAppIcon}</span>
                                        </div>
                                        <div>
                                            <h5>Whatsapp</h5>
                                            <p>09044777700</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Contact>
                    <Container paddingRight="true" paddingleft="true">
                        <FAQ>
                            <div className="FaqHeader">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <>
                                {FaqData?.map((data, index) => (
                                    <div className='FaqContent' key={data.id}>
                                        <div className="FaqContentHeader"onClick={() => handleFaq(data?.id)}>
                                            <h3>{data.header}</h3>
                                            <Button 
                                                icon={open.id === data?.id && open.open ? <FiMinus/> : <IoMdAdd/>} 
                                                background="var(--linear-primary)"
                                                color="var(--color-white)"
                                                border="none"
                                                display="flex"
                                                borderRadius="32px"
                                                padding=".4rem"
                                            />
                                        </div>
                                        <AnimatePresence initial={false}>
                                        {open.id === data?.id && open.open && (
                                            <motion.div 
                                                className="FaqContentBody"
                                                initial={{ opacity: 0, x: -100}}
                                                animate={{ opacity: 1, x: 0}}
                                                exit={{ opacity: 0, x: -100}}
                                                transition={{ duration: 0.5,
                                                    type: { opacity: 'tween', x: 'tween' }
                                                }}
                                            >
                                                <p>
                                                    {data?.content}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    </div>
                                ))}
                            </>
                        </FAQ>
                    </Container>
                </Main>
            {/* )} */}
        </Section>
    )
};

export default CustomerSupport;
