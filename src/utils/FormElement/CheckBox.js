import { motion } from "framer-motion";
import React from "react"
import './checkbox.css'
import styled from "styled-components"

const Label = styled.label `
    font-size: var(--font-small-screen);

    @media (min-width: 768px) { 
        font-size: var(--font-xtra-small-screen);
    }

`

const InputCheck = styled.input `
    border: 2px solid var(--color-primary);
    width: max(1.5vw, 1rem);
    height: max(1.5vw, 1rem);
    color: #fff;
    background: #fff;

`


const Checkbox = ({ checkboxes, handleChange, name, label}) => {

    return (
        <>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', marginBottom: 'max(1.2vw, .6rem)'}}>
                <Label htmlFor={name} >{label}</Label>
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
            </div> 
        </>
    
    )
}

export default Checkbox;