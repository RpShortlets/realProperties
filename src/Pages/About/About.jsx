import {useState, useEffect} from 'react';
import styled, {css} from "styled-components/macro"
import { FlexStyle, PaddingStyle } from "../../styles/globalStyles"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import {Link} from "react-router-dom"
import WhyRealShortlets from '../Home/components/WhyRealShortlets';
import { useInView } from 'react-intersection-observer';
// import { Parallax } from 'react-scroll-parallax';


const SectStyle = css`
    ${FlexStyle}
    flex-direction: column;
    justify-content: center;
`

const Section = styled.section`
    width: 100%;
    background: var(--color-white);

    h1,h2 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-medium);
        margin: 0;
    }

    p {
        line-height: 1.7;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        p {
            text-align: justify;
        }
    }
`

const Main = styled.main`
    ${PaddingStyle}
    margin: max(3vw, 1.6rem) 0;

    .AboutReal {
        ${SectStyle}

        .AboutRealContent {
            margin-top: max(2.5vw, 1.5rem);


            p:nth-child(2),
            div p:first-child,
            p:last-child {
                margin: max(1.3vw, 1rem) 0;
            }

            p a {
                color: var(--color-primary);
                font-weight: 600;
                margin-left: 5px;
                font-size: var(--font-xtra-small-screen);
            }
        }
    }

    .ourMission {
        ${SectStyle}
        margin-top: max(2vw, 1.2rem);

        .ourMissionContent {
            max-width: 100%;
            margin-top: max(1vw, .8rem);
        }

        p:last-child {
            margin-top: max(1vw, .8rem);
        }
    }

    @media screen and (min-width: 769px) { 
        .ourMission {
            
            .ourMissionContent {
                /* max-width: 60%; */

                p {
                    line-height: 2;
                }
            }
        }
        
    }
`

const About = () => {
    const control = useAnimation()
    const {ref, inView} = useInView({
        
    });

    console.log(inView);

    useEffect(() => {
        console.log('render');
        if (inView) {
            control.start({
                x: 0, 
                transition: {
                    duration: 0.6,
                    type: 'tween',
                    bounceStiffness: 100,
                    bounceDamping: 10,
                    ease: 'easeInOut',
                    bounce: 0.2

                    
                }
            })
        }
        if(!inView) {
            control.start({
                x: '-100vw',
                transition: {
                    duration: 0.6,
                    type: 'tween',
                    
                }
            })
        }

    }, [inView]);

    const [isOpen, setIsOpen] = useState(false)
    return (
        <Section>
            <Main ref={ref}  paddingRight="true" paddingleft="true" >
                <motion.div  className="AboutReal"> 
                    {/* <Parallax speed={-5}> */}
                        <h1>About Real Property</h1>
                    {/* </Parallax> */}
                    
                    <div className="AboutRealContent">
                        <p>
                        Welcome to Real Property Assets and Technologies Limited, your number one source for luxurious and affordable Short Lets. We are dedicated to providing you with the very best of accommodations, the total service package and the perfect way to make reservations.                        </p>
                        <p>
                            Booking a Short Let has never been easier!
                        </p>
                        <p>
                            Real Property Assets and Technologies Ltd <span style={{fontWeight: '600'}}>(RPshortlets)</span> is a locally grown platform that caters to 3 types of customers; property owners who contractually entrust their properties to the company for hosting, property owners who exclusively list and host their properties via the Real Property Assets and Technologies platform and the guests looking for short term accommodation on the platform.  The company operates an e-commerce platform that enables “Guests” (business travelers, leisure travelers, families etc.) to connect with ‘Hosts’ (landlords, property owners etc.) looking for something more than a hotel for their trip                            {!isOpen && <Link to="#" onClick={() => setIsOpen((prev) => !prev)}> Read more...</Link>}
                        </p>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4,
                                        opacity: { ease: "linear" } 
                                    }}

                                >
                                    <p>
                                        Our platform offers guests various short term rentals varying from studio apartments up to beach houses and everything in between. All our rentals are luxurious accommodations equipped with what we believe are basic and necessary features such as Internet facilities, Security, Parking, Satellite TV and Air Conditioning.  We then offer experiential value-added services; Car Rentals (transit), Culinary Artists (food), Experience Curators (trip design and planning) and Valet Services (personal assistance).
                                    </p>
                                    <p>
                                        We are dedicated to helping guests find the perfect upscale short let from the comfort of their homes by providing a virtual tour of our first-rate rentals in real-time so anyone can take a look around to verify for themselves that every feature is as advertised.                                     </p>
                                    <p>
                                        Real Properties is based in Lagos, Nigeria, and growing steadily, at the moment, the platform is only accessible via the website {isOpen && <Link to="#" onClick={() => setIsOpen((prev) => !prev)}> Read less...</Link>}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                <motion.div  initial={{x: '100vw'}} animate={{x: 0}} transition={{type: 'tween', duration: 0.6, bounce: 0.5}} className="ourMission">
                    <h2>Our Mission</h2>
                    <div className='ourMissionContent'>
                        <p>
                            To provide travellers a platform to choose the perfect home away from home, by redefining Nigeria’s online real estate space.                        
                        </p>
                    </div>
                </motion.div>
                <motion.div animate={control}>
                    <WhyRealShortlets about="true" />
                </motion.div>
            </Main>
        </Section>
    )
};

export default About;
