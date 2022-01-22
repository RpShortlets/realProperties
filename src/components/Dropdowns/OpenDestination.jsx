import { motion } from "framer-motion";
import styled from "styled-components"
import { ModalStyle } from '../../styles/globalStyles';
import Backdrop from "../Backdrop";

const ModalDiv = styled.div `
${ModalStyle}

label {
    display: block;
    padding: 7px 20px;
    cursor: pointer;

    :hover {
        background: #ccc;
    }
}
`

const OpenDestination = ({openModal, myRef, widths, location, handleOption, top, color, setOpenModal, zIndex}) => {
    return (
        <>
            {openModal  && <Backdrop onClick={()=> setOpenModal(false)} zIndex={zIndex} /> }
            {openModal && (
                <ModalDiv 
                    as={motion.div}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ ease: "easeOut", duration: 1 }} 
                    ref={myRef} 
                    width={widths} 
                    left="0" top={top} 
                    color={color}
                >
                    {location.map((data, i)  => 
                        <label key={data.id}>{data.name}
                            <input name={data.name} value={data.name} key={data.id} type="checkbox" onChange={() => handleOption(data.id)} style={{display: 'none'}} />
                        </label>
                    )}
                </ModalDiv>
            )}
        </>
    )
}

export default OpenDestination
