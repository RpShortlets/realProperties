import styled from "styled-components"
import {motion} from "framer-motion"


const Buttons = styled.button`
    position: ${({position}) => position};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    box-shadow: ${({boxShadow}) => boxShadow};
    display:  ${({display}) => display};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignT}) => alignT};
    width: ${({width}) => width};
    height: ${({height}) => height};
    font-size: ${({fontSize}) => fontSize ? fontSize : 'var(--font-xtra-small)'};
    font-weight: ${({fontWeight}) => fontWeight};
    padding: ${({padding}) => padding ? padding : ''};
    background: ${({background}) => background};
    border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '7px')};
    border: ${({border}) => border};
    color: ${({color}) => color};
    mix-blend-mode: normal;
    z-index: ${({zIndex}) => zIndex};
    cursor: pointer;
    /* transition: 1s; */

    :hover {
        background:  ${({hover}) => hover}; 
    }

    :disabled {
        cursor: not-allowed;
        background: ${({disabledBG}) => disabledBG ? disabledBG : 'transparent'};
        border: 1px solid #ccc !important;
    }
    svg {
        margin: ${({svgMargin}) => svgMargin};
    }
`

const Button = ({zIndex,position, whileHover, left, right, bottom, boxShadow, disabledBG, title,justify,fontSize,hoverText, fontWeight, borderRadius, classNames, hover, height, MouseEnter, MouseLeave, padding, alignT, type, onClicks, color, background, style, border, disabled, icon, width, display, svgMargin}) => {
    

    return (
        <>
            <Buttons
                as={motion.button}
                whileHover={whileHover ? "" : {scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={classNames}
                display={display} 
                justify={justify} 
                alignT={alignT} 
                icon={icon && true} 
                width={width} 
                type={type} 
                style={style} 
                color={color} 
                background={background} 
                border={border} 
                onClick={onClicks} 
                disabled={disabled} 
                svgMargin={svgMargin} 
                padding={padding}
                fontSize={fontSize}
                height={height}
                hover={hover}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                borderRadius={borderRadius}
                fontWeight={fontWeight}
                zIndex={zIndex}
                position={position}
                left={left}
                bottom={bottom}
                right={right}
                boxShadow={boxShadow}
                disabledBG={disabledBG}
                arialLabel={title}
            >
                {icon}
                {title}
            </Buttons>
        </>
    )
}

export default Button