import styled from "styled-components/macro"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"
import { FlexStyle } from "../../../styles/globalStyles"
import { SocialDistance } from "../../../Svg/svg"
import { WatchIcon, PetsIcon, NoSmokingIcon, FirstAidDark, SmokeAlarm } from "../../../Svg/svg"


const Rules = styled.div `
    margin: max(3vw,2rem) 0;
    border-top: 1px solid var(--color-dark);
`

const RulesContainer = styled.div `
    padding: max(2.2vw, 1.2rem) 0;
    display: flex;


    h2 {
        font-size: var(--font-small-screen);
        font-weight: 600;
        margin: 0;
    }
`

const RuleContent = styled.div `
    ${FlexStyle}
    /* align-items: flex-end !important; */
    margin: max(1vw, 1rem) 0;

    svg {
        font-size: var(--font-small);
    }

    span:first-child {
        margin-right: .7rem;
        ${FlexStyle}
    }

    span:last-child {
        font-size: var(--font-xtra-small-screen);
        font-weight: normal;
    }
`

const PropertyRules = ({status}) => {
    return (
        <Rules>
            <RulesContainer>
                <div style={{flex: '1'}}>
                    <div>
                        <h2>{status === 'loading' ? <SkeletonLoader width="30%" />  : 'House Rules'}</h2>
                    </div>
                    <RuleContent>
                    {status === 'loading' ? <SkeletonLoader />  : <span>{WatchIcon}</span>}
                    {status === 'loading' ? <SkeletonLoader /> : <span>Check-in : 2:00 PM </span>}
                    </RuleContent>
                    <RuleContent>
                    {status === 'loading' ? <SkeletonLoader /> : <span>{WatchIcon}</span>}
                    {status === 'loading' ? <SkeletonLoader /> : <span>Check-out : 11:00 AM</span>}
                    </RuleContent>
                    <RuleContent>
                        {status === 'loading' ? <SkeletonLoader /> : <span>{NoSmokingIcon}</span>}
                        {status === 'loading' ? <SkeletonLoader /> : <span>No Smoking</span>}
                    </RuleContent>
                    <RuleContent>
                        {status === 'loading' ? <SkeletonLoader /> : <span>{PetsIcon}</span>}
                        {status === 'loading' ? <SkeletonLoader /> : <span>No pets allowed</span>}
                    </RuleContent>
                </div>
                <div style={{flex: '1'}}>
                    <div>
                        {status === "loading" ? <SkeletonLoader  width='40%'/> : (
                            <h2>Health and Safety</h2>
                        ) }
                    </div>
                    <RuleContent>
                        {status === 'loading' ? <SkeletonLoader  height='40'/> : <span>{SmokeAlarm}</span>}
                        {status === 'loading' ? <SkeletonLoader /> : <span>Smoke Alarm</span>}
                    </RuleContent>
                    <RuleContent>
                        {status === 'loading' ? <SkeletonLoader /> : <span>{SocialDistance}</span>}
                        {status === 'loading' ? <SkeletonLoader /> : <span>Social distancing and COVID-19 protocol</span>}
                    </RuleContent> 
                    <RuleContent>
                        {status === 'loading' ? <SkeletonLoader /> : <span>{FirstAidDark}</span>}
                        {status === 'loading' ? <SkeletonLoader /> : <span>First aid kit</span>}
                    </RuleContent>                                 
                </div>
            </RulesContainer>
        </Rules>
    )
}

export default PropertyRules
