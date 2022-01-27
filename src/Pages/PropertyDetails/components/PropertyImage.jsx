import { useState, useEffect } from "react"
import styled  from "styled-components/macro"
import Lightbox from 'react-spring-lightbox';
import {AiOutlineCamera, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"
import Backdrop from "../../../components/Backdrop"
import Button from "../../../components/Button/Button"
// import ReactPlayer from 'react-player'
// import Video from "../../../video/a4.mp4"

import Pic1 from "../../../image/largeScreen/picOne.jpeg"
import Pic2 from "../../../image/largeScreen/picTwo.jpeg"
import Pic3 from "../../../image/largeScreen/picThree.jpeg"
import Pic4 from "../../../image/largeScreen/picFour.jpeg"
import Pic5 from "../../../image/largeScreen/picFive.jpeg"
import Pic12 from "../../../image/largeScreen/picSix.jpeg"
import Pic13 from "../../../image/largeScreen/picSeven.jpeg"
import Pic7 from "../../../image/small/picFour.jpg"
import Pic8 from "../../../image/small/picFive.jpg"
import Pic9 from "../../../image/small/picThree.jpg"
import Pic10 from "../../../image/small/picOne.jpg"
import Pic11 from "../../../image/small/picTwo.jpg"
import Pic14 from "../../../image/small/picSix.jpeg"
import Pic15 from "../../../image/small/picSeven.jpeg"



const ImageWrapper = styled.div ` 
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
`

const LargeImage = styled.div `
    grid-column: 1/4;
    grid-row: 1/3;

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
`

const SmallImage = styled.div `
    
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
/* 
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
    } */


    /* @media screen and (min-width: 769px) {

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
    } */

`

// const MobileIcons = styled.div `
//     position: absolute;
//     top: 15px;
//     right: 15px;
//     display: flex;


//     span:first-child {
//         margin-right: 0.7rem;
//     }

//     @media screen and (min-width: 769px) {
//         display: none !important;
//     }

// `
// const SvgStyle = css`
//     font-size: 14px;
// `

// const SavedIcon = styled(AiOutlineHeart)`
//     ${SvgStyle}
// `

// const LikeIcon = styled(FiShare) `
//     ${SvgStyle}
// `

// const IconCard = styled.span `
//     background: rgb(255, 255, 255);
//     width: 24px;
//     height: 24px;
//     ${FlexStyle}
//     justify-content: center;
//     border-radius: var(--border-radius-xtra);
//     color: var(--color-primary-dark);
//     opacity: .9;
//     cursor: pointer;

//     :hover {
//         opacity: 1;
//     }

//     @media screen and (min-width: 500px) {
//         width: 40px;
//         height: 40px;
//     }
// `

// const SeePhotos = styled.div `
//     position: absolute;
//     right: 15px;
//     bottom: 20px;

//     @media screen and (min-width: 769px) {
//         display: none !important;
//     }
// `


const CustomLeftArrowButton = (props) => {
    return (
        <>
            {props?.currentImageIndex > 0 && <Button boxShadow="var(--shadow)" zIndex='15' left= '12%' position='absolute' onClicks={props.onClicks}  icon={<AiOutlineLeft  color="var(--color-primary)"  fontSize="var(--font-small)"/>} border="0" outline="0" background="#fff" borderRadius="20px" padding="6px 10px" />}
        </>
    )
}

export const CustomRightArrowButton = (props) => {
    return (
        <>
            {props?.images?.length > props?.currentImageIndex + 1  && <Button boxShadow="var(--shadow)" zIndex='15' right= '12%' position='absolute' onClicks={props.onClicks}  icon={<AiOutlineRight  color="var(--color-primary)"  fontSize="var(--font-small)"/>} border="0" outline="0" background="#fff" borderRadius="20px" padding="6px 10px" />}
        </>
    )
}


const PropertyImage = ({status}) => {
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    // const {PropertyDetails: {pictures}} = useSelector(state => state.propertyDetails)

    const images = [
        {
            src: Pic1,
            loading: 'lazy',
            alt: '',
        },
        {
            src: Pic2,
            loading: 'lazy',
            alt: '',
        },
        {
            src: Pic3,
            loading: 'lazy',
            alt: '',
        },
        {
            src: Pic4 ,
            loading: 'lazy',
            alt: '',
        },
        {
            src: Pic5,
            loading: 'lazy',
            alt: '',
        },
        {
            src: Pic12,
            loading: 'lazy',
            alt: ''
        },
        {
            src: Pic13,
            loading: 'lazy',
            alt: ''
        }

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
                renderPrevButton={() => (<CustomLeftArrowButton onClicks={gotoPrevious}  currentImageIndex={currentImageIndex}/>)}
                renderNextButton={() => (<CustomRightArrowButton  onClicks={gotoNext} currentImageIndex={currentImageIndex} images={images} />)}
            />
            <ImageContainer>
                <ImageWrapper>
                    <LargeImage>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : (
                            <div onClick={() => setIsOpen(true)}>
                                <img data-src={Pic7} alt=""  width='100%' height='100%' className="lazyload"/>
                                <span style={{cursor: 'pointer'}}>
                                    <AiOutlineCamera /> Click to see all pictures
                                </span>
                            </div>
                        )}
                        
                    </LargeImage>
                    <SmallImage style={{gridColumn: '4/6'}}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                            <img data-src={Pic8} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage style={{gridColumn: '6/8'}}>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                            <img data-src={Pic9} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                            <img data-src={Pic10} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                            <img data-src={Pic11} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                            <img data-src={Pic14} alt=""  width='100%' height='100%' className="lazyload"/>
                        )}
                    </SmallImage>
                    <SmallImage>
                        {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={Pic15} alt=""  width='100%' height='100%' className="lazyload"/>
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
