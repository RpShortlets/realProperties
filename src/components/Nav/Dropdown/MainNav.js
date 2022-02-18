import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimension";
import { MenuToggle } from "./ToggleBar";
import { Navigation } from "./Navigation";
import styled from "styled-components";

const NavStyle = styled(motion.nav)`
    height: ${({height}) => height ? '70vh' : ''};
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 230px;

`

const Back = styled(motion.div) `
  
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: ${({background}) => background ? 'var(--color-white)' : 'transparent' };
    box-shadow: var(--shadow);
    border-radius: 0 10px;


`


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + -200}px )`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    // clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 600,
      damping: 40
    }
  }
};

export const MainNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log(isOpen)

  return (
        <NavStyle
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            height={isOpen}
        >
        <Back variants={sidebar} background={isOpen}/>
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </NavStyle>
    );
};
