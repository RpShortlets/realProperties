import { useState, useEffect } from "react"
import styled  from "styled-components/macro"
import { useSelector } from "react-redux"
import Lightbox from 'react-spring-lightbox';
import {AiOutlineCamera, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"
import Backdrop from "../../../components/Backdrop"
import Button from "../../../components/Button/Button"
// import ReactPlayer from 'react-player'
// import Video from "../../../video/a4.mp4"


import Pic14 from "../../../image/small/picSix.jpeg"
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery";
import useProgressiveImage from "../../../hooks/useProgressiveImage/useProgressiveImage";




const ImageWrapper = styled.div ` 
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
`

const LargeImage = styled.div `
    grid-column: 1/4;
    grid-row: 1/3;
    height: ${({height}) => height ? '100%': 'calc(100% - 0px)'};
    
    div {
        position: relative;
        span {
            position: absolute;
            left: 20px;
            bottom: 20px;
            background: rgba(0, 0, 0, .4);
            font-size: var(--font-xtra-small-screen);
            color: var(--color-white);
            padding: 5px 10px;
            font-weight: 300;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1
            
        }

        span:hover {
            opacity: .8;
        }

        

        svg {
            margin-right: .2rem;
        }
    }

    @media (max-width: 768px) {
        grid-column: 1/8;
        height: ${({height}) => height ? '400px': 'calc(100% - 10px)'};
    }
`

const SmallImage = styled.div `
    display: none;

    @media (min-width: 769px) {
        display: block;
    }
`


const ImageContainer = styled.div `
    margin: max(3vw, 2rem) 0;
    img {
        object-fit: cover;
        border-radius: 10px !important;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }


`



const CustomLeftArrowButton = (props) => { 
    return (
        <>
            {props?.currentImageIndex > 0 && 
                <Button 
                    alignT="center" 
                    display="flex" 
                    width={props.Query ? "40px" : ""} 
                    height={props.Query ? "40px" : ""} 
                    boxShadow="var(--shadow)" 
                    zIndex='15' 
                    left={props.Query ? '12%' :  '1%'}
                    position='absolute' 
                    onClicks={props.onClicks}  
                    icon={<AiOutlineLeft />} 
                    color="var(--color-primary)"  
                    fontSize={props.Query ? "var(--font-small)" : "var(--font-small)" } 
                    border="0" 
                    outline="0" 
                    background="#fff" 
                    borderRadius="20px"
                    padding={props.Query ? "6px 10px" : '15px'} 
                />
            }
        </>
    )
}

export const CustomRightArrowButton = (props) => {
    return (
        <>
            {props?.images?.length > props?.currentImageIndex + 1  && 
                <Button 
                    alignT="center" 
                    display= "flex" 
                    width={props.Query ? "40px" : ""} 
                    height={props.Query ? "40px" : ""}  
                    boxShadow="var(--shadow)" 
                    zIndex='15' 
                    right={props.Query ? '12%' : '1%'} 
                    position='absolute' 
                    onClicks={props.onClicks}  
                    icon={<AiOutlineRight />} 
                    color="var(--color-primary)"  
                    fontSize={props.Query ? "var(--font-small)" : "var(--font-small)" } 
                    border="0" 
                    outline="0" 
                    background="#fff" 
                    borderRadius="20px" 
                    padding={props.Query ? "6px 10px" : '15px'}  
                />
            }
        </>
    )
}


const PropertyImage = ({status}) => {
    const Query = useMediaQuery("(min-width: 769px)")

    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const {PropertyDetails: {pictures}} = useSelector(state => state.propertyDetails)
    const firstImage =  status === 'succeeded' && pictures[0]?.src 
    
    const loaded = useProgressiveImage(firstImage) 


    const showPictures = (id) => {
        setIsOpen(true)
        setCurrentIndex(id)
    }


    const images = [
        {
            src: status === "succeeded" && pictures[10]?.src && pictures[10]?.src,
            loading: 'lazy',
            alt: '',
        },
        {
            src: status === "succeeded" && pictures[11]?.src,
            loading: 'lazy',
            alt: '',
        },
        {
            src: status === "succeeded" &&  pictures[9]?.src,
            loading: 'lazy',
            alt: '',
        },
        {
            src: status === "succeeded" && pictures[7]?.src && pictures[7]?.src ,
            loading: 'lazy',
            alt: '',
        },
        {
            src: status === "succeeded" && pictures[8]?.src && pictures[8]?.src,
            loading: 'lazy',
            alt: '',
        },
        {
            src: status === "succeeded" && pictures[12]?.src && pictures[12]?.src,
            loading: 'lazy',
            alt: ''
        },
        {
            src: status === "succeeded" && pictures[13]?.src && pictures[13]?.src,
            loading: 'lazy',
            alt: ''
        },
        // {
        //     src: status === "succeeded" && pictures[14]?.src && pictures[14]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[15]?.src && pictures[15]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[13]?.src && pictures[13]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[16]?.src && pictures[16]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[17]?.src && pictures[17]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[18]?.src && pictures[18]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[19]?.src && pictures[19]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // },
        // {
        //     src: status === "succeeded" && pictures[20]?.src && pictures[20]?.src,
        //     loading: 'lazy',
        //     alt: ''
        // }

    ];

    


    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen])
    

    return (
        <>
            {isOpen  && <Backdrop onClick={()=> setIsOpen(!isOpen)} zIndex="4" theme="rgba(0, 0, 0, .9)" /> }
            <Lightbox
                isOpen={isOpen}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                images={images}
                currentIndex={currentImageIndex}
                onClose={() => setIsOpen(false)} 
                renderPrevButton={() => (<CustomLeftArrowButton Query={Query} onClicks={gotoPrevious}  currentImageIndex={currentImageIndex}/>)}
                renderNextButton={() => (<CustomRightArrowButton Query={Query} onClicks={gotoNext} currentImageIndex={currentImageIndex} images={images} />)}
            />
            <ImageContainer>
                <ImageWrapper>
                    <LargeImage height={status === 'loading' ? 'true' : ''}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : 
                            status === "succeeded" && (
                            <div onClick={() => showPictures(0)} style={{height: '100%'}}>
                                <img data-src={pictures[0]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                                {loaded && (
                                    <span style={{cursor: 'pointer'}}>
                                        <AiOutlineCamera /> Click to see all pictures
                                    </span>
                                )}
                            </div>
                        )}
                        
                    </LargeImage>
                    <SmallImage style={{gridColumn: '4/6'}} onClick={() => showPictures(1)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={pictures[4]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage style={{gridColumn: '6/8'}} onClick={() => showPictures(2)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={pictures[2]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage onClick={() => showPictures(3)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={pictures[3]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage onClick={() => showPictures(4)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={pictures[1]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage onClick={() => setIsOpen(true)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={Pic14} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage onClick={() => showPictures(6)}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : 
                            status === "succeeded" && (
                            <img data-src={pictures[6]?.src} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                </ImageWrapper>
                {/* <ReactPlayer
                    className='react-player'
                    url={Video}
                    width='100%'
                    height='100%'
                    controls={true}
                /> */}
            </ImageContainer>
        </>
    )
}

export default PropertyImage
