import styled, {css} from "styled-components/macro"
import { AmenitiesOne, AmenitiesTwo } from "../data/index"
import Button from "../../../components/Button/Button"
import  { useState} from "react"
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

    > div:nth-child(2) {
        display: block;
        margin-top: max(2vw, 1rem);
    }

    > div:first-child > div:last-child {
        display: none; 
    }

    @media screen and (min-width: 769px) {
        
        ${BorderStyle}

        > div:first-child {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        > div:first-child > div:last-child {
            display: block; 
        }

        > div:nth-child(2) {
            display: none;
        }
    }

`
const PropertyAmenities = ({status}) => {
    const [show, setShow] = useState(false)
    return (
        <Amenities>
            <h2>Amenities</h2>
            <AmenitiesHeader>
                <motion.div initial={{height: '0%'}} animate={{height: '100%'}} transition={{duration: 1}}>
                    <AmenitiesOne />
                    <AmenitiesTwo />
                    {show &&  ( <AmenitiesOne />)}
                </motion.div>
                <div>
                    <Button  onClicks={() => setShow((prev) => !prev)} color='var(--color-dark)' padding='12px' fontWeight='600' fontSize="var(--font-xtraLarge-small)" background='transparent' title="Show all ameninities" border="1.78224px solid #000000" borderRadius= '8.91119px' />
                </div>
            </AmenitiesHeader>
        </Amenities>
    )
}

export default PropertyAmenities
