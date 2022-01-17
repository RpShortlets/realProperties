import styled from "styled-components"
import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle, ModalStyle } from "../../../../../styles/globalStyles"

const ModalDiv = styled.div `
    ${ModalStyle}
    z-index: 1;

    > div {
        padding: 1rem;

        
    }

    form div {
        ${FlexStyle}
        justify-content: space-between;    
    }
`
const ValueAdded = styled.div `
display: none;

@media screen and (min-width: 768px) {
    display: block;
    border: 1px solid rgba(33, 8, 8, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;

    h4 {
        font-size: var(--font-xtra-small-screen);
        font-weight: 500;
        margin: 0;
    }

    > div {
        padding: 10px;
    }

}


`


const ValueAddedServices = ({status, modalRef, checkboxes, handleChange, openService, setOpenService}) => {
    return (
        <ValueAdded>
            <div> 
                {status === 'loading' ? (<SkeletonLoader /> ) :
                (<div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}  onClick={() => setOpenService(!openService)}>
                    <div>
                        <h4>Additional Services</h4>
                    </div>
                    {openService ? (<FiChevronUp />) : (<FiChevronDown />)}
                </div>)}
                {openService && (
                    <ModalDiv  top="36px" ref={modalRef} width= "100%" left='0'  border="1px solid rgba(33, 8, 8, 0.22)">
                        <div>
                            <div>
                                <label htmlFor="cleaning">Cleaning Services</label>
                                <input id='cleaning' type="checkbox" name="cleaning" checked={checkboxes.cleaning === "cleaning"} value='cleaning' onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="pickup">Pickup/Drop Off</label>
                                <input id="pickup" type="checkbox" name="pickup"  value='pickup'  checked={checkboxes.pickup === "pickup"} onChange={handleChange}/>
                            </div> 
                        </div>
                    </ModalDiv>
                )}
            </div>
        </ValueAdded>
    )
}

export default ValueAddedServices
