import styled from "styled-components"
import { SearchFilterLabel } from '../../../../../styles/globalStyles';
import useMediaQuery from "../../../../../hooks/useMediaQuery/useMediaQuery"
import OpenDestination from "../../../../../components/Dropdowns/OpenDestination";
import { Destlocation } from "../../../../../components/Dropdowns/data/destinationLocation";
import { useSelector } from "react-redux";


const Label = styled.label `
    ${SearchFilterLabel}

    p {
        font-size: var(--font-xtra-small-screen)
    }
    span {
        font-size: var(--font-xtraLarge-small);
        font-weight: 400;
    }

`

const Search = styled.div `
flex: 1; 
position: relative;
margin: 0 15px;
z-index: 122;

`

const Destination = ({handleModal, openModal, myRef, handleOption, setOpenModal}) => {
    const checkedQuery = useMediaQuery("(min-width: 601px)");
    const {searchValue} = useSelector(state => state.ComponentState)

    let widths = checkedQuery ? '35vw' : '100%';



    return (
        <Search>
            <Label isActive={openModal} onClick={handleModal}>
                <div style={{marginLeft: '15px'}}>
                    <p style={{margin: 0, fontWeight: '600'}}>{searchValue ? searchValue : 'Destination'}</p>
                    <span> Where to you want to stay?</span>
                </div>
            </Label>
            <OpenDestination 
                openModal={openModal}
                myRef={myRef}
                widths={widths}
                location={Destlocation}
                handleOption={handleOption} 
                setOpenModal={setOpenModal}
                zIndex='0'       
            /> 
            
        </Search>
    )
}

export default Destination
