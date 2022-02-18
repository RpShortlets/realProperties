import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components"

const Ul = styled(motion.ul) `
    padding: 25px;
    position: absolute;
    top: 50px;
    width: 100%;
`

const variants = {
    open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <Ul variants={variants}>
        {itemIds.map(item => (
            <MenuItem i={item.id} key={item.id} data={item} />
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
    }
];
