import styled from "styled-components"
import { ModalStyle, SearchFilterLabel } from '../../../../../styles/globalStyles';
import useMediaQuery from "../../../../../hooks/useMediaQuery/useMediaQuery"


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

const Destination = ({changeText, DefaultText, handleModal, openModal, value, myRef, location, handleOption}) => {
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
            
                {/* <div ref={modalRef} > */}
                    {openModal && (
                        <ModalDiv ref={myRef} width={widths} left="0">
                            {location.map((data, i)  => 
                                <label key={data.id}>{data.name}
                                    <input name={data.name} value={data.name} key={data.id} type="checkbox" onChange={() => handleOption(data.id)} style={{display: 'none'}} />
                                </label>
                            )}
                        </ModalDiv>
                    )}
                {/* </div> */}
                
            {/* </CSSTransition> */}
        </Search>
    )
}

export default Destination
