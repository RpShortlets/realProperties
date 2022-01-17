import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled, {css} from "styled-components/macro"
import Button from "../../components/Button/Button"
import { PaddingStyle, FlexStyle } from "../../styles/globalStyles"
import Result from "./components/Result"
import OpenGuestDropdown from "../../components/OpenGuestDropdown"
import { FiSearch} from "react-icons/fi"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren } from "../../redux/actions/componentState"
import styles from "../../styles/home.module.css"
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import useAddGuestTotal from "../../hooks/useAddGuestTotal/useAddGuestTotal"
import OpenDestination from "../../components/Dropdowns/OpenDestination"
import { Destlocation } from "../../components/Dropdowns/data/destinationLocation"
import { searchShortlets, filter } from "../../redux/actionCreators/actionCreators"
import {SkeletonLoader, ContentLoaders, SliderLoader} from "../../components/Loader/Skeleton"
import SliderDrawer from "../../components/Slider"
import useDebounce from "../../hooks/useDebounce/useDebounce"


const Section = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 5rem;
`

const Loader = styled.div `

    
    
`
const LoaderMain = styled.div `
    padding: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
`


const GeneralDivStyle = css`
    border-radius: 5px;
    height: 50px;
    position: relative;
    background: rgba(196, 196, 196, 1);
    ${FlexStyle}
    justify-content: center;
    color: var(--color-white);
    cursor: pointer;

`

const Container = styled.div `
    background: var(--color-white);
    width: 100%;

`

const Filter = styled.div `
    background: var(--color-white);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    /* ${PaddingStyle} */
    padding: 10px max(16vw, 1rem);

    > div {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: .3rem;
    }

`

const Destination = styled.div `
    ${GeneralDivStyle}
    

`

const DestinationDiv = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-size: var( --font-xtra-small-screen);
        margin-left: .5rem;
    }

    div:last-child label { 
        color: var(--color-black);
    }
`

const Dates = styled.div `
    grid-column: 2/4;
    ${GeneralDivStyle}
    
`
const Guest = styled.div `
    position: relative;
    ${GeneralDivStyle}
`

const GuestClick = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    span:first-child {
        font-size: var( --font-xtra-small-screen);
    }

    span:last-child {
        font-size: var(--font-xtraLarge-small);
    }

`


const Main = styled.div `
    margin: max(5vh, 1rem) 0; 
    display: grid;
    grid-template-columns: repeat(6,1fr);
`

const Results = styled.div `
    grid-column: 2/6;
    /* margin: max(4vw,1rem) 0; */
`

const OtherSearch = styled.div `
    position: fixed;

    width: 200px;
    height: 100%;
    padding: 12px;


    .otherInputContainer {
        display: flex;

        div:first-child {
            margin-right: .7rem;
        }

    }


    input {
        border: 1px solid #ccc;
        font-size: 10px;
        padding: max(.1rem, 5px) max(.8rem, 7px);
        outline: none;

        ::placeholder {
            color: var(--color-black);
            font-size: 10px;
        }

    }


