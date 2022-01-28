import React from 'react';
import styled from "styled-components"
import { motion } from 'framer-motion';

const MiniSearches =  styled.div `
    background: var(--color-secondary);
    padding: 0.5rem;
    border-radius: 7px;

`

const MiniSearch = () => {
    return (
        <MiniSearches
            as={motion.div}
            initial={{opacity: 0,  scale: .7}}
            animate={{opacity: 1,  scale: 1.1}}
            exist={{y: 5, scale: 7}}
            transition={{duration: .1,
                type: {type: 'tween'}
            }}
        
        >
            Search
        </MiniSearches>
    )
};

export default MiniSearch;
