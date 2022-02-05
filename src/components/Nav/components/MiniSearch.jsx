import React from 'react';
import styled from "styled-components"
import { motion } from 'framer-motion';
import { Destlocation } from "../../../components/Dropdowns/data/destinationLocation";
import { useSelector } from "react-redux";
import { SearchIcon} from "../../../Svg/svg";
import { FlexStyle } from '../../../styles/globalStyles';
import OpenDestination from '../../Dropdowns/OpenDestination';


const MiniSearches =  styled.div `
    display: none;
    
    @media (min-width: 769px) {
        display: block;
        position: relative;
        background: var(--color-secondary);
        padding: 0.5rem 0.8rem;
        border-radius: 7px;
        height: 50px;
        ${FlexStyle}
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);


        div {
            flex: 1;
            cursor: pointer;
            p {
                font-size: var(--font-xtra-small-screen);
                margin: 0; 
                font-weight: 500;
            }
            span {
                font-size: var(--font-xtraLarge-small);
                font-weight: 400;
            }

        }

        div:last-child {
            ${FlexStyle}
            justify-content: end;
            svg {
                width: 22px;
                height: 22px;
                color: var(--color-primary);
                cursor: pointer;
            }
        }

    }

`

const MiniSearch = ({myRef, openNavMini, setOpenNavMini, handleOption, SubmitForm}) => {
    const {searchValue} = useSelector(state => state.ComponentState)

    return (
        <MiniSearches
            as={motion.div}
            initial={{opacity: 0,  scale: .5}}
            animate={{opacity: 1,  scale: 1}}
            exist={{y: 5, scale: 7}}
            transition={{duration: .1,
                type: {type: 'tween'}
            }}
        
        >
            <div onClick={() => setOpenNavMini(prev => !prev)}>
                <p>{searchValue ? searchValue : 'Destination'}</p>
                <span> Where to you want to stay?</span>
            </div>
            <OpenDestination
                openModal={openNavMini}
                myRef={myRef}
                widths='100%'
                location={Destlocation}
                handleOption={handleOption} 
                setOpenModal={setOpenNavMini}
                zIndex='0'       
            /> 
            
            <div onClick={SubmitForm}>
                {SearchIcon}
            </div>
        </MiniSearches>
    )
};

export default MiniSearch;
