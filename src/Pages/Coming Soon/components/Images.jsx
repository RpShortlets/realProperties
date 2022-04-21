import React from 'react'
import styled from "styled-components"

import PhotoOne from "../../../image/photos.png"
import PhotoTwo from "../../../image/photosTwo.png"
import VideoComing from "../../../image/comingSoonVideo.png"
import Button from '../../../components/Button/Button'


const ImageGrid = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .gridOne,
    .gridThree  {
        display: none;
    }

    .gridTwo {
        grid-row: 1/2;
        grid-column: 1/3;
    }

    .morePhotos {
        position: absolute;
        bottom: 0;
        right: 0;
    }


    @media screen and (max-width: 991px) {
        order: 1;
    }

    @media screen and (min-width: 601px) {
        grid-template-rows: repeat(4, 1fr);

        .gridOne{
            display: block;
            grid-row: 1/5;
        }
        .gridTwo {
            grid-row: 1/3;
            grid-column: 2/3;
        }

        .gridThree {
            display: block;
            grid-row: 3/5;
            grid-column: 2/3;
        }
    }

`


const Images = () => {
    return (
        <ImageGrid>
            <div className="gridOne">
                <img src={VideoComing} alt="" width="100%" height="100%" />
            </div>
            <div className="gridTwo">
                <img src={PhotoOne} alt="apartment_picture" width="100%" height="100%" />
            </div>
            <div className="gridThree">
                <img src={PhotoTwo} alt="apartment_picture" width="100%" height="100%" />
            </div>
            <div className="morePhotos">
                <Button 
                    title="More photos" 
                    border={"0"} 
                    borderRadius="2px"  
                    fontSize="var(--font-xtra-small-screen)"  
                    background="var(--linear-primary)" 
                    color="var(--color-white)" 
                    padding={".4rem"}
                    whileHover
                />
            </div>
        </ImageGrid>
    )
}

export default Images