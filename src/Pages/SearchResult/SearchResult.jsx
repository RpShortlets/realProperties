import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"
import Result from "./components/Result"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren, saveSearchValue } from "../../redux/actions/componentState"
import styles from "../../styles/home.module.css"
import useAddGuestTotal from "../../hooks/useAddGuestTotal/useAddGuestTotal"
import { filter } from "../../redux/actionCreators/actionCreators"
import {SkeletonLoader} from "../../components/Loader/Skeleton"
import SliderDrawer from "../../components/Slider"
import useDebounce from "../../hooks/useDebounce/useDebounce"
import FilterComponent from "./components/Filter"
import Error from "../../components/Error/Error";
import { Error404Icon, SearchNotFoundIcon } from "../../Svg/svg";
import { PaddingStyle } from "../../styles/globalStyles";



const Section = styled.section `
    width: 100%;
    height: 100%;
    overflow: hidden;
`


const Container = styled.div `
    background: var(--color-white);
    width: 100%;
    ${PaddingStyle}
`

const Main = styled.div `
    margin: max(5vh, 1rem) 0; 
    display: ${({error}) => error ? 'block' : 'grid'};
    grid-template-columns: repeat(6,1fr);
    gap: 2rem;
`

const Results = styled.div `
    grid-column: 2/7;
`

const OtherSearch = styled.div `

    p {
        margin: 0;
        font-size: var(--font-xtra-small-screen);
    }
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
    const navigate = useNavigate()

    const {adultcount, childrencount, checkInDate, checkOutDate, searchValue} = useSelector(state => state.ComponentState)
    const {status, propertyResult: {searchResult}}= useSelector(state => state.propertyResult)

    const [guest, setguest] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [slidervalue, setSliderValue] = useState([10000, 100000]);
    const [showCalender, setShowCalender] = useState(false)


    const myRef = useRef(null)
    const countAdultMinus = 1;
    const countAdultAdd = 9;
    const countAddChild = 5;
    const countMinusChild = 1;
    const startprice = slidervalue[0]
    const endprice = slidervalue[1]
    const TotalGuest = useAddGuestTotal({adultcount, childrencount});


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
        setSliderValue(value)
    };



    const handleOption = (id) => {
        if(myRef.current && myRef.current.childNodes[id].childNodes[1].checked) {
            const value = myRef.current.childNodes[id].childNodes[1]?.value;
            dispatch(saveSearchValue(value))
            setOpenModal(false)
        }
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        // dispatch(searchShortlets({searchValue, adultcount, childrencount}))
        navigate(`/s/location=${searchValue}&adults=${adultcount}&children=${childrencount}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }



    useDebounce(() => 
        dispatch(filter({startprice, endprice})), 
    1000,[startprice, endprice, dispatch])

    useEffect(() => {
        if(status === 'loading') {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [status]);


    if(status === 'failed') {
        return (
            <Error Icon={Error404Icon}  title="Something went wrong. Please try again." />
        )
    }

    return (
        <>
            <Section>
                <Container  paddingleft='true' paddingRight='true'>
                    {status === 'loading' ?(
                        <div style={{marginTop: '-5.5rem'}}>
                            <SkeletonLoader count={1} height={60} styles={styles.loader} /> 
                        </div>)
                        : (
                            <FilterComponent 
                                openModal={openModal} 
                                setOpenModal={setOpenModal} 
                                myRef={myRef} 
                                handleOption={handleOption} 
                                handleGuest={handleGuest} 
                                guest={guest} 
                                setguest={setguest} 
                                TotalGuest={TotalGuest} 
                                MinusAdult={MinusAdult} 
                                MinusChildren={MinusChildren} 
                                AddAdult={AddAdult} 
                                AddChildren={AddChildren} 
                                handlesubmit={handlesubmit} 
                                countAddChild={countAddChild} 
                                countMinusChild={countMinusChild} 
                                countAdultMinus={countAdultMinus} 
                                countAdultAdd={countAdultAdd} 
                                styles={styles}
                                setShowCalender={setShowCalender}
                                showCalender={showCalender}
                            
                            />
                        )}
                    <Main error={searchResult?.length > 0 ? false : true}>
                        {searchResult?.length > 0 && (
                            <OtherSearch>
                                <div>
                                    <p>Filter by Price</p>
                                </div>
                                <div className="otherContainer">
                                    {status === 'loading' ? <SkeletonLoader/> :
                                        ( <div>
                                            <SliderDrawer value={slidervalue} onSliderChange={onSliderChange} />
                                        </div>)
                                    }
                                    
                                    {status === 'loading' ? <SkeletonLoader/> :
                                        (<div className="otherInputContainer">
                                            <div>
                                                <input type="text" name="minprice" value={slidervalue[0].toLocaleString()} placeholder="Min Price" style={{width: '100%'}} onChange={onSliderChange} />
                                            </div>
                                        
                                            <div>
                                                <input type="text" name="maxprice" value={slidervalue[1].toLocaleString()}  placeholder="Max Price" style={{width: '100%'}} onChange={onSliderChange}  />
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </OtherSearch>
                        )}
                    
                            <Results>
                                {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : (
                                    <>
                                        {searchResult?.length > 0 ? (
                                            <>
                                                {searchResult?.map((property) => (
                                                    <Result data={property} key={property.apartment_id} />
                                                ))}
                                            </>
                                        ) : (
                                            <Error title="Oops! We can’t find any property that matches your search" Icon={SearchNotFoundIcon} />
                                        )
                                        }
                                    </>
                                )}
                            </Results>                  
                    </Main>
                </Container>
            </Section>
        </>
    )
}

export default SearchResult
