import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components"

const Ul = styled(motion.ul) `
    padding: 25px;
    position: absolute;
    top: ${({top}) => top};
    width: 100%;
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};
`

const variants = {
    open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = ({toggleOpen, isOpen, itemIds, top}) => (
    <Ul variants={variants} isOpen={isOpen} top={top}>
        {itemIds?.map(item => (
            <MenuItem i={item?.id} key={item?.id} data={item}  toggleOpen={toggleOpen} isOpen={isOpen}/>
        ))}
    </Ul>
);


