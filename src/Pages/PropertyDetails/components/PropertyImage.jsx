import { useState, useEffect } from "react"
import styled  from "styled-components/macro"
import { useSelector } from "react-redux"
import {AiOutlineCamera} from "react-icons/ai"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"
import Backdrop from "../../../components/Backdrop"

import Pic14 from "../../../image/small/picSix.jpeg"
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery";
import useProgressiveImage from "../../../hooks/useProgressiveImage/useProgressiveImage";
import ImageModal from "../../../components/Image Modal/ImageModal";




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

    let newImages = status === "succeeded" && pictures?.slice(7)
    

    let images = []

    for (var i = 0; i < newImages?.length; i++) {
        images = newImages
    }




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
            <ImageModal 
                isOpen={isOpen} 
                gotoPrevious={gotoPrevious} 
                gotoNext={gotoNext} 
                images={images} 
                currentImageIndex={currentImageIndex} 
                setIsOpen={setIsOpen} 
                Query={Query} 
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
            </ImageContainer>
        </>
    )
}

export default PropertyImage
