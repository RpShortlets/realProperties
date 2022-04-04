import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import  {fetchGallarySuccess} from '../../redux/actions/gallery'

import Error from '../../components/Error/Error'



import Backdrop from "../../components/Backdrop"
import ImageModal from '../../components/Image Modal/ImageModal'



const Section  = styled.section`
    background-color: var(--color-secondary);
    width: 100%;
    height: 100%;
    padding: max(4vw, 2rem) 0;
`
const Main = styled.main`
    ${PaddingStyle}
    height: 100%;
`

const Header = styled.div `
    ${FlexStyle}
    flex-direction: column;
    justify-content: center;

    div:first-child {
        display: flex;
    }

    div:last-child {
        display: flex;
    }

    span {
        /* background: #17677B; */
    }
`

const Span = styled.span`
    background: ${({background}) => background  ? "#17677B" : "var(--color-white)"};
    cursor: pointer;
    color:  ${({background}) => background  ? "#fff" : "#17677B"}; ;
    border-radius: 54px;
    width: 100px;
    height: fit-content;
    padding: 0.5rem;
    flex-direction: column;
    ${FlexStyle}
    justify-content: center;
    font-size: 1rem;
    margin: 0 10px;

    &:hover {
        background: #17677B;
        color: #fff;
    }
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: max(3vw,2rem) 0 0;

    

    div {
        grid-column: span 1;
        cursor: pointer;
        


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            box-shadow: 10px 10px 5px #ccc;
            -moz-box-shadow: 10px 10px 5px #ccc;
            -webkit-box-shadow: 10px 10px 5px #ccc;
            -khtml-box-shadow: 10px 10px 5px #ccc;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 700px) and (max-width: 989px) {
        grid-template-columns: repeat(2, 1fr);
        
        div {
            height: auto
        }
    }

    @media screen and (min-width: 990px) {
        grid-template-columns: repeat(3, 1fr); 
        div {
            height: 280px;
        }
    }
    
`


const GalleryImages = () => {
    const dispatch = useDispatch()
    //const Query = useMediaQuery("(min-width: 600px)")
    const { gallary, largeA4Image } = useSelector(state => state.gallary)
    const { pathname } = useLocation()
    const [apartmentName, setApartmentName] = useState("")
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const showPictures = (id) => {
        setIsOpen(true)
        setCurrentIndex(id)
    }

    let images = []

    for (var i = 0; i < gallary.length; i++) {
        images = largeA4Image
    }


    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    
    
    

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen])
    
    

    const GetImages = (id) => {
        dispatch(fetchGallarySuccess())
        setApartmentName(id)
    }


    if(pathname === '/gallery/videos'){ 
        return (
            <Main paddingleft="true" paddingRight="true" >
                <Error title="We are updating our gallery. Please check back." />
            </Main>
            )
    }

    if(pathname === '/gallery/cars' ) { 
        return (
            <Main paddingleft="true" paddingRight="true" >
                <Error title="We are updating our gallery. Please check back." />
            </Main>
        )
    }

    if(pathname === '/gallery/experience') {
        return ( 
            <Main paddingleft="true" paddingRight="true" >
                <Error title="We are updating our gallery. Please check back." />
            </Main>
        )
    }



    return (
        <>
            {isOpen  && <Backdrop onClick={()=> setIsOpen(!isOpen)} zIndex="4" theme="rgba(0, 0, 0, .9)" /> }
            <ImageModal 
                isOpen={isOpen} 
                gotoPrevious={gotoPrevious} 
                gotoNext={gotoNext} 
                images={images} 
                currentImageIndex={currentImageIndex} 
                setIsOpen={setIsOpen} 
            />
            <Section>
                {pathname === '/gallery/apartments' && (
                    <Main  paddingleft="true" paddingRight="true">
                        <Header>
                            <div>
                                <h3>Pictures of A4</h3>
                            </div>
                            <div>
                                {['A4', 'C4', 'U3'].map((item, index) => (
                                    <Span background={apartmentName === item} onClick={() => GetImages(item)}>{item}</Span>
                                ))}
                            </div>
                        </Header>
                        <ImageContainer>
                            {gallary?.map((item, index) => (
                                <div onClick={() => showPictures(index)}>
                                    <img src={item?.src} alt={item.title} key={index} />
                                </div>
                            ))}
                        </ImageContainer>
                    </Main>
                )}
            </Section>
        </>
    )
}

export default GalleryImages