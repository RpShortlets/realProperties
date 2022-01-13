import { useSelector } from "react-redux"
import styled, { css } from "styled-components/macro"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"
import Button from "../../../components/Button/Button"
import { FlexStyle } from "../../../styles/globalStyles"

import LargeOne from "../../../image/largeOne.jpg"
import LargeTwo from "../../../image/smallOne.jpg"
import LargeThree from "../../../image/smallOne.jpg"


const ImageContainer = styled.div `
    margin: max(3vw, 2rem) 0;
    img {
        object-fit: cover;
        border-radius: 10px !important;
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
const SvgStyle = css`
    font-size: 14px;
`

const SavedIcon = styled(AiOutlineHeart)`
    ${SvgStyle}
`

const LikeIcon = styled(FiShare) `
    ${SvgStyle}
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

const PropertyImage = () => {
    const {PropertyDetails: {pictures}} = useSelector(state => state.propertyDetails)
    
    console.log(pictures)

    
    return (
        <ImageContainer>
            <div>
                <div>
                    <img src={LargeOne} alt=""  width='100%' height='100%' />
                    <MobileIcons>
                        <IconCard><SavedIcon/></IconCard>
                        <IconCard><LikeIcon /></IconCard>
                    </MobileIcons>
                    <SeePhotos>
                        <Button fontWeight='500' display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="See all 12 photos" borderRadius="5px" padding="5px" background="#fff" border="1px solid rgba(28, 123, 147, 1)" color="var(--color-dark-gray)" />
                    </SeePhotos>
                </div>
                <div>
                    <img src={LargeTwo} alt="" width='100%' height='100%'/>
                </div>
                <div>
                    <img src={LargeThree} alt="" width='100%' height='100%' />
                    <div style={{position: 'absolute', right: '15px', bottom: '20px'}}>
                        <Button fontWeight='500' display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="See all 12 photos" borderRadius="10px" padding="8px" background="#fff" border="1px solid rgba(28, 123, 147, 1)" color="var(--color-dark-gray)" />
                    </div>
                </div>
                {/* <div><img src={pictures[3]?.picture && pictures[3]?.picture} alt="" width='100%' height='100%' /></div>
                <div><img src={pictures[4]?.picture && pictures[4]?.picture} alt="" width='100%' height='100%' /></div>
                <div><img src={pictures[5]?.picture && pictures[5]?.picture} alt="" width='100%' height='100%' /></div>
                <div><img src={pictures[6]?.picture && pictures[6]?.picture} alt="" width='100%' height='100%' /></div>
                <div><img src={pictures[7]?.picture && pictures[7]?.picture} alt="" width='100%' height='100%' /></div>  */}
            </div> 
        </ImageContainer>
    )
}

export default PropertyImage
