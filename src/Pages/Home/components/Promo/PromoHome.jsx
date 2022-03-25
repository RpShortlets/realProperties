import styled from "styled-components"
import { PaddingStyle } from "../../../../styles/globalStyles"
import Banner from "../../../../image/Promos/MotherDayPromo.webp"


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`

const PromotionDiv = styled.div`
    ${PaddingStyle}
    margin-bottom: max(7vw, 2rem);
`

const PromoHome = ({handleShowBigPromo}) => {
    return (
        <PromotionDiv paddingleft='true' paddingRight='true'>
            <Image src={Banner} alt="MothersDayPromo" onClick={handleShowBigPromo} />
        </PromotionDiv>
    )
}

export default PromoHome;