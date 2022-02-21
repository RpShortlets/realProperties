import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components"

const Ul = styled(motion.ul) `
    padding: 25px;
    position: absolute;
    top: 50px;
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

export const Navigation = ({toggleOpen, isOpen}) => (
    <Ul variants={variants} isOpen={isOpen}>
        {itemIds.map(item => (
            <MenuItem i={item.id} key={item.id} data={item}  toggleOpen={toggleOpen} isOpen={isOpen}/>
        ))}
    </Ul>
);

const itemIds = [ 
    {
        id: 0,
        title: 'About Us',
        path: '/about'
    },
    {
        id: 1,
        title: 'Gallery',
        path: '/gallery'
    },
    {
        id: 2,
        title: 'Terms and Condition',
        path: '/terms'
    },
    {
        id: 3,
        title: 'Customer Support',
        path: '/customer-support'
    }
];
