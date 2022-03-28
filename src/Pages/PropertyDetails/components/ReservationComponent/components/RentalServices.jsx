import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FlexStyle } from "../../../../../styles/globalStyles"
import styled from "styled-components"
import Tooltips from "../../../../../components/Tooltip"
import { motion, AnimatePresence } from 'framer-motion';
import Button from "../../../../../components/Button/Button";
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import useMediaQuery from "../../../../../hooks/useMediaQuery/useMediaQuery";




const RentalService = styled.div `
    display: ${({display}) => display};

    @media (min-width: 769px) {
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        margin: max(1vw,1rem) 0 0.7rem;
        z-index: 12;

        .RentalContainer {
            padding: max(1vw, .5rem);
        }
    }

`

const RentalType = styled.div `
    position: relative;
    
    h3 {
        margin: 0;
        font-size: var(--font-small-screen);
    }

    .carTypeButton {
        cursor: pointer;
        ${FlexStyle}
        justify-content: space-between;
        border: 1px solid rgba(33, 8, 8, 0.39);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px;

        h4 {
            font-size: var(--font-xtra-small);
            font-weight: 500;
            margin: 0;
        }

        svg {
            font-size: var(--font-big);
            color: var(--color-dark);
        }
    }

    .RentalHeader {
        ${FlexStyle}
        justify-content: space-between;
        font-size: var(--font-xtra-small-screen);
        cursor: pointer;

        span {
            text-decoration: underline;
        }
    }


    @media screen and (min-width: 768px) {
        .carTypeButton {
            h4 {
                font-size: var( --font-xtra-small-screen) !important;
            }
        }

        h3 {
            font-size: var( --font-xtra-small-screen);
        }

        .carTypeButton  {
            svg {
                font-size: var( --font-small-screen) !important;
            }
        }
    }
`

const CarModal = styled.div `
    border: 1px solid rgba(33, 8, 8, 0.39);
    border-radius: 5px;
    margin-top: max(.5vw, .3rem);
    z-index: 12;
    position: relative;
    transition: all 8s ease-in-out;

    .carModalWrapper {
        /* padding: 10px; */
    }

    .carModalInputContainer {
        ${FlexStyle}
        justify-content: space-between;
        cursor: pointer;
        padding: 5px 10px;
        transition: all 0.8s;

        span { 
            flex: 1;
            font-size: var(--font-small-screen);
        }

        :hover {
            background: #DCEFF4;
            border: 1px solid rgba(33, 8, 8, 0.39);
        }

    }

    .carModalInputDiv {
        flex: 1;
        ${FlexStyle}
        span {
            background: transparent;
            font-size: var(--font-xtra-small);
            width: 100%;
            text-align: end;
        }
    }

    @media screen and (min-width: 768px) {
        .carModalInputContainer {
            span {
                font-size: var( --font-xtraLarge-small);
            }
        }
    }
`


const CarLength = styled.div `
    background: #FFFFFF;
    border: 1px solid rgba(33, 8, 8, 0.39);
    border-radius: 5px;
    margin-top: max(.5vw, .3rem);

    .carLenghtContainer {
        ${FlexStyle}
        justify-content: space-between;
        padding: 4px 10px;
    }

    .carLengthDays {
        span {
            font-size: var(--font-xtra-small-screen);
        }
    }

    .carLenghtBtnsDiv {
        ${FlexStyle}

        .carLengthBtn {
            border: 1px solid;
            width: max(1.7vw, .9rem);
            display: flex;
            align-items: center;
            justify-content: center;
            height: max(1.7vw, .9rem);
            border-radius: 20px;
            cursor: pointer;
        }

        .carDays {
            font-size: var(--font-xtra-small-screen);
            margin: 0 max(.5vw, .3rem);
        }
    }

`

// const Driver = styled.div `
//     background: #FFFFFF;
//     border: 1px solid rgba(33, 8, 8, 0.39);
//     border-radius: 5px;
//     margin-top: max(.5vw, .3rem);

//     span {
//         font-size: var(--font-xtra-small-screen);
//     }

//     .DriverContainer {
//         padding: 4px 10px;
//         ${FlexStyle}
//         justify-content: space-between;
//     }

//     .driverRadioBtnContainer {
//         ${FlexStyle}
        
//     }
// `

// const Label = styled.label `

//     font-size: var(--font-xtra-small-screen);
    
//     background: ${({checked}) => checked };
//     border: 1px solid var(--color-primary);
//     color: ${props => props.checked ? 'var(--color-white)' : 'var(--color-primary)'};
//     padding: 0px 5px;
//     border-radius: 2px;
//     cursor: pointer;
//     transition: all 0.2s;
        

//     :last-child {
//         margin-left: max(.5vw, .3rem);
//     }

//     :hover {
//         background: var(--color-primary);
//         color: var(--color-white);
//     }
// `

