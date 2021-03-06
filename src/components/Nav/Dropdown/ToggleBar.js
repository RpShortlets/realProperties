import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Btn = styled.button`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    color: var(--color-primary) !important;

    @media screen and (min-width: 769px) {
        right: 70px;
    }
`

const Path = props => (
    <motion.path
        fill="white"
        strokeWidth="3"
        stroke="var(--color-primary)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }) => (
    <Btn onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23" style={{color: 'whitesmoke'}}>
        <Path
            variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path
            variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
        </svg>
    </Btn>
);
