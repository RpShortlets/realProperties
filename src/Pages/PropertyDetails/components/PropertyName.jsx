import { useSelector } from "react-redux"
import Button from "../../../components/Button/Button"
import styled, { css } from "styled-components/macro"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"

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

const PropertyName = () => {
    const {PropertyDetails: {general_info}} = useSelector(state => state.propertyDetails)
    const GeneralInfo = general_info?.map((data) => data)

    return (
        <HeaderContents>
            <div>
                <h1>{GeneralInfo[0]?.apartment_name}</h1>
                <p>{GeneralInfo[0]?.address}</p>
            </div>
            <div>
                <div style={{marginRight: '20px'}}>
                    <Button fontWeight='600' icon={<SavedIcon/>} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Save" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)"  color="var(--color-primary-dark)"  />
                </div>
                <div>
                    <Button fontWeight='600' icon={<LikeIcon />} display='flex' alignT='center' fontSize="var(--font-xtra-small-screen)" title="Share" borderRadius="10px" padding="10px 20px" background="transparent" border="2px solid rgba(28, 123, 147, 1)" color="var(--color-primary-dark)" />
                </div>
            </div>
        </HeaderContents>
    )
}

export default PropertyName
