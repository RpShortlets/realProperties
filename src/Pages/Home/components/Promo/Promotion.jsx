import styled from "styled-components"
import Modal from "../../../../components/Modal/Modal"
import Banner from "../../../../image/Promos/MotherBig.webp"
import useMediaQuery from "../../../../hooks/useMediaQuery/useMediaQuery"


const Container = styled.div`
    margin-bottom: 2rem;
    h1 {
        color: var( --color-promotion);
        font-size: var(--font-medium);
        margin: max(3vw, 1.2rem) 0;
        text-align: center;
        font-weight: 600;
    }

    p {
        text-align: center;
        font-size: var(--font-small-screen);
        margin: 0;
    }

    .steps {
        margin: 2rem 0 0 0;

        h3 {
            font-size: var(--font-small);
            text-decoration: underline;
            margin: 2rem 0;
            text-align: center;
            font-weight: 600;
        }

        ul {
            padding: 0;
            margin: 0;
        }

        li {
            margin: max(2vw, 1.2rem) 0;
            font-size: var(--font-small-screen);
            text-align: justify;
            word-spacing: 0px;
            white-space: break-spaces;
            word-break: break-all;
            line-height: 2;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Promotion = ({promoBig, setPromoBig, children}) => {
    const Query = useMediaQuery("(max-width: 600px)")

    return (
        <Modal transition={{duration: 0.5, type:{type:'spring'}}} initial={{scale: 0.5, opacity: 0}} exit={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}}  borderRadius="0" overFlow="scroll" height="75%" padding="max(4vw, 2rem) max(7vw, 2rem)" show={promoBig} setShow={setPromoBig} width={Query? '90%' : "80%"} theme="rgba(0,0,0,0.5)" left={Query ? "5%" : "10%"} top={Query ? "20%" : "15%"} btn >
            <Container>
                <Image src={Banner} alt="MothersDayPromo" />
                <div>
                    <h1>Mother’s Day Special Promo Giveaway</h1>
                </div>
                <div className="steps">
                    <h3>HOW TO PARTICIPATE IN 3 EASY STEPS</h3>
                    <ul>
                        <li>Participant must follow us on Instagram @rpshortlets.</li>
                        <li>Write a short story in the comment section telling us why your mom is a super mom.</li>
                        <li>Participant must tag their friends to follow @rpshortlets @ceriesnoireng @perriscafe.ng and like their short story in the comment section.</li>
                    </ul>
                    <p style={{textAlign: 'start'}}>Entries closes on;</p>
                    <p  style={{textAlign: 'start'}}>Monday, 28<sup>th</sup> March.</p>
                </div>
            </Container>

        </Modal>
    )
}

export default Promotion;