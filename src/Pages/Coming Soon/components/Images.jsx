import React from 'react'
import styled from "styled-components"


import Button from '../../../components/Button/Button'
import { SkeletonLoader } from '../../../components/Loader/Skeleton'


const ImageGrid = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .gridOne,
    .gridThree,
    .gridFour  {
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
        /* grid-template-rows: repeat(4, 1fr); */

        .gridFour,
        .gridOne, 
        .gridThree {
            display: block;
        }
        
        .gridOne{
            grid-row: 1/2;
        }
        .gridTwo {
            grid-row: 1/2;
            grid-column: 2/3;
        }

        .gridThree {
            grid-row: 3/2;
            grid-column: 2/3;
        }

        
    }

`


const Images = ({loading, data, showPictures}) => {
    
    return (
        <ImageGrid>
            <div className="gridOne">
                {loading === "loading" ? <SkeletonLoader width="100%" height={"100%"} /> : loading === "succeeded" &&
                    <img src={data?.pictures[0]?.picture} alt="" width="100%" height="100%" />
                }
            </div>
            <div className="gridTwo">
                {loading === "loading" ? <SkeletonLoader width="100%" height={"100%"} /> : loading === "succeeded" &&
                    <img src={data?.pictures[1]?.picture} alt="apartment_picture" width="100%" height="100%" />
                }
            </div>
            <div className="gridThree">
                {loading === "loading" ? <SkeletonLoader width="100%" height={"100%"} /> : loading === "succeeded" &&
                    <img src={data?.pictures[2]?.picture} alt="apartment_picture" width="100%" height="100%" />
                }
            </div>
            <div className="gridFour">
                {loading === "loading" ? <SkeletonLoader width="100%" height={"100%"} /> : loading === "succeeded" &&
                    <img src={data?.pictures[3]?.picture} alt="apartment_picture" width="100%" height="100%" />
                }
            </div>
            {loading === "loading" ? "" : loading === "succeeded" &&
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
                        onClicks={showPictures}
                    />
                </div>
            }
        </ImageGrid>
    )
}

export default Images