import styled from "styled-components"
import { SearchFilterLabel } from '../../../../../styles/globalStyles';
import useMediaQuery from "../../../../../hooks/useMediaQuery/useMediaQuery"
import OpenDestination from "../../../../../components/Dropdowns/OpenDestination";
import { Destlocation } from "../../../../../components/Dropdowns/data/destinationLocation";



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

`

const Destination = ({changeText, DefaultText, handleModal, openModal, value, myRef, handleOption}) => {
    const checkedQuery = useMediaQuery("(min-width: 601px)");

    let widths = checkedQuery ? '35vw' : '100%';



    return (
        <Search onMouseEnter={changeText} onMouseLeave={DefaultText} >
            <Label isActive={openModal} onClick={handleModal}>
                <div style={{marginLeft: '15px'}}>
                    <p style={{margin: 0, fontWeight: '600'}}>{value ? value : 'Destination'}</p>
                    <span> Where to you want to stay?</span>
                </div>
            </Label>
            {/* <CSSTransition in={openModal}
                mountOnEnter
                unmountOnExit 
                timeout={200}
                classNames="search"
            > */}
            
                <OpenDestination 
                    openModal={openModal}
                    myRef={myRef}
                    widths={widths}
                    location={Destlocation}
                    handleOption={handleOption}        
                />
                
            {/* </CSSTransition> */}
        </Search>
    )
}

export default Destination
