import React from 'react';
import styled from 'styled-components';
import { PaddingStyle, MediaScroller, MediaElement, SnapsInline } from '../../styles/globalStyles';
import Scrollable from "../../components/Scrollable/Scrollable";
import ImageOne from "../../image/small/picOne.jpeg"
import ImageTwo from "../../image/small/picTwo.jpeg"
import ImageThree from "../../image/small/picThree.jpeg"
import ImageFour from "../../image/small/picFour.jpeg"
import ImageFive from "../../image/small/picFive.jpeg"
import ImageSix from "../../image/small/picSix.jpeg"
import BK from "../../image/bk.jpeg"


const Data = [
    {
        id: 1,
        image: ImageOne
    },
    {
        id: 2,
        image: ImageTwo
    },
    {
        id: 3,
        image: ImageThree
    },
    {
        id: 4,
        image: ImageFour
    },
    {
        id: 5,
        image: ImageFive
    },
    {
        id: 6,
        image: ImageSix
    }
]

const GalleryContainer = styled.section `
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
`

const Main = styled.main `
    ${PaddingStyle}
    margin: max(5vw, 2rem) 0;
`

const Scroller = styled.div `
    scrollbar-width: thin;
    scrollbar-color: #6969dd #e0e0e0;
    ${MediaScroller}
    ${SnapsInline}

    ${SnapsInline} > * {
        scroll-snap-align: start;
    }

`

const Element =styled.div `
    ${MediaElement}
    padding: 0 !important;

    img {
        inline-size: fit-content;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    @media screen and (min-width: 670px) {
        img {
            aspect-ratio: 16 / 12;
        }
    }
`

const H2 = styled.h2 `
    font-size: var( --font-small);
    font-weight: 600;
    margin-bottom: 1.2rem;
`
const Container = styled.div `
    margin: max(5vw, 2rem) 0;

    .galleryGridTag {
        position: absolute;
        top: 25px;
        left: 0;
        background: linear-gradient(180deg, rgba(33, 147, 176, 0.67) 0%, rgba(33, 147, 176, 0.6) 100%);
        padding: max(2vw, 1rem) max(4vw, 1.5rem);
        color: #fff;

        p {
            margin: 0;
            font-size: var(--font-small);
            font-weight: 600;
        }

        span {
            font-size: var(--font-xtra-small-screen);
        }
    }

    .galleryGrid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 1rem;

        .galleryGridFirstChild {
            grid-column: 1/5;
            width: 100%;
            position: relative;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }

    
        }

        .galleryGridSecondChild {
            grid-column: 5/9;
            width: 100%;
            position: relative;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

`


const Gallery = () => {
    return (
        <GalleryContainer>
            <Main paddingleft="true" paddingRight="true">
                <Scrollable>
                    <div>
                        <H2>Take a look around some of our properties</H2>
                    </div>
                    <Scroller className=" with-overscroll  snaps--individual">
                        {Data?.map((item) => (
                            <Element key={item.id}>
                                <img src={item?.image} alt="" />
                            </Element>
                        ))}
                    </Scroller> 
                </Scrollable>
                <Container>
                    <div className="galleryGrid">
                        <div className="galleryGridFirstChild">
                            <div>
                                <img src={BK} alt="apartmentA4" />
                            </div>
                            <div className='galleryGridTag'>
                                <p>Apartment</p>
                                <span>43 pictures</span>
                            </div>
                        </div>
                        <div className="galleryGridSecondChild">
                            <div>
                                <img src={BK} alt="apartmentA4" />
                            </div>
                            <div className='galleryGridTag'>
                                <p>Video</p>
                                <span>3 videos</span>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </Main>
        </GalleryContainer>
    )
};

export default Gallery;
