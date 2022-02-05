import styled from "styled-components"
import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle, ModalStyle } from "../../../../../styles/globalStyles"
import { motion } from "framer-motion"
import Checkbox from "../../../../../utils/FormElement/CheckBox"

const ModalDiv = styled.div `
    ${ModalStyle}
    z-index: 11;

    > div {
        padding: 1rem;

        
    }

    form div {
        ${FlexStyle}
        justify-content: space-between;    
    }
`
const ValueAdded = styled.div `
    display: ${({display}) => display};
    margin: ${({display}) => display ? '1rem 0' : '0'};

    

    .valueContainer {
        position: relative;
        background: #FFFFFF;
        border: 0.908854px solid rgba(33, 8, 8, 0.22);
        border-radius: 4.54427px;
        padding: 0.5rem 1.5rem 0.5rem 0.5rem;



            svg {
                font-size: var(--font-big);
                color: var(--color-dark);

            }
        
    }

    @media screen and (min-width: 769px) {
        display: block;

        .valueContainer { 
            padding: 10px;
        }
        

        svg {
            font-size: var( --font-small-screen) !important;
            color: var(--color-dark);
        }
        h4 {
            font-size: var(--font-xtra-small-screen);
            font-weight: 500;
            margin: 0;
        }
    }

    
`


const ValueAddedServices = ({reserve, modalRef, show, checkboxes, handleChange, openService, setOpenService}) => {
    return (
        <ValueAdded display={ show ? 'block' : 'none'}>
            <div className="valueContainer"> 
                {reserve === 'loading' ? (<SkeletonLoader /> ) :
                (<div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center'}}  onClick={() => setOpenService(!openService)}>
                    <div>
                        <h4>Additional Services</h4>
                    </div>
                    {openService ? (<FiChevronUp />) : (<FiChevronDown />)}
                </div>)}
                {openService && (
                    <ModalDiv  
                        as={motion.div}
                        animate={{ y: [0, 5, 0] }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        top="36px" 
                        ref={modalRef} 
                        width= "100%" 
                        left='0'  
                        border="1px solid rgba(33, 8, 8, 0.22)"
                    >
                        <div>
                            <Checkbox name="cleaning" checkboxes={checkboxes.cleaning} handleChange={handleChange} label="Cleaning Service" />
                            <Checkbox name="pickup" checkboxes={checkboxes.pickup} handleChange={handleChange} label="Pickup/Dropoff" />

                        </div>
                    </ModalDiv>
                )}
            </div>
        </ValueAdded>
    )
}

export default ValueAddedServices
