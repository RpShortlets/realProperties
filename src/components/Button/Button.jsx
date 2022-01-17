import styled from "styled-components"


const Buttons = styled.button`
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
    cursor: pointer;
    /* transition: 1s; */

    :hover {
        background:  ${({hover}) => hover}; 
    }

    :disabled {
        cursor: not-allowed;
        background: transparent;
    }
    svg {
        margin: ${({svgMargin}) => svgMargin};
    }
`

const Button = ({title,justify,fontSize,hoverText, fontWeight, borderRadius, classNames, hover, height, MouseEnter, MouseLeave, padding, alignT, type, onClicks, color, background, style, border, disabled, icon, width, display, svgMargin}) => {
    
    return (
        <>
            <Buttons 
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
            >
                {icon}
                {title}
            </Buttons>
        </>
    )
}

export default Button