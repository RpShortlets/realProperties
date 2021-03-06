import { useSelector } from "react-redux"
import styled from "styled-components/macro"


// import localforage from "localforage"

// let propertyDetails = localforage.createInstance({
//     name: "PropertyDetails"
// });

const HeaderContents = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: end;

        > div:last-child {
            display: flex;
            flex-direction: column;
        }

        h1, p {
            margin: 0;
        }

        h1 {
            font-size: var(--font-medium);
            color: var(--color-dark);
        }

        p {
            font-size: var(--font-small-screen);
            color: var(--color-darker-gray);
        }

    }

    
`

// const SvgStyle = css`
//     font-size: 14px;
// `

// const SavedIcon = styled(AiOutlineHeart)`
//     ${SvgStyle}
// `

// const LikeIcon = styled(FiShare) `
//     ${SvgStyle}
// `

const PropertyName = () => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)

    // const cached = JSON.parse(localStorage.getItem('PropertyDetails'))


    return (
        <HeaderContents>
            <div>
                <h1>{general_info[0]?.apartment_name && general_info[0]?.apartment_name}</h1>
                <p>{general_info[0]?.address && general_info[0]?.address}</p>
            </div>
            {/* <div>
                <div style={{marginRight: '20px'}}>
                    {status === 'loading' ?  <SkeletonLoader /> : (<Button fontWeight='600' icon={<SavedIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Save" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />)}
                </div>
                <div>
                    {status === 'loading' ?  <SkeletonLoader /> : (<Button fontWeight='600' icon={<LikeIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Share" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />)}
                </div>
            </div> */}
        </HeaderContents>
    )
}

export default PropertyName
