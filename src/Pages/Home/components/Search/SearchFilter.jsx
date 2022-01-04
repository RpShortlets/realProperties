import styled from "styled-components"
import styles from "../../../../styles/home.module.css"
import { FlexStyle } from '../../../../styles/globalStyles';
import Button from "../../../../components/Button/Button"
import Destination from "./components/Destination";
import CheckInOut from "./components/CheckInOut";
import AddGuest from "./components/AddGuest";

const FilterContainer = styled.div `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
`

const FilterWrapper = styled.div `
    ${FlexStyle}
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const Header = styled.div `
    ${FlexStyle}
    flex-direction: column;

    h1 {
        color: var(--color-white);
        font-size: var(--font-big);
        font-weight: 600;
        margin: 0;
    }

    p {
        color: var(--color-white);  
        font-weight: 300; 
        margin: 0;
    }
`

const FilterSearchWrapper = styled.div `
    ${FlexStyle}
    justify-content: center;
    width: 100%;
    margin-top: 3rem;

`

const Fiter = styled.div `
    ${FlexStyle}
    height: 70px;
    width: 70%;
    background: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius-lg);
    margin-right: 1rem;
    padding: 10px;
`


const SearchFilter = ({changeText, DefaultText, openModal, handleModal, value, myRef, location, handleGuest, 
    guest, resetCount, setArrivalDeparture, openGuest, 
    text, handleOption,}) => {

    return (
        <FilterContainer className={styles.HomeFilterBackground }>
            <FilterWrapper className="justify-center">
                <Header>
                    <h1>Reserve Your Luxury Short Let</h1>
                    <p>Easy, Secure and Quick</p>
                </Header>
                <FilterSearchWrapper>
                    <Fiter>
                        <Destination  
                            changeText={changeText} 
                            DefaultText={DefaultText} 
                            handleModal={handleModal} 
                            openModal={openModal} 
                            value={value} 
                            myRef={myRef} 
                            location={location} 
                            handleOption={handleOption}
                        />
                        <CheckInOut setArrivalDeparture={setArrivalDeparture}/>
                        <AddGuest
                            handleGuest={handleGuest} 
                            guest={guest} 
                            resetCount={resetCount} 
                            openGuest={openGuest} 
                            myRef={myRef}  
                        />
                    </Fiter>
                    <div className="mt-10">
                        <Button 
                            title={text}
                            type="submit" 
                            background="var(--linear-primary)" 
                            height="70px" 
                            color="var(--color-white)" 
                            padding="1rem"
                            fontSize="1rem"
                            className="flex"
                            width="150px"
                            hover="var(--color-primary)"
                            hoverText="Search"
                            MouseEnter={changeText} 
                            MouseLeave={DefaultText}
                            
                        />
                    </div>
                </FilterSearchWrapper>
            </FilterWrapper>
        </FilterContainer>
                
    )
}

export default SearchFilter
