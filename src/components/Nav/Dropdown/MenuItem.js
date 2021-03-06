import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components"
import { Link } from "react-router-dom";

const LI = styled(motion.li) `
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, data , toggleOpen, isOpen}) => {
    // const style = { border: `2px solid ${colors[i]}` };
    return (
        <LI
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            {/* <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} /> */}
            <Link to={data.path} onClick={() => toggleOpen(!isOpen)}>
              {data.title}
            </Link>
        </LI>
    );
};