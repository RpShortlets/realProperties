import styled from "styled-components"
import { ModalStyle } from '../../styles/globalStyles';

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

const OpenDestination = ({openModal, myRef, widths, location, handleOption, top, color}) => {
    return (
        <>
            {openModal && (
                <ModalDiv ref={myRef} width={widths} left="0" top={top} color={color}>
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
