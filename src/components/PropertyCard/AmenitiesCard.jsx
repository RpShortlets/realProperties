import styled, {css} from "styled-components/macro"
import { AmenitiesOne, AmenitiesTwo } from "./AmenitiesFetch"
import Button from "../../components/Button/Button"
import {motion, AnimatePresence} from "framer-motion"


const BorderStyle = css`
    border-top:  1.80872px solid #000000;
    border-bottom:  1.80872px solid #000000;
    padding: max(1vw, 1rem) 0;
    margin-top: max(2vw, 1rem);

    @media screen and (min-width: 769px) {
        border: 1.80872px solid #000000;
        box-sizing: border-box;
        border-radius: 9.04362px;
        padding: max(1vw, 1rem);
    }
`

const H2 = css`
    font-size: var(--font-small-screen);
    font-weight: 600;
    margin: 0;
`

const Amenities = styled.div `
    grid-column: 1/4;

    h2 {
        ${H2}
    }
`

const AmenitiesHeader = styled.div `

    .showButton {
        display: block;
        margin-top: 1.5rem;
    }

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        ${BorderStyle}

        .showButton {
            display: none;
        }

    }

`

const AmenitiesCard = ({show, setShow, Query, PropertyDetails}) => {
    return (
        <Amenities>
            <h2>Amenities</h2>
            <AmenitiesHeader>        
                <AmenitiesOne PropertyDetails={PropertyDetails} />
                {Query ? (<AmenitiesTwo  PropertyDetails={PropertyDetails} />) : (
                    <AnimatePresence>
                        {show && (
                        <motion.div initial={{height: '0', opacity: 0}} animate={{height: '100%', opacity: 1}} exit={{height: '0', opacity: 0}} transition={{duration: .5, type: { type: 'spring'}}}>
                            <AmenitiesTwo PropertyDetails={PropertyDetails} />
                        </motion.div>
                        )}
                    </AnimatePresence>     
                )}
                
                <div className="showButton">
                    <Button  onClicks={() => setShow((prev) => !prev)} color='var(--color-dark)' padding='12px' fontWeight='600' fontSize="var(--font-xtraLarge-small)" background='transparent' title={show  ? "Show less ameninities" : "Show all ameninities"} border="1.78224px solid #000000" borderRadius= '8.91119px' />
                </div>
            </AmenitiesHeader>
        </Amenities>
    )
}

export default AmenitiesCard