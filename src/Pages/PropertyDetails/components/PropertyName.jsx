import { useSelector } from "react-redux"
import Button from "../../../components/Button/Button"
import styled, { css } from "styled-components/macro"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"

const HeaderContents = styled.div `
    display: none;

    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: end;

        > div:last-child {
            display: flex;
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

const SvgStyle = css`
    font-size: 14px;
`

const SavedIcon = styled(AiOutlineHeart)`
    ${SvgStyle}
`

const LikeIcon = styled(FiShare) `
    ${SvgStyle}
`

const PropertyName = ({status}) => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)


    return (
        <HeaderContents>
            <div>
                <h1>{status === 'loading' ?  <SkeletonLoader />  : general_info[0]?.apartment_name}</h1>
                <p>{status === 'loading' ?  <SkeletonLoader /> : general_info[0]?.address}</p>
            </div>
            <div>
                <div style={{marginRight: '20px'}}>
                    {status === 'loading' ?  <SkeletonLoader /> : (<Button fontWeight='600' icon={<SavedIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Save" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />)}
                </div>
                <div>
                    {status === 'loading' ?  <SkeletonLoader /> : (<Button fontWeight='600' icon={<LikeIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Share" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />)}
                </div>
            </div>
        </HeaderContents>
    )
}

export default PropertyName
