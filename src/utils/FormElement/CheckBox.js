import { motion } from "framer-motion";
import React from "react"
import './checkbox.css'
import styled from "styled-components"


const Box =styled.div `
    display: ${({display}) => display ? 'block' : 'flex'}; 
    justify-content:  ${({justify}) => justify ? justify : 'space-between'}; 
    align-items: center; 
    margin-bottom: ${({margin}) => margin ? '0' : ' max(1.2vw, .6rem)'}; 
`

const Label = styled.label `
    font-size: var(--font-small-screen);
    order: ${({order}) => order };
     

    @media (min-width: 768px) { 
        order: ${({order}) => order };
        font-size: var(--font-xtra-small-screen);
        margin: ${({margin}) => margin};
    }

`



const InputCheck = styled.input `
    border: 2px solid var(--color-primary);
    width: max(1.5vw, 1rem);
    height: max(1.5vw, 1rem);
    color: #fff;
    background: #fff;

`


const Checkbox = ({ checkboxes, handleChange, name, label, display, margin, justify, order, marginLabel}) => {
    
    return (
        <>
            <Box 
                margin={margin}
                display={display}
                justify={justify}
            >
                <Label htmlFor={name} order={order} margin={marginLabel} >{label}</Label>
                <InputCheck
                    as={motion.input}  
                    id={name}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} 
                    type="checkbox" 
                    name={name} 
                    value={name}  
                    checked={checkboxes === name} 
                    onChange={handleChange}
                />
            </Box> 
        </>
    
    )
}

export default Checkbox;