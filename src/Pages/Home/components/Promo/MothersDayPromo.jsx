import Banner from "../../../../image/Promos/MotherDayPromo.webp"
import styled from "styled-components"
import Modal from "../../../../components/Modal/Modal"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"
import { CancelIcon } from "../../../../Svg/svg"
import { FlexStyle } from "../../../../styles/globalStyles"


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`
const Cancel = styled.span `
    position: absolute;
    top: 10px;
    font-size: 11px;
    right: 19px;
    cursor: pointer;
    border: 1px solid #333;
    border-radius: 23px;
    padding: 2px;
    height: 20px;
    width: 20px;
    ${FlexStyle}
    justify-content: center;
`


const MothersDayPromo = ({showPromo, setShowPromo, Onclicks}) => {
    const Query = useMediaQuery("(max-width: 600px)")

    return (
        <Modal transition={{duration: 0.5, type:{type:'spring'}}} initial={{opacity: 0, y: -20}} exit={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}  padding="0" show={showPromo} setShow={setShowPromo} width={Query ? "90%" : "70%"} theme="rgba(0,0,0,0.5)" left={Query ? "5%" : "15%"} top="50%" btn>
            <Cancel onClick={() => setShowPromo(false)}>{ CancelIcon}</Cancel>
            <Image src={Banner} alt="MothersDayPromo" onClick={Onclicks} />
        </Modal>
    )
}

export default MothersDayPromo;