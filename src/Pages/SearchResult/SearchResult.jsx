import { useState, useRef, useEffect } from "react"
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"
import Result from "./components/Result"
import { incrementAdult, decrementAdult, incrementChildren, decrementChildren, saveSearchValue } from "../../redux/actions/componentState"
import styles from "../../styles/home.module.css"
import useAddGuestTotal from "../../hooks/useAddGuestTotal/useAddGuestTotal"
import { filter, searchShortlets } from "../../redux/actionCreators/actionCreators"
import {SkeletonLoader} from "../../components/Loader/Skeleton"
import SliderDrawer from "../../components/Slider"
import useDebounce from "../../hooks/useDebounce/useDebounce"
import FilterComponent from "./components/Filter"
import Error from "../../components/Error/Error";
import { Error404Icon, SearchNotFoundIcon } from "../../Svg/svg";
import { PaddingStyle } from "../../styles/globalStyles";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";
import { AnimatePresence } from "framer-motion"
import Drawer from "../../components/Drawer/Drawer";
import { setOpenDrawer } from "../../redux/actions/componentState";
// import Scrollable from "../../components/Scrollable/Scrollable";

// import { RecommendationData } from "./Data/data";





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
    

    @media screen and (min-width: 769px) {
        margin: max(5vh, 1rem) 0; 
        display: ${({error}) => error ? 'block' : 'grid'};
        grid-template-columns: repeat(6,1fr);
        gap: 2rem;
    }
`

const Results = styled.div `
    grid-column: 2/7;
`

const OtherSearch = styled.div `
    display: none;
    margin: 2rem 0;
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
    
    @media screen and (min-width: 769px) { 
        margin: 0;
        display: block;
    }


`

const Count = styled.div `
    margin: 1.2rem 0;

    p {
        margin: 0;
        font-size: var(--font-xtra-small-screen);
        font-weight: 600;

        span:first-child {
            color: var(--color-primary) !important;
        }

        span:last-child { 
            color: var(--color-dark-gray) !important;
        }
    }

    @media screen and (min-width: 769px) { 
        margin: max(2.4vw, 1.2rem) 0 0 0;
    }

`

const SearchResult = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {location, adults, children, checkIn, checkOut,} = useParams();

    //! NEED TO FIX THE REPLICA OF THIS CODE IN THE NAV BAR
    const searchV = location?.slice(9)
    const adult = adults?.slice(7) === 'null' ? '' : adults?.slice(7)
    const childr = children?.slice(9) === 'null' ? '' : children?.slice(9)
    const checkI = checkIn?.slice(8)
    const checkO = checkOut?.slice(9)


    const {adultcount, childrencount, checkInDate, checkOutDate, searchValue, openDrawer} = useSelector(state => state.ComponentState)
    const {status, propertyResult: {searchResult, count}}= useSelector(state => state.propertyResult)

    const [guest, setguest] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [slidervalue, setSliderValue] = useState([70000, 150000]);
    const [showCalender, setShowCalender] = useState(false)


    const Query = useMediaQuery("(min-width: 769px)")


    const myRef = useRef(null)
    const countAdultMinus = 1;
    const countAdultAdd = 4;
    const countAddChild = 3;
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
        dispatch(setOpenDrawer(false))
        navigate(`/s/location=${searchValue}&adults=${adultcount > 0 ?  adultcount : ''}&children=${childrencount >  0 ? childrencount : ''}&checkin=${checkInDate !== null ? checkInDate : ''}&checkout=${checkOutDate !== null ? checkOutDate : ''}`)
    }



    useDebounce(() => 
        dispatch(filter({startprice, endprice})), 
    1000,[startprice, endprice, dispatch])

    useEffect(() => {
        dispatch(searchShortlets({searchV, checkI, checkO, adult, childr}))
    },[searchV, checkI, checkO, adult, childr, dispatch])

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
            {!Query && 
                <AnimatePresence>
                    <Drawer openDrawer={!openDrawer} SubmitForm={handlesubmit}/>
                </AnimatePresence>
            }
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
                        <Count>
                            {status === 'loading' ? <SkeletonLoader/> : 
                                status === 'succeeded' &&
                                <p>Search result <span>{searchV} Shortlets</span> <span>{count[0]?.count} {count[0]?.count > 1 ? 'properties' : 'property'} found</span></p>
                            }
                        </Count>
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
                                                <input disabled type="text" name="minprice" value={slidervalue[0]} placeholder="Min Price" style={{width: '100%'}} onChange={onSliderChange} />
                                            </div>
                                        
                                            <div>
                                                <input disabled type="text" name="maxprice" value={slidervalue[1]}  placeholder="Max Price" style={{width: '100%'}} onChange={onSliderChange}  />
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </OtherSearch>
                        )}
                    
                            <Results>
                                {status === 'loading' ? <SkeletonLoader width='100%' height='300px'/> : (
                                    <>
                                        {status === 'succeeded' && (
                                            <>
                                                {searchResult?.length > 0 ? (
                                                    <>
                                                        {searchResult?.map((property) => (
                                                            <Result data={property} key={property.apartment_id}  status={status}/>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <>
                                                        <Error height='60vh' title="Oops! We can’t find any property that matches your search but we provided recommendation" Icon={SearchNotFoundIcon} />
                                                        {/* <Scrollable title="Recommendations of nearby shortlets" data={RecommendationData}/> */}
                                                    </>
                                                )}
                                            </>
                                        )}
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
