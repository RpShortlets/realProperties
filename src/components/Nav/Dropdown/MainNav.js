import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimension";
import { MenuToggle } from "./ToggleBar";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery";

const NavStyle = styled(motion.nav)`
    height: ${({height}) => height ? '40vh' : ''};
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${({width}) => width ? width : '230px'};

`

const Back = styled(motion.div) `
  
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: ${({background}) => background ? 'var(--color-white)' : 'transparent' };
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
  const Query = useMediaQuery("(min-width: 769px)")


  return (
        <NavStyle
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            height={isOpen  ? true : false}
            width={Query && !isOpen ? '230px' :  Query && isOpen ? '230px' : !Query && isOpen ? '230px': '60px'}
        >
          <Back variants={sidebar} background={isOpen}/>
          <Navigation isOpen={isOpen} toggleOpen={toggleOpen}  />
          <MenuToggle toggle={() => toggleOpen()} />
        </NavStyle>
    );
};