`


const SearchResult = () => {
    const dispatch = useDispatch();
    const {adultcount, childrencount} = useSelector(state => state.ComponentState)
    const {status, propertyResult: {searchResult}}= useSelector(state => state.propertyResult)
    const [guest, setguest] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [value, setvalue] = useState('');
    const [slidervalue, setSliderValue] = useState([10000, 100000]);
    const [min, setMin] = useState(20);
    const myRef = useRef(null)
    const countAdultMinus = 1;
    const countAdultAdd = 9;
    const countAddChild = 5;
    const countMinusChild = 1;
    const startprice = slidervalue[0]
    const endprice = slidervalue[1]
    const TotalGuest = useAddGuestTotal({adultcount, childrencount});

    useClickOutside(myRef, () => {
        if (guest || openModal) {
            setguest(false)
            setOpenModal(false)
        }
            // If user clicks outside of modal, close it.
    })


    const handleGuest = () => {
        setguest(true)
    }

    const AddAdult = () => {
        if(adultcount < countAdultAdd) {
            dispatch(incrementAdult())
        }
    }

    const MinusAdult = () => {
        if(adultcount === countAdultMinus) {
            return;
        } else {
            dispatch(decrementAdult())
        }
    }

    
    const AddChildren = () => {
        if(childrencount < countAddChild) {
            dispatch(incrementChildren())
        }
    }

    const MinusChildren = () => {
        if(childrencount === countMinusChild) {
            return;
        } else {
            dispatch(decrementChildren())
        }
    }


    const onSliderChange = (value) => {
        console.log(value);
        const min = value[0];
        setMin(min)
        setSliderValue(value)
    };


    console.log(min)




    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value
            setvalue(value)
            setOpenModal(false)
        }
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(searchShortlets({value, adultcount, childrencount}))
    }



    useDebounce(() => 
        dispatch(filter({startprice, endprice})), 
    1000,[startprice, endprice, dispatch])



    if(status === 'loading') {
        return (
        <Loader>
            <div style={{marginTop: '-4px'}}>
                <SkeletonLoader  count={1} height={60} styles={styles.loader}/>
            </div>
            <LoaderMain paddingleft='true' paddingRight='true'>
                <div style={{marginTop: '-3rem'}}>
                    <SliderLoader />
                </div>
                <div style={{gridColumn: '2/5'}}>
                    <ContentLoaders />
                </div>
            </LoaderMain>
        </Loader>
        )
    }


    return (
        <Section>
            <Container>
                <Filter paddingleft='true' paddingRight='true'>
                    
                        <div>
                            <Destination>
                                <DestinationDiv onClick={() => setOpenModal(!openModal)}>
                                    <FiSearch size={20} />
                                    <span>{value ? value : 'Destination'}</span>
                                </DestinationDiv>
                                {openModal && (
                                    <OpenDestination 
                                        openModal={openModal}
                                        myRef={myRef}
                                        widths='28vw'
                                        top='60px'
                                        location={Destlocation}
                                        handleOption={handleOption}
                                        color='#333'
                                    />
                                )}
                            </Destination>
                            <Dates>
                                Dates
                            </Dates>
                            <Guest>
                                <GuestClick onClick={() => setguest(!guest)}>
                                    <span>Add Guest</span>
                                    <span>{TotalGuest}</span>
                                </GuestClick>
                                {guest && (
                                    <OpenGuestDropdown 
                                        openGuest={guest} 
                                        width='28vw'
                                        top='60px'
                                        handleGuest={handleGuest} 
                                        myRef={myRef} 
                                        adultcount={adultcount} 
                                        styles={styles} 
                                        MinusAdult={MinusAdult} 
                                        childrencount={childrencount} 
                                        AddAdult={AddAdult} 
                                        MinusChildren={MinusChildren} 
                                        AddChildren={AddChildren}
                                        countAdultMinus={countAdultMinus}
                                        countAdultAdd={countAdultAdd}
                                        countMinusChild={countMinusChild}
                                        countAddChild={countAddChild}
                                        
                                    />
                                )}
                            </Guest>
                            <div>
                                <Button onClicks={handlesubmit}  borderRadius='5px' fontSize='var(--font-xtra-small-screen)' width='100%' height='100%' title='SEARCH' border='none' background='var(--linear-primary)' color='var(--color-white)' />
                            </div>
                        </div>
                    
                </Filter>
                <Main>
                    <OtherSearch>
                        <div className="otherContainer">
                            <div>
                                <SliderDrawer value={slidervalue} onSliderChange={onSliderChange} />
                            </div>
                            <div className="otherInputContainer">
                                <div>
                                    <input type="text" name="minprice" value={slidervalue[0].toLocaleString()} placeholder="Min Price" style={{width: '100%'}} onChange={onSliderChange} />
                                </div>
                                <div>
                                    <input type="text" name="maxprice" value={slidervalue[1].toLocaleString()}  placeholder="Max Price" style={{width: '100%'}} onChange={onSliderChange}  />
                                </div>
                            </div>
                        </div>
                    </OtherSearch>
                    {status === 'succeeded' ? (
                        <>
                            {searchResult.length === 0 ? (
                                'Empty'
                            )
                                : (
                                    <>
                                        <Results>
                                            {searchResult?.map((property) => (
                                                <Result data={property} key={property.apartment_id} />
                                            ))}
                                        </Results>
                                        
                                    </>
                                    
                                )    
                            }
                            
                            
                        </>
                    ) : ('Error Occured')
                }                   
                </Main>
            </Container>
        </Section>
    )
}

export default SearchResult
