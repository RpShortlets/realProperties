import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FlexStyle, PaddingStyle, CardGallery, MediaScroller, MediaElement } from '../../styles/globalStyles'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import  {fetchGallarySuccess} from '../../redux/actions/gallery'
import { motion, AnimatePresence } from "framer-motion"
import {AiOutlineCamera} from "react-icons/ai"

import A4Image from "../../image/small/picThree.jpeg"
import C4Image from "../../image/Man/pixFour.jpeg"

import A4video from "../../video/A4Video.mp4"
import C4Video from "../../video/c4Video.mp4"
import MotherImage from "../../image/mother.webp"

import Error from '../../components/Error/Error'

import Backdrop from "../../components/Backdrop"
import ImageModal from '../../components/Image Modal/ImageModal'
import { MainNav } from '../../components/Nav/Dropdown/MainNav'
import { VideoPlayer } from '../../Svg/svg'
import Button from '../../components/Button/Button'
import VideoModal from './components/VideoModal'
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery'
import useProgressiveImage from '../../hooks/useProgressiveImage/useProgressiveImage'


const VideoImages = [
    {
        id: 0,
        image: A4Image,
        name: 'A4',
    },
    {
        id: 1,
        image: C4Image,
        name: 'C4',
    }
]

const VideoData = [
    {
        id: 0,
        src: A4video
    },
    {
        id: 1,
        src: C4Video
    }
]

const EventImages = [
    {
        id: 0,
        image: MotherImage,
        name: 'Mother\'s Day 2022',
    },
]

const Section  = styled.section`
    background-color: var(--color-secondary);
    width: 100%;
    height: 100%;
    padding: max(4vw, 6rem) 0;
`
const Main = styled.main`
    ${PaddingStyle}
    height: 100%;
`

const Header = styled.div `
    ${FlexStyle}
    flex-direction: column;
    justify-content: center;

    div:first-child {
        display: flex;
        margin-bottom: 1rem;

        h3 {
            font-size: var(--font-small);
        }
    }


    

`

const Scroller = styled.div`
    display: flex;
    ${MediaScroller}

    @media screen and (max-width: 700px) {
        width: 100%;
    }

`

const Span = styled.span`
    background: ${({background}) => background  ? "#17677B" : "var(--color-white)"};
    cursor: pointer;
    color:  ${({background}) => background  ? "#fff" : "#17677B"}; ;
    border-radius: 54px;
    width: 10vw;
    ${FlexStyle}
    justify-content: center;
    flex-direction: column;
    font-size: var(--font-xtraLarge-small);
    text-align: center;
    /* height: fit-content;
    padding: 0.5rem;
    
    
    
    margin: 0 10px; */
    ${MediaElement}

    &:hover {
        background: #17677B;
        color: #fff;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        /* font-size: .6rem; */
    }
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: max(3vw,2rem) 0 0;

    

    @media screen and (min-width: 700px) and (max-width: 989px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 990px) {
        grid-template-columns: repeat(3, 1fr); 
    }
    
`

const ImageWrap = styled.div`
    grid-column: span 1;
    cursor: pointer;
        

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 10px 10px 5px #ccc;
        -moz-box-shadow: 10px 10px 5px #ccc;
        -webkit-box-shadow: 10px 10px 5px #ccc;
        -khtml-box-shadow: 10px 10px 5px #ccc;
        cursor: pointer;
    }

    @media screen and (min-width: 700px) and (max-width: 989px) {
        div {
            height: auto
        }
    }

    @media screen and (min-width: 990px) {
        div {
            height: 280px;
        }
    }

`
const Cards = styled.div `
    ${CardGallery}
    position: relative;
    height: ${({imageLoaded}) => !imageLoaded ? "250px" : "auto"};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 9px;
    }

    >  div:first-child {
        ::before {
            position: relative;
        }

        ::after {
            content: "";
            position: absolute;
            left: 0; right: 0;
            top: 0; bottom: 0;
            width: 100%;
            height: ${({imageLoaded}) => !imageLoaded ? "250px" : "100%"};
            /* height: 100%; */
            background: ${({isHover}) => isHover ? "rgba(0,0,0,.9)" : "rgba(0,0,0,.5)" };
            border-radius: 9px;
    
            :hover {
                background: #fff !important;
            }
        }

    }

    span {
        position: absolute;
        color: #fff;
        ${FlexStyle}
        justify-content: center;
        width: 100%;
        flex-direction: column;
        height: 100%
    }

    .eventContainer {
        overflow-y: scroll;
        padding: 20px 16PX;
        position: absolute;
        color: #fff;
        ${({isHover}) => !isHover && FlexStyle}
        justify-content: space-around;
        width: 100%;
        flex-direction: column;
        height: 100%;

        p,ol,li {
            margin: 0;
            font-size: ${({isHover}) => !isHover ? 'var(--font-small)' : "var(--font-xtraLarge-small)" };
            font-weight:  ${({isHover}) => !isHover && '600'};
            line-height: 1.5;
            text-align: justify;
        }

        div {
            ${FlexStyle}

            span {
                display: contents;
            }

            svg {
                margin-right: 5px;
                font-size: 15px;
            }
        }
    }
`
const container = {
    hidden: { rotate: 90 },
    show: {
        rotate: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
}

const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: -20 },
}

