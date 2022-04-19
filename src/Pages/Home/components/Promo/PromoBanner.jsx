import { useState } from "react"
import Banner from "../../../../image/small/picOne.jpeg"
import Banner2 from "../../../../image/small/picTwo.jpeg"
import styled from "styled-components"
import Modal from "../../../../components/Modal/Modal"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"
import { CancelIcon } from "../../../../Svg/svg"
import { FlexStyle} from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import Carousels from "../../../../components/Carousel/Carousel"


const Data = [
    {
        id: 1,
        picture: Banner
    },
    {
        id: 2,
        picture: Banner2
    }
]

// const Image = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     cursor: pointer;
// `
const Cancel = styled.span `
    background: #333;
    color: #fff;
    position: absolute;
    top: -10px;
    font-size: 11px;
    right: -5px;
    cursor: pointer;
    border: 1px solid #333;
    border-radius: 23px;
    padding: 2px;
    height: 20px;
    width: 20px;
    ${FlexStyle}
    justify-content: center;
`

const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;


    div {
        height: 100%;
    }

    img {
        height: 100% !important;
        object-fit: cover;
    }

    .comingImage {
        padding: 0 0px;
        div {
            width: 100%;
            height: 100%;
        }
        
    }

    .comingContent {
        box-shadow: 0px 0px 6.92284px rgba(0, 0, 0, 0.25);
        padding: max(4vw, 1.2rem) max(3vw, 1rem);
        h1 {
            color: var(--color-primary);
            font-size: var(--font-Xtrabig);
            font-weight: 600;
            margin: 0;
        }

        p {
            font-size: var(--font-xtra-small-screen);
            line-height: 1.5;
            margin: 1rem 0;
        }
    }
    
`


const PromoBanner = ({showPromo, setShowPromo, OnClicks, index, handleSelect}) => {
    const Query = useMediaQuery("(max-width: 600px)")
    

    return (
        <Modal data-testtId="promoModal" borderRadius="3px" padding="0" transition={{duration: 0.5, type:{type:'spring'}}} initial={{opacity: 0, y: -0}} exit={{opacity: 0, y: -20}} animate={{opacity: 1, y: -50}} show={showPromo} setShow={setShowPromo} width={Query ? "90%" : "50%"} theme="rgba(0,0,0,0.92)" left={Query ? "5%" : "25%"} top="40%" btn>
            <Cancel onClick={() => setShowPromo(false)}>{ CancelIcon}</Cancel>
            <Container>
                {/* <div className="comingImage"> */}
                <Carousels data={Data} index={index} handleSelect={handleSelect} controls={true} />
                {/* </div> */}
                <div className="comingContent">
                    <div>
                        <p style={{marginTop: "0", fontSize: "var(--font-xtra-small)"}}>Coming Soon!</p>
                        <h1>20% OFF</h1>
                        <p>Early birds make your bookings for some of our brand new apartments</p>
                        <Button onClicks={OnClicks} padding={".6rem .9rem"} title={"See more"} color="var(--color-white)" border={"0"} background="var(--linear-primary)" />
                    </div>
                </div>
            </Container>
        </Modal>
    )
}

export default PromoBanner;