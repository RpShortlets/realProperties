import styled, {css} from "styled-components/macro"
import { useSelector } from "react-redux"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"

const BorderStyle = css`
    border-top:  1.80872px solid #000000;
    border-bottom:  1.80872px solid #000000;
    padding: max(1vw, 1rem) 0;
    margin-top: max(2vw, 1rem);

    @media screen and (min-width: 769px) {
        border: 1.80872px solid #000000;
        box-sizing: border-box;
        border-radius: 9.04362px;
        padding: max(1vw, 1rem);
    }
`

const H2 = css`
    font-size: var(--font-small-screen);
    font-weight: 600;
    margin: 0;
`

const Description = styled.div `
    grid-column: 1/4;

    div {
        ${BorderStyle}
    }


    h2 {
        ${H2}
    }

    p {
        font-size: var(--font-xtra-small-screen);
        margin: 0;
        justify-content: justify;
        color: var(--color-dark);
        line-height: 2;
    }

`

const PropertyDescription = ({status}) => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const GeneralInfo = general_info?.map((data) => data)

    const cached = JSON.parse(localStorage.getItem('PropertyDetails'))
    
    return (
        <Description>
        {status === "loading" ? <SkeletonLoader  height='300px'/> : (
            <>
                <h2>Description</h2>
                <div>
                    <p>{cached ? cached?.general_info[0]?.property_description : GeneralInfo[0]?.property_description}</p> 
                </div>
            </>
        )}
        </Description>
    
    )
}

export default PropertyDescription
