import React, { useEffect }  from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Bk from "../../image/comingImg.png"
import PropertyCard from "../../components/PropertyCard/PropertyCard"
import { getAllComingSoonProp } from '../../redux/actionCreators/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { SkeletonLoader } from '../../components/Loader/Skeleton'




const Section = styled.section `
    height: 100vh;
    background: rgba(224, 224, 224, 1);
`

const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    width: 100%;
    position:relative;

    .content {
        grid-column: 1/3;
    }


    .ImageBk {
        background-image: url(${Bk});
        background-repeat: no-repeat;
        background-position: center;
    }

    .comingCard {
        position: absolute;
        overflow: scroll;
        left: 5%;
        top: 15%;
        background: #fff;
        width: 90%;
        height: 70%;
        padding: max(5vh, 1.5rem) max(1vh, 1rem) 0 max(5vh, 1rem);


        div {
            h1 {
                font-size: var(--font-small);
                font-weight: 600;
                text-align: center;
                margin-bottom: 2rem;
            }
        }
    }

    @media screen and (min-width: 601px) {
        .comingCard { 
            left: 25%;
            top: 15%;
            width: 60%;
        
        }
    }

`

const ComingResult = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {proceess, comingResults} = useSelector(state => state.comingsoonReducer)


    const handleGetDetails = (id) => {
        navigate(`/coming-soon/apartment/${id}`)
    }

    useEffect(() => {
        dispatch(getAllComingSoonProp())
    }, [dispatch])

    return (
        <>  
            <Section>
                <Container data-testId="comingId">
                    <div className="content" >

                    </div>
                    <div className='ImageBk'></div>
                    <div className="comingCard">
                        <div>
                            <h1 data-testId="comingHeader" > {proceess === "loading" ? <SkeletonLoader width="20vw" height={"20px"} />  : proceess
                                === "succeeded" &&  "Up Coming Apartments"}</h1>
                            <div>
                                {proceess === "loading" ? 
                                    <div>
                                        <SkeletonLoader width="100%" height={"200px"} /> 
                                        <SkeletonLoader width="100%" height={"200px"} /> 
                                    </div>
                                : proceess === "succeeded" && 
                                (   
                                    <>
                                        {comingResults?.result?.map((item) => (
                                            <PropertyCard btn data={item} title="View" color handleGetDetails={() => handleGetDetails(item?.apartment_id)}/>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default ComingResult