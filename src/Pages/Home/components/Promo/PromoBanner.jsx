import styled from "styled-components"
import Modal from "../../../../components/Modal/Modal"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"
import { CancelIcon } from "../../../../Svg/svg"
import { FlexStyle} from "../../../../styles/globalStyles"
import Button from "../../../../components/Button/Button"
import Carousels from "../../../../components/Carousel/Carousel"
import { SkeletonLoader } from "../../../../components/Loader/Skeleton"



// const Image = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     cursor: pointer;
// `
const Cancel = styled.span `
    z-index: 2000;
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
    grid-template-columns: repeat(1, 1fr);
    gap: 0;

    @media screen and (min-width: 601px) {
        grid-template-columns: repeat(2, 1fr);
    }


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

        h2 {
            color: var(--color-primary);
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


const PromoBanner = ({showPromo, setShowPromo, OnClicks, index, handleSelect, data, loading, setShowText, setApartmentId, showText, apartmentId, fetch}) => {
    const Query = useMediaQuery("(max-width: 600px)")

    const setId = (id) => {
        setApartmentId(id)
        setShowText(true)
    }

    const removeId = () => {
        setApartmentId(null)
        setShowText(false)
    }

    console.log(loading)
    return (
        <Modal data-testtId="promoModal" borderRadius="3px" padding="0" transition={{duration: 0.3, type:{type:'spring'}}} initial={{opacity: 0, y: -0}} exit={{opacity: 0, y: -20}} animate={{opacity: 1, y: -50}} show={showPromo} setShow={setShowPromo}  theme="rgba(0,0,0,0.92)" left={Query ? "5%" : "20%"} width={Query ? "90%" : "62%"} top={Query ? "25%" : "40%"} btn>
            <Cancel onClick={() => setShowPromo(false)}>{ CancelIcon}</Cancel>
            <Container>
                {loading === "loading" && (
                    <div style={{width: '100%', height: "200px"}}>
                        <SkeletonLoader width="100%" height={"100%"} />
                    </div>
                ) }
                <Carousels style={{cursor: 'pointer'}} loading={loading} fetch={fetch} controls={true} onMouseEnter={setId} onMouseLeave={removeId} data={data?.result} index={index} handleSelect={handleSelect} />
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
                            <p>{data?.result[apartmentId]?.description}</p>
                            <div style={{display: "block"}}>
                                <h2 style={{textDecoration: 'line-through'}}>&#8358;{data?.result[apartmentId]?.price?.toLocaleString()}</h2>
                                <h2>&#8358;{data?.result[apartmentId]?.discounted_price?.toLocaleString()}</h2>
                            </div>
                        </div> 
                    }
        
                </div>
            </Container>
        </Modal>
    )
}

export default PromoBanner;