import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimension";
import { MenuToggle } from "./ToggleBar";
import { Navigation } from "./Navigation";
import styled from "styled-components";

const NavStyle = styled(motion.nav)`
    position: absolute;
    top: -16px;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 70vh;
    overflow: hidden;

`

const BackGround = styled(motion.div)`
    position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MainNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
        <NavStyle
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
        <motion.div className="background" variants={sidebar}/>
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </NavStyle>
    );
};
