import { useSelector } from "react-redux"
import styled, { css } from "styled-components/macro"
// import { AiOutlineHeart } from "react-icons/ai"
// import { FiShare } from "react-icons/fi"
// import { FlexStyle } from "../../../styles/globalStyles"
import { VideoPlayer } from "../../../Svg/svg"

import LargeOne from "../../../image/largeOne.jpg"
import SmallOne from "../../../image/smallestTwo.jpg"
import SmallTwo from "../../../image/smallestThree.jpg"
import SmallThree from "../../../image/smallestThree.jpg"
import SmallFour from "../../../image/smallestFour.jpg"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"


const ImageWrapper = styled.div ` 
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    grid-gap: 1rem;
    /* height: 400px; */

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
            background: #C4C4C4;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
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

const PropertyImage = ({status}) => {
    const {PropertyDetails: {pictures}} = useSelector(state => state.propertyDetails)
    

    return (
        <ImageContainer>
            <ImageWrapper>
                <LargeImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : (
                        <div>
                            <img data-src={LargeOne} alt=""  width='100%' height='100%' className="lazyload"/>
                            <span>
                                {VideoPlayer}
                            </span>
                        </div>
                    )}
                    
                </LargeImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={SmallOne} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={SmallTwo} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={SmallThree} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={SmallFour} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                        <img data-src={SmallTwo} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
                <SmallImage>
                    {status === 'loading' ? <SkeletonLoader width='100%' height='100%'/> : (
                    <img data-src={SmallOne} alt=""  width='100%' height='100%' className="lazyload"/>
                    )}
                </SmallImage>
            </ImageWrapper>
        </ImageContainer>
    )
}

export default PropertyImage
