import React from 'react';
import styled from 'styled-components';
import { PaddingStyle, FlexStyle, CardGallery } from '../../styles/globalStyles';
import Car from "../../image/car.webp"
import Video from "../../image/video.webp"
import Apartment from "../../image/apartment.webp"
import Exp from "../../image/exp.webp"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';


const Background = [
    {
        id: 1,
        image: Apartment,
        title: 'Apartments'
    },
    {
        id: 2,
        image: Video,
        title: 'Videos'
    },
    {
        id: 3,
        image: Car,
        title: 'Cars'
    },
    {
        id: 4,
        image: Exp,
        title: 'Experience'
    },
    
]

const GalleryContainer = styled.section `
    background-color: var(--color-secondary);
    width: 100%;
    height: 100%;
`

const Main = styled.main `
    ${PaddingStyle}
    ${FlexStyle}
    justify-content: center;
`

const Scroller = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media screen and (min-width: 669px) { 
        grid-template-columns: repeat(2, 1fr);
    }

`


const Card = styled.div `
    ${CardGallery}

    img {
        inline-size: fit-content;
        aspect-ratio: 15 / 13;
        object-fit: cover;
        width: 100%;
        border-radius: 12.6733px  12.6733px 0 0;
    }

    p {
        margin: 0;
        padding: .6rem;
        font-size: var(--font-small);
        ${FlexStyle}
    }

    @media screen and (min-width: 670px) {
        height: 280px;
        width:300px;

        img {
            aspect-ratio: 16 / 12;
        }
        
        p {
            padding: 0 .6rem; 
        }
    }

`

const H2 = styled.h2 `
    font-size: var( --font-small);
    font-weight: 600;
    margin-bottom: 0;
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

const Header = styled.div `
    margin: 2rem 0;
    ${FlexStyle}
    justify-content: center;
`

const Gallery = () => {
    const navigate = useNavigate();

    const handleLink = (id, name) => {
        console.log(id)
        if(id === "Apartments") {
            navigate(`/gallery/${id?.toLowerCase()}`)
        } else {
            navigate(`/gallery/${id?.toLowerCase()}`)
        }
    }

    
    return (
        <GalleryContainer>
            <Main paddingleft="true" paddingRight="true">
                {/* //! NOT NEEDED */}
                
                
                <Container>
                    <Header>
                        <H2>Take a look around some of our properties</H2>
                    </Header>
                    <Scroller className="">
                        {Background.map((item) => (
                            <Card 
                                key={item.id}
                                as={motion.div}
                                initial={{scale: 1}}
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-secondary)'}}
                                transition={{duration: 0.2,
                                    type: { type: 'spring'}
                                }}
                                onClick={() => handleLink(item?.title, "A4")}
                            >
                                <img src={item?.image} alt="" />
                                <p>{item?.title}</p>
                            </Card>
                        ))}
                    </Scroller>
                </Container>
            </Main>
        </GalleryContainer>
    )
};

export default Gallery;