const RentalServices = ({resetData, radio, addDays, minusDays, 
    carlengthValue, openCar, setOpenCar, showBenzRef, BenZ, handleBenz, Suv, 
    Camry, showCamryRef, showSuvRef, selectedCar, show, carlength}) => {

    const Query = useMediaQuery("(min-width: 769px)")

    return (
        <>
            
            <RentalService display={ show ? 'block' : 'none'}>
                <div className="RentalContainer">
                    <RentalType>
                        <div className="RentalHeader">
                            <h3>Car Rental</h3>
                            <Tooltips title='reset all data'>
                                <span onClick={resetData}>Clear data</span>
                            </Tooltips>
                        </div>
                        <div onClick={() => setOpenCar(!openCar)} className="carTypeButton" style={{marginTop: 'max(0.5vw,0.3rem)'}}>
                            <h4>{selectedCar ? selectedCar : 'Car Type (Select from the list below)'}</h4>
                            {openCar ? (<FiChevronUp />) : (<FiChevronDown />)}
                        </div>
                        
                        {openCar && (
                            <CarModal 
                                // as={motion.div}
                                // animate={{ y: [0, 100, 0] }}
                                // transition={{ ease: "easeOut", duration: 1 }}
                            >
                                <div className="carModalWrapper">
                                    <div className="carModalInputContainer" onClick={showBenzRef}>
                                        <span htmlFor="benz">Mercedes Benz E350</span>
                                        <div className="carModalInputDiv" ref={BenZ} >
                                            <span>&#8358;70,000</span>
                                            <input id="benz" type="checkbox" name="MercedezBenzE350" value="50,000"  onChange={() => handleBenz} style={{display: 'none'}}  />
                                        </div>
                                    </div>
                                    <div className="carModalInputContainer" onClick={showCamryRef}>
                                        <span>Toyota Camry</span>
                                        <div className="carModalInputDiv" ref={Camry} >
                                            <span>&#8358;60,000</span>
                                            <input type="checkbox" name="ToyotaCamry" value="40,000"  onChange={() => handleBenz} style={{display: 'none'}} />
                                        </div>
                                    </div>
                                    <div className="carModalInputContainer" onClick={showSuvRef}>
                                        <span>Chevy Tahoe SUV</span>
                                        <div className="carModalInputDiv" ref={Suv} >
                                            <span>&#8358;80,000</span>
                                            <input type="checkbox" name="ChevyTahoeSUV" value="60,000"  onChange={() => handleBenz} style={{display: 'none'}} />
                                        </div>
                                    </div>
                                    
                                </div>
                            </CarModal>
                        )}
                        <AnimatePresence>
                            {carlength && (
                                <CarLength
                                    as={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} 
                                    transition={{ duration: 1 }} 
                                >
                                    <div className="carLenghtContainer">
                                        <div className="carLengthDays">
                                            <span>Number of days</span>
                                        </div>
                                        <div className="carLenghtBtnsDiv">
                                            <Tooltips title='Cannot decrease below 1'>
                                                <Button 
                                                    onClick={minusDays}
                                                    icon={<FiMinus color='var(--color-primary-dark)' />} 
                                                    display="flex" 
                                                    padding={Query ? "5px" : '10px'}  
                                                    background="transparent"
                                                    border="1px solid #ccc"
                                                    borderRadius="32px"
                                                />
                                                {/* <span className="carLengthBtn" onClick={minusDays}>-</span> */}
                                            </Tooltips>
                                            
                                            <span className="carDays">{carlengthValue}</span>
                                            <Tooltips title='Cannot increase above length of stay'>
                                                <Button  
                                                    icon={<IoMdAdd  color='var(--color-primary-dark)'/>} 
                                                    background="transparent" 
                                                    padding={Query ? "5px" : '10px'}  
                                                    display="flex" 
                                                    onClicks={addDays}
                                                    border="1px solid #ccc"
                                                    borderRadius="32px"
                                                />
                                                {/* <span className="carLengthBtn" onClick={addDays}>+</span> */}
                                            </Tooltips>
                                        </div>
                                    </div>
                                </CarLength>
                            )}
                        </AnimatePresence>
                        {/* <AnimatePresence>
                            {carlengthValue > 0 && (
                                <Driver
                                    as={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2 }} 
                                    
                                >
                                    <div className="DriverContainer">
                                        <div>
                                            <span>Need a Driver ?</span>
                                        </div>
                                        <div className="driverRadioBtnContainer">
                                            <div>
                                                <input 
                                                    id='yesDriver' 
                                                    type="radio" 
                                                    name="driver" 
                                                    value="driver"  
                                                    style={{display: 'none'}}
                                                    checked={radio === "Yes"}
                                                    onChange={handlecheckbox} 
                                                    />
                                                <Label htmlFor="yesDriver" checked={radio === 'driver' ? 'var(--color-primary)' : ''}>Yes</Label>
                                            </div>
                                            <div>
                                                <input 
                                                    id="noDriver" 
                                                    type="radio" 
                                                    name="driver" 
                                                    value={null}
                                                    style={{display: 'none'}}
                                                    checked={radio === "No"}
                                                    onChange={handlecheckbox} 
                                                />
                                                <Label htmlFor="noDriver" checked={radio === '' ? 'var(--color-primary)' : ''}>No</Label>
                                            </div>
                                        </div>
                                    </div>
                                </Driver>
                            )}
                        </AnimatePresence> */}
                        {/* <AnimatePresence>
                            {radio === "driver" && carlengthValue > 0 ? (
                                <CarLength
                                    as={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} 
                                    transition={{ duration: 3 }}
                                >
                                    <div className="carLenghtContainer">
                                        <div className="carLengthDays">
                                            <span>Number of days</span>
                                        </div>
                                        <div className="carLenghtBtnsDiv">
                                            <Tooltips title='Cannot decrease below 1'>
                                                <span className="carLengthBtn" onClick={minusDays}>-</span>
                                            </Tooltips>
                                                <span className="carDays">{carlengthValue}</span>
                                            <Tooltips title='Cannot increase above length of car use'>
                                                <span className="carLengthBtn" onClick={addDays}>+</span>
                                            </Tooltips>
                                        </div>
                                    </div>
                                </CarLength>
                                
                            )
                            
                            :("")}
                        </AnimatePresence> */}
                    </RentalType>
                </div>
            </RentalService>
        </>
    )
}

export default RentalServices