const GalleryImages = () => {
    const dispatch = useDispatch()
    const Query = useMediaQuery("(min-width: 600px)")
    const A4loaded = useProgressiveImage(A4Image)
    const { gallary, largeA4Image, largeC4Image, motherDay } = useSelector(state => state.gallary)
    const { pathname } = useLocation()
    const [apartmentName, setApartmentName] = useState("A4")
    const [videoId, setVideoId] = useState(0)
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [currentImageIndexMother, setCurrentIndexMother] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [isHover, setIsHover] = useState(false)

    const ItemIds =  pathname === "/gallery/apartments" ? [ 
    
        {
            id: 0,
            title: 'Home',
            path: '/'
        },
        {
            id: 1,
            title: 'Gallery',
            path: '/gallery'
        },
        { 
            id: 2,
            title:  'Videos',
            path: '/gallery/videos'
        },
        { 
            id: 3,
            title:  'Event',
            path: '/gallery/event'
        },
        {
            id: 4,
            title: 'Cars',
            path: '/gallery/cars'
        },
        {
            id: 5,
            title: 'Experience',
            path: '/gallery/experience'
        }
    ] : pathname === "/gallery/videos" ? [ 
    
        {
            id: 0,
            title: 'Home',
            path: '/'
        },
        {
            id: 1,
            title: 'Gallery',
            path: '/gallery'
        },
        { 
            id: 2,
            title:  'Apartments',
            path: '/gallery/apartments'
        },
        { 
            id: 3,
            title:  'Event',
            path: '/gallery/event'
        },
        {
            id: 4,
            title: 'Cars',
            path: '/gallery/cars'
        },
        {
            id: 5,
            title: 'Experience',
            path: '/gallery/experience'
        }
    ] : pathname === "/gallery/cars" ? [ 
    
        {
            id: 0,
            title: 'Home',
            path: '/'
        },
        {
            id: 1,
            title: 'Gallery',
            path: '/gallery'
        },
        { 
            id: 2,
            title:  'Apartments',
            path: '/gallery/apartments'
        },
        { 
            id: 3,
            title:  'Event',
            path: '/gallery/event'
        },
        {
            id: 4,
            title: 'Videos',
            path: '/gallery/videos'
        },
        {
            id: 5,
            title: 'Experience',
            path: '/gallery/experience'
        }
    ] : pathname === "/gallery/experience" ?  [ 
        {
            id: 0,
            title: 'Home',
            path: '/'
        },
        {
            id: 1,
            title: 'Gallery',
            path: '/gallery'
        },
        { 
            id: 2,
            title:  'Apartments',
            path: '/gallery/apartments'
        },
        { 
            id: 3,
            title:  'Event',
            path: '/gallery/event'
        },
        {
            id: 3,
            title: 'Videos',
            path: '/gallery/videos'
        },
        {
            id: 4,
            title: 'Cars',
            path: '/gallery/cars'
        }
    ] : pathname === "/gallery/event" &&  [ 
    
        {
            id: 0,
            title: 'Home',
            path: '/'
        },
        {
            id: 1,
            title: 'Gallery',
            path: '/gallery'
        },
        { 
            id: 2,
            title:  'Apartments',
            path: '/gallery/apartments'
        },
        {
            id: 3,
            title: 'Videos',
            path: '/gallery/videos'
        },
        {
            id: 4,
            title: 'Cars',
            path: '/gallery/cars'
        }
    ] 

    const showPictures = (id) => {
        setIsOpen(true)
        setCurrentIndex(id)
    }

    let images = []
    let mDay = [];
    //* TRANSFORM IMAGES TO ARRAY OF OBJECTS
    for (var i = 0; i < gallary?.length; i++) {
        if(apartmentName === "A4") { 
            images = largeA4Image.map(image => ({
                src: image.src,
                loading: 'lazy',
            }))
        } else {
            images = largeC4Image.map((image) => ({
                src: image.src,
                loading: 'lazy',
            }))
        }
    }

    for (var m = 0; m < motherDay?.length; m++) {
        mDay = motherDay.map((image) => ({
            src: image.src,
            loading: 'lazy',
        }))

        
        
    }
   

    //* END OF TRANSFORM IMAGES TO ARRAY OF OBJECTS

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    //! Mother day next and previous function
    const gotoPreviousMother = () =>
        currentImageIndexMother > 0 && setCurrentIndexMother(currentImageIndexMother - 1);
    const gotoNextMother = () =>
        currentImageIndexMother + 1 < mDay.length &&
        setCurrentIndexMother(currentImageIndexMother + 1);
    
    //* GET IMAGES FROM REDUX STORE
    const GetImages = (id) => {
        dispatch(fetchGallarySuccess(id))
        setApartmentName(id)
    }


    //* PLAY VIDEO IN A MODAL
    const playVideo = (id) => {
        setVideoId(id)
        setIsOpenVideo((prev) => !prev)
    }
    

    

    useEffect(() => {
        dispatch(fetchGallarySuccess(apartmentName))
        if (isOpen || isOpenVideo) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, isOpenVideo, apartmentName, dispatch]);


    //! TODO ANIMATE IMAGE ON EVERY CLICKS
    // useEffect(() => {
    
    //     controlAnimation.start({
    //         hidden: { rotate: 90 },
    //         show: {
    //             rotate: 0,
    //             transition: {
    //                 staggerChildren: 0.9,
    //                 delayChildren: 0.6,
    //             },
    //         },
    //     })
    // }, [])
    
    

    if(pathname === '/gallery/videos'){ 
        return (
            <>
                {isOpenVideo && 
                    <VideoModal 
                        setIsOpenVideo={setIsOpenVideo} 
                        isOpenVideo={isOpenVideo}
                        src={VideoData[videoId].src}
                        query={Query} 
                    
                    />
                }
                <Section>
                    <Main paddingleft="true" paddingRight="true" >
                        <div>
                            <MainNav ItemIds={ItemIds} top="20px" zIndex="1" />
                        </div>
                        <ImageContainer
                            as={motion.div} 
                            variants={container}
                            initial="hidden"
                            animate="show"

                        >
                            {VideoImages?.map((image, index) => (
                                <Cards 
                                    imageLoaded={A4loaded}
                                    as={motion.div} key={index} variants={itemB} 
                                    onClick={() => playVideo(image.id)}   
                                >
                                    <div>
                                        <img src={image.image} alt={image.name} />
                                    </div>
                                    <span>
                                        <Button 
                                            icon={VideoPlayer} 
                                            border="1px solid var(--color-primary)" 
                                            background="transparent" 
                                            display={"flex"}
                                            alignT="center"
                                            justify={"center"}
                                            padding= {Query ? "1rem" : ".8rem"}
                                            borderRadius="40px"
                                            fontSize= "var(--font-medium)"
                                        />
                                    </span>
                                </Cards>
                            ))}
                        </ImageContainer>
                    </Main>
                </Section>
            </>
            )
    }

    if(pathname === '/gallery/cars' ) { 
        return (
            <Section>
                <Main paddingleft="true" paddingRight="true" >
                    <div>
                        <MainNav ItemIds={ItemIds} top="20px"  />
                    </div>
                    <Error title="We are updating our gallery. Please check back." />
                </Main>
            </Section>
        )
    }

    if(pathname === '/gallery/experience') {
        return ( 
            <Section>
                <Main paddingleft="true" paddingRight="true" >
                    <div>
                        <MainNav ItemIds={ItemIds} top="20px"  />
                    </div>
                    <Error title="We are updating our gallery. Please check back." />
                </Main>
            </Section>
        )
    }

    if(pathname === '/gallery/event') {
        return ( 
            <>
                {isOpen  && <Backdrop onClick={()=> setIsOpen(!isOpen)} zIndex="4" theme="rgba(0, 0, 0, .9)" /> }
                <ImageModal 
                    isOpen={isOpen} 
                    gotoPrevious={gotoPreviousMother} 
                    gotoNext={gotoNextMother} 
                    images={mDay} 
                    currentImageIndex={currentImageIndexMother} 
                    setIsOpen={setIsOpen} 
                />
                <Section>
                    <Main paddingleft="true" paddingRight="true" >
                        <div>
                            <MainNav ItemIds={ItemIds} top="20px"  zIndex="1" />
                        </div>
                        <ImageContainer
                                as={motion.div} 
                                variants={container}
                                initial="hidden"
                                animate="show"

                            >
                                {EventImages?.map((image, index) => (
                                    <Cards 
                                        imageLoaded={A4loaded}
                                        as={motion.div} key={index} variants={itemB} 
                                        onClick={() => showPictures(index)}  
                                        isHover={isHover}
                                        onMouseEnter={() => setIsHover((prev) => !prev)}
                                        onMouseLeave={() => setIsHover((prev) => !prev)}
                                    >
                                        <div>
                                            <img src={image.image} alt={image.name} />
                                        </div>
                                        {isHover ? (
                                            <div className='eventContainer'>
                                                <p>
                                                    Gaspard mermillod wouldn???t have said it better when he said ???A mother is she who can take the place of all others but whose place no one else can take???
                                                    Rpshortlets organized a Mother???s Day giveaway event which took place on Friday, April 8, 2022. 
                                                    The winners of the giveaway received these packages:
                                                </p>
                                                <ol>
                                                    <li>2 days stay in our luxurious apartments</li>
                                                    <li>Pick up/drop off services between their homes and apartments</li>
                                                    <li>Meals were provided </li>
                                                    <li>Gifts were given to winners </li>
                                                </ol>
                                                <p>
                                                    Our collaborators Perriescafe created a delicious spread (or meals) for the occasion, while Cerisenoire did a spectacular job with the gifts which were given to the winners. 

                                                    The view from the property was beautiful, and the apartment could not have been better.

                                                    Our hosts had an amazing time with the winners and their needs were carted for. 

                                                    The event was a huge success and the mothers were delighted.

                                                    Our apartments are indeed an affordable luxury you need to experience too.
                                                </p>
                                            </div>
                                        ) : (
                                            <div className='eventContainer'>
                                                <p>
                                                    {image.name}
                                                </p>
                                                <div>
                                                    <AiOutlineCamera /> 
                                                    <span>Click to see pictures</span>
                                                </div>
                                            </div>
                                        )}
                                    </Cards>
                                ))}
                            </ImageContainer>
                    </Main>
                </Section>
            </>
        )
    }



    return (
        <>
            {isOpen  && <Backdrop onClick={()=> setIsOpen(!isOpen)} zIndex="4" theme="rgba(0, 0, 0, .9)" /> }
            <ImageModal 
                isOpen={isOpen} 
                gotoPrevious={gotoPrevious} 
                gotoNext={gotoNext} 
                images={images} 
                currentImageIndex={currentImageIndex} 
                setIsOpen={setIsOpen} 
            />
            <Section>
                {pathname === '/gallery/apartments' && (
                    <Main  paddingleft="true" paddingRight="true">
                        <div>
                            <MainNav ItemIds={ItemIds} top="20px"  />
                        </div>
                        <Header>
                            <div>
                                <h3>{apartmentName === "" ? "" : `Apartment pictures of ${apartmentName?.toLocaleUpperCase()}`} </h3>
                            </div>
                            <Scroller>
                                {['A4', 'C4', 'U3'].map((item, index) => (
                                    <Span background={apartmentName === item} onClick={() => GetImages(item)}>Apartment {item}</Span>
                                ))}
                            </Scroller>
                        </Header>
                        {gallary && gallary.length > 0 ? (
                            <AnimatePresence initial="false">
                                <ImageContainer 
                                    as={motion.div} 
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {gallary?.map((item, index) => (
                                        <ImageWrap as={motion.div} key={index} variants={itemA} onClick={() => showPictures(index)}>
                                            <img src={item?.src} alt={item.title} key={index} />
                                        </ImageWrap>
                                    ))}
                                </ImageContainer>
                            </AnimatePresence>
                            
                        ): apartmentName === "U3" &&  gallary.length < 1 ? (
                            <Error title="Pictures coming soon"  height="50vh" />
                        ) : (
                            <Error title="Click to check-out apartment pictures of your choice." height="50vh" />
                        )}
                    </Main>
                )}
            </Section>
        </>
    )
}

export default GalleryImages