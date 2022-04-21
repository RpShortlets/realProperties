import styled from "styled-components"
import Modal from "../../../../components/Modal/Modal"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"
import { CancelIcon } from "../../../../Svg/svg"
import { FlexStyle} from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import Carousels from "../../../../components/Carousel/Carousel"



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


const PromoBanner = ({showPromo, setShowPromo, OnClicks, index, handleSelect, data, setShowText, setApartmentId, showText, apartmentId, fetch}) => {
    const Query = useMediaQuery("(max-width: 600px)")

    const setId = (id) => {
        setApartmentId(id)
        setShowText(true)
    }

    const removeId = () => {
        setApartmentId(null)
        setShowText(false)
    }

    
    return (
        <Modal data-testtId="promoModal" borderRadius="3px" padding="0" transition={{duration: 0.3, type:{type:'spring'}}} initial={ !showText ? {width: "50%", opacity: 0, y: -0} : {opacity: 0, y: -0}} exit={{opacity: 0, y: -20}} animate={showText ? {width: "62%", opacity: 1, y: -50} : {opacity: 1, y: -50}} show={showPromo} setShow={setShowPromo}  theme="rgba(0,0,0,0.92)" left={Query ? "5%" : !Query && showText ? "20%" : "25%"} top="40%" btn>
            <Cancel onClick={() => setShowPromo(false)}>{ CancelIcon}</Cancel>
            <Container>
                <Carousels fetch={fetch} controls={false} onMouseEnter={setId} onMouseLeave={removeId} data={data?.result} index={index} handleSelect={handleSelect} />
                <div className="comingContent">
                    {!showText ? (
                        <div>
                            <p style={{marginTop: "0", fontSize: "var(--font-xtra-small)"}}>Coming Soon!</p>
                            <h1>20% OFF</h1>
                            <p>Early birds make your bookings for some of our brand new apartments</p>
                            <Button onClicks={OnClicks} padding={".6rem .9rem"} title={"See more"} color="var(--color-white)" border={"0"} background="var(--linear-primary)" />
                        </div>
                    ) : 
                        <div>
                            <p style={{marginTop: "0", fontSize: "var(--font-xtra-small)"}}>Coming Soon!</p>
                            <h1 style={{fontSize: "2.2rem"}}>{data?.result[apartmentId]?.apartment_name}</h1>
                            <p>Early birds make your bookings for some of our brand new apartments</p>
                            <Button onClicks={OnClicks} padding={".6rem .9rem"} title={"See more"} color="var(--color-white)" border={"0"} background="var(--linear-primary)" />
                        </div> 
                    }
        
                </div>
            </Container>
        </Modal>
    )
}

export default PromoBanner;